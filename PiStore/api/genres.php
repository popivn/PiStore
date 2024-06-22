<?php
header("Access-Control-Allow-Origin: *");
require_once 'connect.php'; 
$database = new Database();
$conn = $database->getConnection();
$query = "SELECT * FROM genres";
$result = $conn->query($query);
if ($result !== false) {
    $genres = $result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($genres ?: array("message" => "No genres found."));
} else {
    echo json_encode(array("error" => "Query failed: " . $conn->errorInfo()[2]));
}
?>
