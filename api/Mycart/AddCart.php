<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userID = $_POST['UserID'];

    // Kiểm tra xem UserID có tồn tại trong bảng cart hay không
    $checkQuery = "SELECT CartID FROM cart WHERE UserID = ?";
    $checkStmt = $conn->prepare($checkQuery);
    $checkStmt->bindParam(1, $userID);
    $checkStmt->execute();
    $existingCart = $checkStmt->fetch(PDO::FETCH_ASSOC);

    // Nếu UserID không tồn tại trong bảng cart, thêm dữ liệu vào bảng cart
    if (!$existingCart) {
        $insertQuery = "INSERT INTO cart (UserID) VALUES (?)";
        $insertStmt = $conn->prepare($insertQuery);
        $insertStmt->bindParam(1, $userID);
        $insertStmt->execute();

        // Lấy cartID của bản ghi vừa được thêm vào
        $cartID = $conn->lastInsertId();
    } else {
        // Nếu UserID đã tồn tại trong bảng cart, sử dụng cartID hiện có
        $cartID = $existingCart['CartID'];
    }

    // Trả về kết quả kèm theo cartID
    echo json_encode(array("message" => "Cart updated successfully", "cartID" => $cartID));
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
