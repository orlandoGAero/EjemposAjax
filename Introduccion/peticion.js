let ajaxGet = url => {

	let httpReq = new XMLHttpRequest();

	httpReq.open("GET", url, true);
	httpReq.send();

	httpReq.addEventListener("load", function() {

		if (httpReq.readyState == 4 && httpReq.status == 200) {
			document.getElementById("mensaje").innerHTML = this.responseText;
		}
	})
}

let boton = document.getElementById("btnMostrar");
boton.addEventListener("click", function(){ajaxGet('mensaje.php')});

let ajaxPost = (url, obj) => {
	let req = new XMLHttpRequest();

	req.open("POST", url, true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send(`datos=${obj}`);

	req.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("datos").innerHTML = this.responseText;
		}
	}
}

let form = document.getElementById("btnForm");
form.addEventListener("click", function() {

	let nombre = document.formDatos.txt_nom.value;
	let apellido = document.formDatos.txt_app.value;
	let edad = document.formDatos.txt_edad.value;

	let datosForm = {
		nombre,
		apellido,
		edad 
	};

	ajaxPost('mostrar_datos.php', JSON.stringify(datosForm));

});