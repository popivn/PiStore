<?php
require_once '../connect.php';

$database = new Database();
$conn = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $gameID = $_POST['gameID'];

    // Bước 1: Truy vấn SQL để lấy tất cả GenresID của gameID từ bảng gamegenres
    $query = "SELECT GenresID FROM gamegenres WHERE GameID = :gameID";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':gameID', $gameID);
    $stmt->execute();
    $gameGenres = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // Mảng kết quả chứa tên của các thể loại game
    $genreNames = [];

    // Bước 2 và 3: Với mỗi GenresID, lấy tên từ bảng Genres
    foreach ($gameGenres as $gameGenre) {
        $genreID = $gameGenre['GenresID'];
        $query = "SELECT Name FROM Genres WHERE GenresID = :genreID";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':genreID', $genreID);
        $stmt->execute();

        $genre = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Thêm tên thể loại vào mảng kết quả
        if ($genre) {
            $genreNames[] = $genre['Name'];
        }
    }
    // Trả về mảng kết quả dưới dạng JSON
    echo json_encode($genreNames);
} else {
    http_response_code(405);
    echo json_encode(array("message" => "Method not allowed."));
}
?>
