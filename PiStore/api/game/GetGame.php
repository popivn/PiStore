<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

$gameID = $_POST['gameID'];

$query = "SELECT * FROM Games WHERE GameID = :gameID";

$stmt = $conn->prepare($query);
$stmt->bindParam(':gameID', $gameID);
$stmt->execute();

$game = $stmt->fetch(PDO::FETCH_ASSOC);

// In ra dữ liệu trước khi mã hóa JSON để kiểm tra
print_r($game);

if ($game) {
    // Sanitize strings to ensure proper UTF-8 encoding
    array_walk_recursive($game, function (&$value) {
        if (is_string($value)) {
            $value = mb_convert_encoding($value, 'UTF-8', 'UTF-8');
        }
    });

    echo json_encode($game, JSON_UNESCAPED_UNICODE);
} else {
    // Trả về mã lỗi nếu không tìm thấy game
    http_response_code(404); // Not Found
    echo json_encode(array("message" => "Game not found"), JSON_UNESCAPED_UNICODE);
}