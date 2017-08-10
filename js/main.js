//Se llama a los elementos input y boton
var mInput = document.getElementById("primerInput");
var contenedor = document.getElementById("contenedor-lista");
var btnGuardar = document.getElementById('boton-guardar');
var btnX = document.getElementById('btnX');
//Creo una funcion par llamar a mi boton guardar
mInput.addEventListener("click", function(){
/*La propiedad classList devuelve el nombre de la clase de un elemento.Esta propiedad es útil para agregar, quitar y alternar clases CSS en un elemento.Puede modificarla utilizando los métodos add () y remove ().*/
//toggle:Alternar entre agregar y quitar un nombre de clase de un elemento con JavaScript.
btnGuardar.classList.toggle("show");
btnX.classList.toggle("show2");
});

btnGuardar.addEventListener("click", guardarLista);

//Función que crea Lista despues de ser clickeado
function guardarLista(){
	mInput = document.getElementById("primerInput").value;
	document.getElementById('primerInput').value = "";
    
     //validacion que input no este vacio
       
    //El método querySelector devuelve el primer elemento que coincide con un selector CSS especificado en el documento.
	var espacioLista = document.querySelector(".nueva-lista");
    //Creamos nuestro primer div
	var nuevoInputLista = document.createElement("div");
    //A mi nuevo input le pongo classList.add y le doy un id "Lista-contenido" para que mi nueva tarea me aparezca al costado
	nuevoInputLista.classList.add("lista-contenido");
	//Creamos nuestro 2do div
    var divHeader = document.createElement("div");
	divHeader.classList.add("lista-header");
	var listaWrite = document.createElement("h4");
    
    //Utilizo la propiedad "contenteditable" para poder editar lo que escribo en mi lista.
    listaWrite.setAttribute('contenteditable', 'true');
	var h4Text = document.createTextNode(mInput);
        //creamos el 3er div para AgregarTarjeta
        var divEnlace = document.createElement("div");
        var enlaceAgregarTarjeta = document.createElement("a");
        var textoAgregarTarjeta = document.createTextNode("Añadir una tarjeta...");
        /* var botonAnadir = document.createElement("button");
        botonAnadir.setAttribute("type", "submit");
        botonAnadir.appendChild(textoAgregarTarjeta);*/
        espacioLista.appendChild(nuevoInputLista);
        nuevoInputLista.appendChild(divHeader);
        divHeader.appendChild(listaWrite);
        listaWrite.appendChild(h4Text);
        nuevoInputLista.appendChild(divEnlace);
        divEnlace.appendChild(enlaceAgregarTarjeta);
	    enlaceAgregarTarjeta.appendChild(textoAgregarTarjeta);
	    enlaceAgregarTarjeta.addEventListener('click', function(){
        //Creamos otro div para nuestra caja de texto
		var divCajaTexto = document.createElement("div");
	   	var cajaTexto = document.createElement('textarea');
        nuevoInputLista.appendChild(divCajaTexto);
		divCajaTexto.appendChild(cajaTexto);
		divCajaTexto.appendChild(divEnlace);
    });
    
}
    
    