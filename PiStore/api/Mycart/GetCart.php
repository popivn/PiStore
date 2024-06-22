<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userID = $_POST['userID'];

    $query = "SELECT ci.* 
              FROM cartitems ci
              JOIN cart c ON ci.cartID = c.cartID
              WHERE c.userID = :userID";

    $stmt = $conn->prepare($query);
    $stmt->bindParam(':userID', $userID);
    $stmt->execute();

    $cartItems = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($cartItems);
} else {
    http_response_code(405);
    echo json_encode(array("message" => "Method not allowed."));
}
?>
