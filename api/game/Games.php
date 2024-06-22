<?php
header("Access-Control-Allow-Origin: *");
require_once '../connect.php';

// Xác định phương thức là GET
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("error" => "This endpoint only supports GET method."));
    exit();
}

try {
    $database = new Database();
    $conn = $database->getConnection();
    
    $query = "SELECT * FROM Games";
    $statement = $conn->query($query);
    
    if ($statement !== false) {
        $games = $statement->fetchAll(PDO::FETCH_ASSOC);
        if ($games) {
            echo json_encode($games);
        } else {
            echo json_encode(array("message" => "No games found."));
        }
    } else {
        throw new Exception("Query failed: " . $conn->errorInfo()[2]);
    }
} catch (PDOException $e) {
    echo json_encode(array("error" => "Database error: " . $e->getMessage()));
} catch (Exception $e) {
    echo json_encode(array("error" => $e->getMessage()));
}
?>
