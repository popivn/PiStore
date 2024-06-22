<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lấy dữ liệu từ $_POST
    $gameID = $_POST['GameID'];
    $name = $_POST['Name'];
    $price = $_POST['Price'];
    $dateTimeRelease = $_POST['DateTimeRelease'];
    $publisher = $_POST['Publisher'];
    $description = $_POST['Description'];
    $type = $_POST['Type'];
    $quantitySold = $_POST['QuantitySold'];
    $addedDate = $_POST['Addeddate'];
    $developer = $_POST['Developer'];

    // Kiểm tra xem hình ảnh có tồn tại không
    if (isset($_FILES['Image']) && $_FILES['Image']['error'] === UPLOAD_ERR_OK) {
        // Hình ảnh tồn tại, tiến hành cập nhật tất cả các thuộc tính
        $image = $_FILES['Image'];
        $target_dir = "C:/xampp/htdocs/PiStore/uploads/";
        $query_old_image = "SELECT Image FROM Games WHERE GameID = ?";
        $stmt_old_image = $conn->prepare($query_old_image);
        $stmt_old_image->bindParam(1, $gameID);
        $stmt_old_image->execute();
        $old_image_url = $stmt_old_image->fetchColumn();
        $file_path = $_SERVER['DOCUMENT_ROOT'] . parse_url($old_image_url, PHP_URL_PATH);
        if (file_exists($file_path)) {
            if (unlink($file_path)) {
                echo "Old image deleted successfully.";
            } else {
                echo "Failed to delete old image.";
                if ($error = error_get_last()) {
                    echo "Error: " . $error['message'];
                }
            }
        } else {
            echo "Old image not found.";
        }
        $imageFileType = pathinfo($image['name'], PATHINFO_EXTENSION);
        $new_file_name = uniqid() . '.' . $imageFileType;
        $target_file = $target_dir . $new_file_name;

        if (move_uploaded_file($image['tmp_name'], $target_file)) {
            $image_url = "${rootURL}uploads/" . $new_file_name;
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Failed to move uploaded file."));
            exit;
        }
    } else {
        // Hình ảnh không tồn tại, chỉ cập nhật các thuộc tính khác
        $image_url = NULL; // Đặt URL hình ảnh thành NULL
    }

    // Tiến hành cập nhật các thuộc tính khác ngoại trừ hình ảnh
    $query = "UPDATE Games 
              SET Name = ?, Price = ?, DateTimeRelease = ?, Publisher = ?, Description = ?, Type = ?, QuantitySold = ?, AddedDate = ?, Developer = ?";
    // Nếu hình ảnh tồn tại, bổ sung cập nhật hình ảnh vào câu lệnh SQL
    if ($image_url !== NULL) {
        $query .= ", Image = ?";
    }
    $query .= " WHERE GameID = ?";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(1, $name);
    $stmt->bindParam(2, $price);
    $stmt->bindParam(3, $dateTimeRelease);
    $stmt->bindParam(4, $publisher);
    $stmt->bindParam(5, $description);
    $stmt->bindParam(6, $type);
    $stmt->bindParam(7, $quantitySold);
    $stmt->bindParam(8, $addedDate);
    $stmt->bindParam(9, $developer);
    // Nếu hình ảnh tồn tại, bind tham số cho hình ảnh vào câu lệnh SQL
    if ($image_url !== NULL) {
        $stmt->bindParam(10, $image_url);
        $stmt->bindParam(11, $gameID);
    } else {
        $stmt->bindParam(10, $gameID);
    }

    if ($stmt->execute()) {
        echo json_encode(array("message" => "Data updated successfully"));
    } else {
        echo json_encode(array("message" => "Failed to update data"));
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
