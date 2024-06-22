<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Đọc dữ liệu từ form URL-encoded
    $postData = file_get_contents('php://input');
    $params = [];
    parse_str($postData, $params);
    
    if (empty($params['email']) || empty($params['password'])) {
        http_response_code(400);
        echo json_encode(array("message" => "Email and password are required."));
        exit();
    }

    $email = $params['email'];
    $password = $params['password'];

    // Truy vấn để kiểm tra email và password
    $query = "SELECT * FROM Users WHERE email = :email AND password = :password";
    $stmt = $conn->prepare($query); 
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        http_response_code(200);
        echo json_encode(array("exists" => true));
    } else {
        http_response_code(401);
        echo json_encode(array("exists" => false, "message" => "Email or password is incorrect."));
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
