<?php
header("Access-Control-Allow-Origin: *");
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

$query = "SELECT * FROM Users WHERE email = :email AND password = :password";
$result = $conn->query($query);

if ($result !== false) {
    $users = $result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users ?: array("message" => "No users found."));
} else {
    echo json_encode(array("error" => "Query failed: " . $conn->errorInfo()[2]));
}
?>
