<?php 
	$json = $_REQUEST['datos'];

	$array = json_decode($json);

	echo "<h1>Hola " . $array->nombre." ".$array->apellido.", tienes ".$array->edad." años</h1>" ;
 ?>