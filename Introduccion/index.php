<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Ajax</title>
</head>
<body>
	<button type="button" id="btnMostrar">Mostrar</button>
	<div id="mensaje"></div>

	<form action="" name="formDatos">
		<input type="text" name="txt_nom" placeholder="Nombre">
		<input type="text" name="txt_app" placeholder="Apellido">
		<input type="number" name="txt_edad" placeholder="edad">
		<input type="button" value="Enviar" id="btnForm">
	</form>
	<div id="datos"></div>

	<form id="formSumar">
		<label for="suma">SUMA</label>
		<input type="number" name="num1" placeholder="Número 1" />
		<span>+</span>
		<input type="number" name="num2" placeholder="Número 2" />
		<input type="submit" value="Sumar" id="btnSumar" />
			<span>= <span id="resultado"></span></span>
	</form>
	<script src="peticion.js"></script>
</body>
</html>
