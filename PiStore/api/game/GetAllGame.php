<?php
require_once '../connect.php';
$database = new Database();
$conn = $database->getConnection();
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT * FROM Games";
    echo $query;
    $stmt = $conn->prepare($query);
    $stmt->execute();
    $games = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if ($games) {
        echo json_encode($games);
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "No games found"));
    }
} else {
    // Trả về mã lỗi nếu không phải là phương thức GET
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
