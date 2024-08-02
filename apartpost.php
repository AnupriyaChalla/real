<?php
// Remove Referer-Policy header
header_remove("Referer-Policy");

// Allow cross-origin requests
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Origin, X-Requested-With, Accept");

// Set response content type to JSON
header("Content-Type: application/json");

// Handle OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("error" => "Method Not Allowed"));
    exit;
}

// Function to handle file upload and return file path
function handleFileUpload($file, $targetDir) {
    $maxFileSize = 500 * 1024 * 1024; // 500 MB
    $allowedImageTypes = array('image/jpeg', 'image/png', 'image/gif');
    $allowedVideoTypes = array('video/mp4', 'video/webm', 'video/mpeg');

    if ($file['error'] !== UPLOAD_ERR_OK) {
        return array('error' => "Upload failed with error code " . $file['error']);
    }

    if ($file['size'] > $maxFileSize) {
        return array('error' => "File size exceeds the maximum limit of 500MB.");
    }

    $fileType = mime_content_type($file['tmp_name']);

    if (!in_array($fileType, array_merge($allowedImageTypes, $allowedVideoTypes))) {
        return array('error' => "Invalid file type. Only JPEG, PNG, GIF, MP4, WebM, and MPEG videos are allowed.");
    }

    $targetFile = $targetDir . basename($file['name']);

    if (!move_uploaded_file($file['tmp_name'], $targetFile)) {
        return array('error' => "Failed to move uploaded file.");
    }

    return array('path' => $targetFile);
}

// Check if all form fields are set and not empty
if (isset($_POST['location']) && isset($_POST['description']) && isset($_POST['price'])) {
    $location = $_POST['location'];
    $description = $_POST['description'];
    $price = floatval($_POST['price']); // Convert price to float (or use appropriate data type as per your database)

    // Process each image and video file upload
    $targetDir = 'uploads/';
    $imagePaths = array_fill(0, 8, 'none'); // Initialize all image paths with 'none'
    $videoPath = null;

    for ($i = 1; $i <= 8; $i++) {
        $fileKey = 'image_data' . $i;
        if (isset($_FILES[$fileKey])) {
            $result = handleFileUpload($_FILES[$fileKey], $targetDir);
            if (isset($result['path'])) {
                $imagePaths[$i - 1] = $result['path']; // Store path if uploaded
            } else {
                echo json_encode(array("error" => $result['error']));
                http_response_code(400);
                exit();
            }
        }
    }

    if (isset($_FILES['video_data'])) {
        $result = handleFileUpload($_FILES['video_data'], $targetDir);
        if (isset($result['path'])) {
            $videoPath = $result['path']; // Store video path if uploaded
        } else {
            echo json_encode(array("error" => $result['error']));
            http_response_code(400);
            exit();
        }
    }

    // Database configuration
    $servername = "sagar-my-sql.mysql.database.azure.com";
    $username = "MySqlAdmin";
    $password = "SqlAdmin@123";
    $dbname = "dev";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        echo json_encode(array("error" => "Connection failed: " . $conn->connect_error));
        http_response_code(500);
        exit();
    }

    // Prepare SQL statement to insert property details into database
    $stmt = $conn->prepare("INSERT INTO apart_images (Location, Description, Price, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Video)
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    if (!$stmt) {
        echo json_encode(array("error" => "Failed to prepare statement: " . $conn->error));
        http_response_code(500);
        exit();
    }

    // Bind parameters
    $stmt->bind_param("ssdsssssssss", $location, $description, $price,
                      $imagePaths[0], $imagePaths[1], $imagePaths[2], $imagePaths[3],
                      $imagePaths[4], $imagePaths[5], $imagePaths[6], $imagePaths[7],
                      $videoPath); 

    // Execute the statement
    if ($stmt->execute()) {
        echo json_encode(array("message" => "Property uploaded successfully."));
    } else {
        echo json_encode(array("error" => "Error uploading property: " . $stmt->error));
        http_response_code(500);
    }

    // Close statement
    $stmt->close();

    // Close connection
    $conn->close();
} else {
    // Missing form fields or file uploads
    echo json_encode(array("error" => "Please fill all required fields and select all images and video."));
    http_response_code(400);
}
?>
