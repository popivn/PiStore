<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

// Kiểm tra xem request method có phải là POST không
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lấy dữ liệu từ $_POST
    $gameID = $_POST['gameID'];
    $name = $_POST['name'];
    $price = $_POST['price'];
    $dateTimeRelease = $_POST['dateTimeRelease'];
    $publisher = $_POST['publisher'];
    $description = $_POST['description'];
    $type = $_POST['type'];
    $quantitySold = $_POST['quantitySold'];
    $addedDate = $_POST['addedDate'];
    $developer = $_POST['developer'];

    // Kiểm tra xem dữ liệu hình ảnh đã được gửi đi hay không
    if (isset($_FILES['images']) && $_FILES['images']['error'] === UPLOAD_ERR_OK) {
        // Lấy thông tin về tệp hình ảnh
        $image = $_FILES['images'];
        $target_dir = "${rootURL}/uploads/"; 
        $imageFileType = pathinfo($image['name'], PATHINFO_EXTENSION);
        $new_file_name = uniqid() . '.' . $imageFileType;
        $target_path = $target_dir . $new_file_name;

        // Di chuyển tệp tải lên vào đúng vị trí
        if (move_uploaded_file($image['tmp_name'], $target_path)) {
            // Đường dẫn URL của hình ảnh để lưu vào cơ sở dữ liệu
            $image_url = "${rootURL}uploads/" . $new_file_name;

            // Chuẩn bị câu lệnh SQL chèn dữ liệu vào bảng Games
            $query = "INSERT INTO Games (GameID, Name, Price, DateTimeRelease, Publisher, Description, Image, Type, QuantitySold, AddedDate, Developer) 
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            // Chuẩn bị và thực thi câu lệnh SQL
            $stmt = $conn->prepare($query);
            $stmt->bindParam(1, $gameID);
            $stmt->bindParam(2, $name);
            $stmt->bindParam(3, $price);
            $stmt->bindParam(4, $dateTimeRelease);
            $stmt->bindParam(5, $publisher);
            $stmt->bindParam(6, $description);
            $stmt->bindParam(7, $image_url); // Lưu đường dẫn URL của hình ảnh
            $stmt->bindParam(8, $type);
            $stmt->bindParam(9, $quantitySold);
            $stmt->bindParam(10, $addedDate);
            $stmt->bindParam(11, $developer);

            if ($stmt->execute()) {
                echo json_encode(array("message" => "Data inserted successfully"));
            } else {
                echo json_encode(array("message" => "Failed to insert data"));
            }
        } else {
            // Xử lý lỗi khi di chuyển tệp tải lên vào thư mục đích
            http_response_code(500);
            echo json_encode(array("message" => "Failed to move uploaded file."));
        }
    } else {
        // Xử lý lỗi nếu không có dữ liệu hình ảnh hoặc có lỗi khi tải lên
        http_response_code(400);
        echo json_encode(array("message" => "No or invalid Blob data provided."));
    }
} else {
    // Trả về mã lỗi nếu không phải là phương thức POST
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
