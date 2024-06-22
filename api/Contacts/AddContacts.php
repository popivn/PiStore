<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400');
    exit; 
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    if (!empty($data)) {
        foreach ($data as $contact) {
            $gameID = $contact['gameID'];
            $contactID = $contact['contactID'];
            $contactUrl = $contact['contactUrl'];
            $query = "INSERT INTO gamecontacts  (GameID, ContactID, ContactURL) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($query);
            $stmt->bindParam(1, $gameID);
            $stmt->bindParam(2, $contactID);
            $stmt->bindParam(3, $contactUrl);
            if ($stmt->execute()) {
                echo json_encode(array("message" => "Data inserted successfully"));
            } else {
                echo json_encode(array("message" => "Failed to insert data"));
            }
        }
    } else {
        http_response_code(400); // Bad Request
        echo json_encode(array("message" => "No or invalid data provided."));
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
