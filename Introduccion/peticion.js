let ajaxGet = url => {

	let httpReq = new XMLHttpRequest();

	httpReq.addEventListener("load", function() {

		if (httpReq.readyState == 4 && httpReq.status == 200) {
			document.getElementById("mensaje").innerHTML = this.responseText;
		}
	})

	httpReq.open("GET", url, true);
	httpReq.send();

}

let boton = document.getElementById("btnMostrar");
boton.addEventListener("click", function(){ajaxGet('mensaje.php')});

let ajaxPost = (url, obj) => {
	let req = new XMLHttpRequest();

	req.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("datos").innerHTML = this.responseText;
		}
	}

	req.open("POST", url, true);
	req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	req.send(`datos=${obj}`);

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

let postFn = (url, formulario) => {
	let req = new XMLHttpRequest();

	req.onreadystatechange = function() {
		if (req.readyState == 4 && req.status == 200) {
			document.querySelector("#resultado").innerHTML = req.response;
		}
	}

	req.open("POST", url, true);

	let data = new FormData(formulario);
	req.send(data);
}

let botonSumar = document.querySelector("#btnSumar");
botonSumar.addEventListener("click", function(e) {
	e.preventDefault(); 
	let formSuma = document.querySelector('#formSumar');
	postFn('resultado.php', formSuma)
})