<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

// Kiểm tra xem request method có phải là POST không
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $gameID = $_POST['gameID'];
    $query = "DELETE FROM Games WHERE GameID = :gameID";

    // Chuẩn bị và thực thi câu lệnh SQL
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':gameID', $gameID);

    if ($stmt->execute()) {
        // Trả về thông báo thành công nếu xoá game thành công
        http_response_code(200); // OK
        echo json_encode(array("message" => "Game deleted successfully"));
    } else {
        // Trả về mã lỗi nếu xoá game không thành công
        http_response_code(500); // Internal Server Error
        echo json_encode(array("message" => "Failed to delete game"));
    }
} else {
    // Trả về mã lỗi nếu không phải là phương thức POST
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
