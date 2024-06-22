<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $gameID = $_POST['gameID'];

    $query = "SELECT c.Name AS ContactName, gc.ContactURL
              FROM gamecontacts gc
              JOIN Contacts c ON gc.ContactID = c.ContactID
              WHERE gc.GameID = :gameID";

    $stmt = $conn->prepare($query);
    $stmt->bindParam(':gameID', $gameID);
    $stmt->execute();
    $contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if ($contacts) {
        echo json_encode($contacts);
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "No contacts found for the game"));
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
