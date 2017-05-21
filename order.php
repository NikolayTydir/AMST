<?php
 /* Здесь проверяется существование переменных */
  if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
 if (isset($_POST['name'])) {$name = $_POST['name'];}

/* Сюда впишите свою эл. почту */
 $address = "emenoff.kamo1991@yandex.ru";

/* А здесь прописывается текст сообщения, \n - перенос строки */
 $mes = "Тема: Заявка на покупку AMST - АРМЕЙСКИХ ЧАСОВ\nИмя: $name\nТелефон: $phone";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ с сайта ,, Часы AMST ,,'; //сабж
$email='Заказ'; // от кого
 $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
print"
<script language='Javascript' type='text/javascript'>
<!--

function reload()
{location = \"/tanks.html\"}; 
setTimeout('reload()',0);
-->
</script>";
?>