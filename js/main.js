document.getElementById('guardar-lista').addEventListener('click', agregarLista);

function Lista(titulo, id){
  this.titulo = titulo;
  this.id = id;
}

function Tarea(tarea, id){
  this.tarea = tarea;
  this.id = id;
}

function agregarLista(){
  var listas = [];

  var title = document.getElementById('añadir-lista').value;
  document.getElementById('añadir-lista').value = "";
  var contenedor = document.getElementById('lista-nueva');

  var nuevaLista = document.createElement('span');
  var hTitulo = document.createElement('h3');
  hTitulo.setAttribute('contenteditable', 'true');
  var nuevoTitulo = document.createTextNode(title);

  hTitulo.appendChild(nuevoTitulo);
  nuevaLista.appendChild(hTitulo);
  contenedor.appendChild(nuevaLista);

  //agregar tarea
  var nuevaTarea = document.createElement('div');
  nuevaTarea.id = "contenedor-tarea";
  var bTarea = document.createElement('button');
  var cTarea = document.createTextNode('Añadir tarjeta');
  bTarea.id = "nueva-tarea";

  bTarea.appendChild(cTarea);
  nuevaTarea.appendChild(bTarea);
  contenedor.appendChild(nuevaTarea);

  var newLista = new Lista(title, nuevaTarea.id);
  listas.push(newLista);

  document.getElementById('nueva-tarea').addEventListener('click', agregarTarea);

  function agregarTarea(){
    var contenedor = document.getElementById('lista-nueva');
    var contenedorTarea = document.createElement('div');
    var textoArea = document.createElement('input');
    textoArea.type = "textarea";
    textoArea.id = "contenido-tarea";
    textoArea.setAttribute('rows', '40');
    textoArea.setAttribute('cols', '50');

    var agregarTarea = document.createElement('button');
    var contButton = document.createTextNode('Añadir');
    agregarTarea.type = "button";
    agregarTarea.id = "boton-tarea-nueva"

    agregarTarea.appendChild(contButton);
    contenedorTarea.appendChild(textoArea);
    contenedorTarea.appendChild(agregarTarea);
    contenedor.appendChild(contenedorTarea);


    //Nuevas tareas
    document.getElementById('boton-tarea-nueva').addEventListener('click', function(){
        var contenedor = document.getElementById('lista-nueva');
        var tareas = document.getElementById('contenido-tarea').value;
        document.getElementById('contenido-tarea').value = "";
        var nuevasTareas = document.createElement('div');

        //validacion que input no este vacio
        if(tareas == null || tareas.length == 0){
          alert('¡Error ! Debe ingresar una tarea');
          return false;
        }

        //checkbox
        var chck = document.createElement('input');
    	  chck.type = 'checkbox';
    	  chck.setAttribute('class', 'check');

        //tareas
        var elementoContenedor = document.createElement('span');
        elementoContenedor.setAttribute('contenteditable', 'true');
    	  var textoNuevaTarea = document.createTextNode(tareas);
        elementoContenedor.appendChild(textoNuevaTarea);

        nuevasTareas.appendChild(chck);
        nuevasTareas.appendChild(elementoContenedor);
    	  contenedor.appendChild(nuevasTareas);
        contenedor.removeChild(contenedorTarea);
    });

  }

}