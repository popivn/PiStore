<?php
require_once '../connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lấy gameID từ dữ liệu gửi lên
    $gameID = $_POST['gameID'];

    try {
        // Khởi tạo kết nối đến cơ sở dữ liệu
        $database = new Database();
        $conn = $database->getConnection();

        // Chuẩn bị câu lệnh SQL để truy vấn dữ liệu
        $query = "SELECT Platforms.Name 
                  FROM Gameplatforms 
                  JOIN Platforms ON Gameplatforms.PlatformID = Platforms.PlatformID 
                  WHERE Gameplatforms.GameID = :gameID";

        $stmt = $conn->prepare($query);
        $stmt->bindParam(':gameID', $gameID);
        $stmt->execute();

        $platforms = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Trả về dữ liệu dưới dạng JSON
        echo json_encode($platforms);
    } catch (PDOException $e) {
        // Trả về mã lỗi 500 nếu có lỗi xảy ra
        http_response_code(500); // Internal Server Error
        echo json_encode(array("message" => "Internal Server Error: " . $e->getMessage()));
    }
} else {
    // Trả về mã lỗi 405 nếu phương thức không được phép
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
