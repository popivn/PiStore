<?php
require_once '../connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $database = new Database();
        $conn = $database->getConnection();
        $query = "SELECT GameID FROM Games";

        $stmt = $conn->prepare($query);
        $stmt->execute();

        $gameIDs = $stmt->fetchAll(PDO::FETCH_COLUMN);

        echo json_encode($gameIDs);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(array("message" => "Internal Server Error: " . $e->getMessage()));
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
