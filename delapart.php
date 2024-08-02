<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // Replace * with your React app's URL in production
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$servername = "sagar-my-sql.mysql.database.azure.com";
$username = "MySqlAdmin";
$password = "SqlAdmin@123";
$dbname = "dev";

// Function to connect to the database
function connectToDatabase() {
    global $servername, $username, $password, $dbname;
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

// Function to delete a property by ID
function deleteProperty($id) {
    $conn = connectToDatabase();
    
    // Prepare DELETE statement
    $sql = "DELETE FROM images WHERE ID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    
    // Execute statement
    if ($stmt->execute()) {
        $stmt->close();
        $conn->close();
        return true; // Deletion successful
    } else {
        $stmt->close();
        $conn->close();
        return false; // Deletion failed
    }
}

// Handle DELETE request
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Check if 'id' parameter exists
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        
        // Delete property
        if (deleteProperty($id)) {
            http_response_code(200); // OK
            echo json_encode(["message" => "Property with ID $id deleted successfully"]);
        } else {
            http_response_code(500); // Internal Server Error
            echo json_encode(["error" => "Failed to delete property"]);
        }
    } else {
        http_response_code(400); // Bad Request
        echo json_encode(["error" => "Missing 'id' parameter"]);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["error" => "Method not allowed"]);
}
?>
