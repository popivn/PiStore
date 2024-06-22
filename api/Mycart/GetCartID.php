<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

// Kiểm tra xem request method có phải là POST không
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lấy userID từ dữ liệu POST
    $userID = $_POST['userID'];

    // Chuẩn bị câu lệnh SQL để lấy cartID từ bảng cart dựa trên userID
    $query = "SELECT cartID FROM cart WHERE userID = ?";

    // Chuẩn bị và thực thi câu lệnh SQL
    $stmt = $conn->prepare($query);
    $stmt->bindParam(1, $userID);
    $stmt->execute();

    // Kiểm tra kết quả trả về
    if ($stmt->rowCount() > 0) {
        // Fetch kết quả và trả về dưới dạng JSON
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($row);
    } else {
        // Trả về thông báo lỗi nếu không tìm thấy dữ liệu
        http_response_code(404); // Not Found
        echo json_encode(array("message" => "Cart not found for the given userID."));
    }
} else {
    // Trả về mã lỗi nếu không phải là phương thức POST
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
