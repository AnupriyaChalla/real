<?php
header_remove("Referer-Policy");
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Origin, X-Requested-With, Accept");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(array("error" => "Method Not Allowed"));
    exit;
}

$mediaDirectory = 'uploads/'; // Adjust this to your actual directory structure

$servername = "sagar-my-sql.mysql.database.azure.com";
$username = "MySqlAdmin";
$password = "SqlAdmin@123";
$dbname = "dev";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    $error_message = "Connection failed: " . $conn->connect_error;
    echo json_encode(array("error" => $error_message));
    http_response_code(500);
    exit();
}

$sql = "SELECT `ID`, `Location`, `Description`, `Price`, `Image1`, `Image2`, `Image3`, `Image4`, `Image5`, `Image6`, `Image7`, `Image8`, `Video` FROM apart_images";
$stmt = $conn->prepare($sql);
if (!$stmt) {
    $error_message = "SQL preparation error: " . $conn->error;
    echo json_encode(array("error" => $error_message));
    http_response_code(500);
    exit();
}

$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $properties = array();

    while ($row = $result->fetch_assoc()) {
        $mediaFiles = array();

        // Construct image paths
        for ($i = 1; $i <= 8; $i++) {
            $imageField = "Image" . $i;
            if (!empty($row[$imageField])) {
                $mediaFiles[$imageField] =  $row[$imageField];
            }
        }

        // Construct video path
        if (!empty($row['Video'])) {
            $mediaFiles['Video'] = $row['Video'];
        }

        $formattedPrice = "₹" . number_format($row["Price"], 2);

        $properties[] = array(
            "ID" => $row["ID"],
            "Location" => $row["Location"],
            "Description" => $row["Description"],
            "Price" => $formattedPrice,
            "MediaFiles" => $mediaFiles
        );
    }

    echo json_encode($properties);
} else {
    echo json_encode(array("message" => "No properties found"));
    http_response_code(404);
}

$stmt->close();
$conn->close();
?>
