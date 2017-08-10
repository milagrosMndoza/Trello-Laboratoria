//Se llama a los elementos input y boton
var mInput = document.getElementById("primerInput");
var contenedor = document.getElementById("contenedor-lista");
var btnGuardar = document.getElementById('boton-guardar');


mInput.addEventListener("click", function(){
    btnGuardar.classList.toggle("show");
});

btnGuardar.addEventListener("click", guardarLista);

//Funcion que crea Lista despues de ser clickeado

function guardarLista(){
	var mInput = document.getElementById("primerInput").value;
	document.getElementById('primerInput').value = "";
    //El método querySelector devuelve el primer elemento que coincide con un selector CSS especificado en el documento.
	var espacioLista = document.querySelector(".nueva-lista");
	var nuevoInputLista = document.createElement("div");
    /*La propiedad classList devuelve el nombre de la clase de un elemento, como un objeto DOMTokenList.Esta propiedad es útil para agregar, quitar y alternar clases CSS en un elemento.
    puede modificarla utilizando los métodos add () y remove ().*/
	nuevoInputLista.classList.add("lista-contenido");
	//creamos un div
    var divHeader = document.createElement("div");
	divHeader.classList.add("lista-header");
	var listaHeader = document.createElement("h4");
    listaHeader.setAttribute('contenteditable', 'true');
	var h4Text = document.createTextNode(mInput);
	var divEnlace = document.createElement("div");
	var enlaceAgregarTarjeta = document.createElement("a");
	var textoAgregarTarjeta = document.createTextNode("Añadir una tarjeta...");
    
    espacioLista.appendChild(nuevoInputLista);
	nuevoInputLista.appendChild(divHeader);
	divHeader.appendChild(listaHeader);
	listaHeader.appendChild(h4Text);
	nuevoInputLista.appendChild(divEnlace);
	divEnlace.appendChild(enlaceAgregarTarjeta);
	enlaceAgregarTarjeta.appendChild(textoAgregarTarjeta);

	enlaceAgregarTarjeta.addEventListener('click', function(){
		var divCajaTexto = document.createElement("div");
	   	var cajaTexto = document.createElement('textarea');
			
		nuevoInputLista.appendChild(divCajaTexto);
		divCajaTexto.appendChild(cajaTexto);
		divCajaTexto.appendChild(divEnlace);
    });
    
}
    
    