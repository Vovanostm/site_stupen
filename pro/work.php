<?php
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
