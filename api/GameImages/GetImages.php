<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $gameID = $_POST['gameID'];

    $query = "SELECT imageUrl FROM GameImages WHERE GameID = :gameID";

    $stmt = $conn->prepare($query);
    $stmt->bindParam(':gameID', $gameID);
    $stmt->execute();

    $images = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($images) {
        echo json_encode($images);
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "Images not found"));
    }
} else {
    http_response_code(405);
    echo json_encode(array("message" => "Method not allowed."));
}
?>
