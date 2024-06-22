<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

// Kiểm tra xem request method có phải là POST không
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lấy dữ liệu từ $_POST
    $RoleID = $_POST['RoleID'];
    $Birthday = $_POST['Birthday'];
    $Money = $_POST['Money'];
    $Username = $_POST['Username'];
    $Password = $_POST['Password'];
    $Email = $_POST['Email'];
    $FirstName = $_POST['FirstName'];
    $LastName = $_POST['LastName'];
    $Image = $_POST['Image'];

    // Chuẩn bị câu lệnh SQL chèn dữ liệu vào bảng Users
    $query = "INSERT INTO Users (RoleID, Birthday, Money, Username, Password, Email, FirstName, LastName, Image) 
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    // Chuẩn bị và thực thi câu lệnh SQL
    $stmt = $conn->prepare($query);
    $stmt->bindParam(1, $RoleID);
    $stmt->bindParam(2, $Birthday);
    $stmt->bindParam(3, $Money);
    $stmt->bindParam(4, $Username);
    $stmt->bindParam(5, $Password);
    $stmt->bindParam(6, $Email);
    $stmt->bindParam(7, $FirstName);
    $stmt->bindParam(8, $LastName);
    $stmt->bindParam(9, $Image);

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
