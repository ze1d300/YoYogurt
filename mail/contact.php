<?php
if(empty($_POST['name'] ) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit();
}
$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$subject = strip_tags($_POST['subject']);
$message = strip_tags($_POST['message']);
$to = "leyla..wisdom@gmail.com";
$body = "New message from your website:\n\nName: $name\nEmail:  $email\nSubject: $subject\nMessage: $message";
$headers = "From $email\r\nReply-To: $email\r\n"
if(!mail($to,$subject,$body,$headers)) {
    http_response_code(500);
}
?>
