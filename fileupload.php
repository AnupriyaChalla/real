<?php
// Remove Referer-Policy header
header_remove("Referer-Policy");

// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Set response content type to JSON
header("Content-Type: application/json");

// Handle OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if file was uploaded
    if (isset($_FILES['file'])) {
        $file = $_FILES['file'];

        // Validate file size (e.g., max 5MB)
        $maxFileSize = 5 * 1024 * 1024; // 5 MB
        if ($file['size'] > $maxFileSize) {
            echo json_encode(array("success" => false, "message" => "File size exceeds the maximum limit of 5MB."));
            http_response_code(400);
            exit();
        }

        // Validate file type (e.g., allow only images)
        $allowedTypes = array('image/jpeg', 'image/png', 'image/gif');
        if (!in_array($file['type'], $allowedTypes)) {
            echo json_encode(array("success" => false, "message" => "Invalid file type. Only JPEG, PNG, and GIF are allowed."));
            http_response_code(400);
            exit();
        }

        // Read file content into a variable
        $fileContent = file_get_contents($file['tmp_name']);
        $fileContent = addslashes($fileContent); // Escape special characters

        // Database connection parameters
        $servername = "localhost:3306";
        $username = "root"; // Assuming default username for localhost
        $password = ""; // No password in this case
        $dbname = "imagedb"; // Change this to your database name

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            // Error connecting to the database
            $response = array(
                "success" => false,
                "message" => "Connection failed: " . $conn->connect_error
            );

            echo json_encode($response); // Output JSON response
            exit(); // Terminate script execution
        }

        // Prepare SQL statement to insert file data
        $sql = "INSERT INTO files (filename, filetype, filesize, filecontent) VALUES ('" . $conn->real_escape_string($file['name']) . "', '" . $conn->real_escape_string($file['type']) . "', " . $file['size'] . ", '{$fileContent}')";

        if ($conn->query($sql) === TRUE) {
            $response = array(
                "success" => true,
                "message" => "File uploaded successfully"
            );
            echo json_encode($response);
            http_response_code(200);
        } else {
            $response = array(
                "success" => false,
                "message" => "Error: " . $sql . "<br>" . $conn->error
            );
            echo json_encode($response);
            http_response_code(500);
        }

        // Close the connection
        $conn->close();
    } else {
        $response = array(
            "success" => false,
            "message" => "No file uploaded"
        );
        echo json_encode($response);
        http_response_code(400);
    }
} else {
    // Invalid request method
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method Not Allowed"));
}
?>
