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
    // Retrieve data from request body
    $data = json_decode(file_get_contents('php://input'), true);

    // Database connection parameters
    $servername = "localhost:3306";
    $username = "root"; // Assuming default userndame for localhost
    $password = ""; // No password in this case
    $dbname = "contactdb";

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
    } else {
        // Extract data from request
        $name = $conn->real_escape_string($data['Name']);
        $mobile = $conn->real_escape_string($data['Mobile']);
        $email = $conn->real_escape_string($data['Email']);
        $radio = $conn->real_escape_string($data['Radio']);
        $message = $conn->real_escape_string($data['Message']);

        // Prepare SQL statement to insert data
        $sql = "INSERT INTO user_info (Name, Email, Mobile, Radio, Message) VALUES ('$name', '$email', '$mobile', '$radio', '$message')";

        if ($conn->query($sql) === TRUE) {
            $response = array(
                "success" => true,
                "message" => "Data inserted successfully"
            );
        } else {
            $response = array(
                "success" => false,
                "message" => "Error: " . $sql . "<br>" . $conn->error
            );
        }

        // Send response as JSON
        echo json_encode($response);
        $conn->close(); // Close the connection
    }
} else {
    // Invalid request method
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method Not Allowed"));
}
?>
