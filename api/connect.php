<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
class Database {
    private $conn;
    public function __construct() {
        $servername = "103.255.237.2";
        $username = "webdevel_hieutt";
        $password = "a,1Tz[9]5tE;";
        $dbname = "webdevel_hieutt";

            // $servername = "localhost";
            // $username = "root";
            // $password = "";
            // $dbname = "pi_store";
        try {
            $this->conn = new PDO("mysql:host=$servername;dbname=$dbname", $password, $username, array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        } catch (PDOException $e) {
            throw new Exception("Database connection error: " . $e->getMessage());
        }
    }
    public function getConnection() {
        return $this->conn;
    }
}
?>
