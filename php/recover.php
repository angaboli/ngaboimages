<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['text'];

$conn = new mysqli('localhost', 'root', '', 'ngaboimages');

if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}
else{
    $req = $conn->prepare("INSERT INTO ngaboimages(name, mail, text) VALUES(?, ?, ?) ");
    $req->bind_param("sss", $name, $email, $message);
    $req->execute();
    $req->close();
    $conn->close();
}
    
?>