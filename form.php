<$php
$name = $_POST('name')
$email = $_POST('_replyto')
$subject = $_POST('subject')
$message = $_POST('message')

$send = mail('mguthrie451@gmail.com', $subject, $message)
$>
