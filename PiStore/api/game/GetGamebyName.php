<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $gameName = $_POST['Name'];

    $query = "SELECT Name, GameID, Image FROM Games WHERE LOWER(Name) LIKE CONCAT('%', LOWER(:Name), '%') LIMIT 5";

    $stmt = $conn->prepare($query);
    $stmt->bindParam(':Name', $gameName);
    $stmt->execute();

    $games = $stmt->fetchAll(PDO::FETCH_ASSOC);
var_dump($games);
    if ($games) {
        echo json_encode($games);
    } else {
        http_response_code(404); // Not Found
        echo json_encode(array("message" => "No games found"));
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
