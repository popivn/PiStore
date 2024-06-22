<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

// Kiểm tra xem request method có phải là POST không
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $DateTime = $_POST['DateTime'];
    $GameID = $_POST['GameID'];
    $PaymentMethodID = $_POST['PaymentMethodID'];
    $Price = $_POST['Price'];
    $CartID = $_POST['CartID'];
    $status = $_POST['Status'];
    

    // Chuẩn bị câu lệnh SQL chèn dữ liệu vào bảng cartitems
    $query = "INSERT INTO cartitems (DateTime, GameID, PaymentMethodID, Price, CartID, Status) 
              VALUES (?, ?, ?, ?, ?, ?)";

    // Chuẩn bị và thực thi câu lệnh SQL
    $stmt = $conn->prepare($query);
    $stmt->bindParam(1, $DateTime);
    $stmt->bindParam(2, $GameID);
    $stmt->bindParam(3, $PaymentMethodID);
    $stmt->bindParam(4, $Price);
    $stmt->bindParam(5, $CartID);
    $stmt->bindParam(6, $status);

    if ($stmt->execute()) {
        echo json_encode(array("message" => "Data inserted successfully"));
    } else {
        echo json_encode(array("message" => "Failed to insert data"));
    }
} else {
    // Trả về mã lỗi nếu không phải là phương thức POST
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
