<?php
require_once '../connect.php';
$database = new Database();
$conn = $database->getConnection();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $cartItemID= $_POST['cartItemID'];
    $query = "DELETE FROM cartitems WHERE CartItemID = ?";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(1, $cartItemID);
    if ($stmt->execute()) {
        echo json_encode(array("message" => "CartItem deleted successfully"));
    } else {
        echo json_encode(array("message" => "Failed to delete cartItem"));
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
