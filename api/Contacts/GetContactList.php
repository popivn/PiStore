<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

$query = "SELECT contactID AS Contact_id, Name FROM Contacts";

$stmt = $conn->prepare($query);
$stmt->execute();
$contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);

if ($contacts) {
    echo json_encode($contacts);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "No contacts found"));
}
?>
