<?php
require_once '../connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lấy PaymentMethodID từ dữ liệu được gửi lên
    $paymentMethodID = $_POST['paymentMethodID'];

    try {
        // Khởi tạo kết nối đến cơ sở dữ liệu
        $database = new Database();
        $conn = $database->getConnection();

        // Chuẩn bị câu lệnh SQL để truy vấn tên của phương thức thanh toán từ bảng paymentmethods
        $query = "SELECT Name FROM paymentmethods WHERE PaymentMethodID = :paymentMethodID";

        // Chuẩn bị và thực thi câu lệnh SQL
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':paymentMethodID', $paymentMethodID);
        $stmt->execute();

        // Lấy kết quả từ câu lệnh SQL
        $paymentMethodName = $stmt->fetchColumn();

        // Trả về tên của phương thức thanh toán dưới dạng JSON
        echo json_encode(array("paymentMethodName" => $paymentMethodName));
    } catch (PDOException $e) {
        http_response_code(500); // Internal Server Error
        echo json_encode(array("message" => "Internal Server Error: " . $e->getMessage()));
    }
} else {
    // Trả về lỗi nếu phương thức không được cho phép
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
