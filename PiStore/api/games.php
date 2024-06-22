<?php
require_once 'connect.php';
try {
    $database = new Database();
    $conn = $database->getConnection();

    $query = "SELECT * FROM `Games`";
    $statement = $conn->query($query);

    if ($statement !== false) {
        $games = $statement->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($games ?: array("message" => "No games found."));
    } else {
        throw new Exception("Query failed: " . $conn->errorInfo()[2]);
    }
} catch (PDOException $e) {
    echo json_encode(array("error" => "Database error: " . $e->getMessage()));
} catch (Exception $e) {
    echo json_encode(array("error" => $e->getMessage()));
}
?>
