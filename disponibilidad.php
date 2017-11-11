<?php
	$numeroAleatorio=rand(0,10);
	sleep($numeroAleatorio%3);
	echo ($numeroAleatorio%2)? "si":"no";
?>