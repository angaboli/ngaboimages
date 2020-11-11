<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'contact@ngaboimages.com';
    $email_subject = "New Form submission";
    $email_body = "User Name : $name.\n".
                    "User Email: $email.\n".
                    "User message: $message.\n";

    $to = "angaboli@yahoo.fr";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";
    mail($to, $email_subject, $email_body, $headers);
    
    header("Location: index.html");

?>