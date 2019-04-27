<?php

$recepient = "24businesshelp@gmail.com";
$sitename = "24CH";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$email = trim($_POST["email"]);
$sub = trim($_POST["sub"]);
$redirect = trim($_POST["redirect_to"]);

$message = "";

// Формирование тела письма
	if($sub != ""){
		$message .= "Заголовок формы: ".$sub."\r\n";
	}
	if($name != ""){
		$message .= "Имя: ".$name."\r\n";
	}
	if($phone != ""){
		$message .= "Телефон: ".$phone."\r\n";
	}
	if($text != ""){
		$message .= "Вопрос: ".$text."\r\n";
	}
	if($email != ""){
		$message .= "E-mail: ".$email."\r\n";
	}
	

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
header("Location: http://".$redirect);