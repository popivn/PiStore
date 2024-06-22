<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400');
    exit; // Dừng mã ngay tại đây
}

// Kiểm tra xem request method có phải là POST không
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lấy dữ liệu từ request body dưới dạng JSON
    $data = json_decode(file_get_contents("php://input"), true);

    // Kiểm tra xem dữ liệu có tồn tại không
    if (!empty($data)) {
        // Duyệt qua mảng dữ liệu và thêm vào cơ sở dữ liệu
        foreach ($data as $platform) {
            $gameID = $platform['gameID'];
            $PlatformID = $platform['platformID']; // Sửa PlatformID thành platformID

            // Kiểm tra xem PlatformID có tồn tại không
            if (!isset($PlatformID)) {
                // Trả về mã lỗi nếu PlatformID không tồn tại
                http_response_code(400); // Bad Request
                echo json_encode(array("message" => "PlatformID is required."));
                exit;
            }

            // Chuẩn bị câu lệnh SQL chèn dữ liệu vào bảng gameplatforms
            $query = "INSERT INTO gameplatforms (GameID, PlatformID) VALUES (?, ?)";

            // Chuẩn bị và thực thi câu lệnh SQL
            $stmt = $conn->prepare($query);
            $stmt->bindParam(1, $gameID);
            $stmt->bindParam(2, $PlatformID);

            if ($stmt->execute()) {
                echo json_encode(array("message" => "Data inserted successfully"));
            } else {
                echo json_encode(array("message" => "Failed to insert data"));
            }
        }
    } else {
        // Trả về mã lỗi nếu dữ liệu không tồn tại hoặc không hợp lệ
        http_response_code(400); // Bad Request
        echo json_encode(array("message" => "No or invalid data provided."));
    }
} else {
    // Trả về mã lỗi nếu không phải là phương thức POST
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
