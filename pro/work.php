<?php

if(count($_GET) > 0){
	require_once 'SmtpApi.php';




$sPubKey = '
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5HN6bOXzLTP2QJ/TdHD/5cnKK
IPMHAiRhfbG3KCWjcnpqN9VHJTFc+ZK0u50EBPKwDW2JqjzEIaMHNrBfUyY3Ctw6
GpwAGZ/eu0a5f73cTRAAB/7ET/1ksrtIoBAoct6cUZZhP9h1eR6bgKikUkadhfti
4QndOyFHHkytFtBr6QIDAQAB
-----END PUBLIC KEY-----
';

$oApi = new SmtpApi($sPubKey);


    $aEmail = array(
        'html' => '<p>ФИО: '.$_GET['family'].' '.$_GET['name'].' '.$_GET['middle_name'].'</p><p>
							 e-mail: '.$_GET['email'].'</p>'.'<p>Телефон: '.$_GET['tel'].'</p>'.'<p>Текст письма: </p><p>'.$_GET['text'].'</p>',
        'text' => 'Текст письма',
        'encoding' => 'UTF-8',
        'subject' => 'Письмо с сайта СТУПЕНЬ Production',
        'from' => array(
            'name' => 'Владимир',
            'email' => 'axb48@yandex.ru',
        ),
        'to' => array(
            array(
                'name' => 'Антон Муравьёв',
                'email' => 'mav9503@yandex.ru'
            ),
        ),
    );
    $res = $oApi->send_email($aEmail);
    if ($res['error']){ // проверяем успешность операции
        die('Ошибка: ' . $res['text']);
    } else {
        // успех
    }
}

function cropStr($str, $size) {
	return mb_substr($str, 0, mb_strrpos(mb_substr($str, 0, $size, 'utf-8'), ' ', utf-8), 'utf-8');
}
//include ("resize_img.php");

if (count($_POST) > 0)//--Если были приняты данные из HTML-формы
{
	$name = $_POST['name'];

	if ($name == "shr_nw") {
		$nws = $_POST['nws'];

		$content = file_get_contents("nws/nws$nws.html");
		echo ($content);
	}
	if ($name == "ful_nw") {
		$nws = $_POST['nws'];

		$content = file_get_contents("nws/nws$nws.html");
		echo ($content);
	}

	if ($name == "num_news") {
		$x = 1;
		while (file_exists("nws/nws$x.html")) {
			$x++;
		}
		echo ($x-1);
	}
	if ($name == "all_news") {
		$text = "";

		$x = 1;
		while (file_exists("nws/nws$x.html")) {
			$x++;
		}
		while ($x >= 2) {
			$x--;
			$text .= file_get_contents("nws/nws$x.html");
		}
		$html = "<b>bold text</b><a href=howdy.html>click me</a>";

		preg_match_all("/(<(time|H2)[^>]*>.*<\/\\2>)/", $text, $matches);

		for ($i = 0; $i <= count($matches[0])+2; $i += 2) {
			echo $matches[0][$i+1];
			echo $matches[0][$i];
		}
	}

	$entries  = scandir(".");
	$filelist = array();
	foreach ($entries as $entry) {
		if (strpos($entry, "te") === 0) {
			$filelist[] = $entry;
		}
	}

	if ($name == "resize_img") {
		img_resize($src, $dest, 800, 600);
	}
}
?>
