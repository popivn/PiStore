<?php
require_once '../connect.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $gameID = $_POST['gameID'];

    try {
        $database = new Database();
        $conn = $database->getConnection();
        $query = "SELECT features.Name 
                  FROM gamefeatures 
                  JOIN features ON gamefeatures.FeatureID = features.FeatureID 
                  WHERE gamefeatures.GameID = :gameID";

        $stmt = $conn->prepare($query);
        $stmt->bindParam(':gameID', $gameID);
        $stmt->execute();

        $features = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($features);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(array("message" => "Internal Server Error: " . $e->getMessage()));
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(array("message" => "Method not allowed."));
}
?>
