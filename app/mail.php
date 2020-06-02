<?php

$recepient = "steellive@yandex.ru"; //заменить на свой почтовый ящик
$sitename = "ARDA - Производство оборудования";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["mail"]);
$time = trim($_POST["clock"]);

$message = "Имя: $name \nТелефон: $phone \nE-mail: $email \nВремя: $time";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");