
// variable donde se guardarĂˇn los json creados
var estudiantes =[];
/*
Contructor que permite formar objetos JSON
*/
function Estudiante(codigo, nombre, nota){
	this.codigo=codigo;
	this.nombre = nombre;
	this.nota = nota;

}
/*
	Evento listener que permite la creaciĂłn del json y la inserciĂłn a la tabla
*/
 document.getElementById("envio").addEventListener("click", function(){
 	// se atrapan los datos desde la interfaz
	var cod = document.getElementById("codigo").value;
	var nombre = document.getElementById("nombre").value;
	var nota = parseInt(document.getElementById("nota").value);

	// se valida que la nota sea una numero
	if (isNaN(nota)){
		alert("La nota debe ser un nĂşmero");
		return;
	}
	else{
		//se crea el objeto el cual se insertara al JSON, En caso que este estudiante sea valido
		var nuevoEstudiante = new Estudiante(cod, nombre, nota);
		//se agrega a la variable el json creado
		if (validarEstudiante(nuevoEstudiante)==true){
			//Agregamos el estudiante al Json.
			estudiantes.push(nuevoEstudiante);
		
		var  tabla = document.getElementById("myTable"); // se obtiene la tabla mediante el id
		var filaFinal;
		var fila;

		filaFinal = tabla.rows.length; // se obtiene el total de filas de la tabla
		fila = tabla.insertRow(filaFinal); // se crea la fila nueva en la tabla

		var celda0 = fila.insertCell(0);
		var celda1 = fila.insertCell(1);
		var celda2 = fila.insertCell(2);

		// se asignan los datos a las celdas
		celda0.innerHTML = nuevoEstudiante.codigo;
		celda1.innerHTML = nuevoEstudiante.nombre;
		celda2.innerHTML = nuevoEstudiante.nota;
		}
	}
	// limpiar los campos
		document.getElementById("codigo").value = "";
		document.getElementById("nombre").value = "";
		document.getElementById("nota").value = "";			
	});

/*
	Funcion que permite guardar un json al arreglo 
*/
 function validarEstudiante(json){
 	for (i=0; i< estudiantes.length; i++){ // ciclo para recorrer el JSON
		if (estudiantes[i].codigo == json.codigo){
			alert("No pueden haber dos estudiantes con el mismo cĂłdigo");
			return false;
		}
	}
 	return true;
 }

 /*Funcion que mostrara la nota mayor de los estudiantes*/
 document.getElementById('notaMayor').addEventListener('click',function(){
 		var notaMayor = estudiantes[0].nota;
 	for (i=0; i< estudiantes.length; i++){ // ciclo para recorrer el JSON
		if(notaMayor <= estudiantes[i].nota){
			notaMayor = estudiantes[i].nota;
		}
	}
 	alert("Nota Mayor: "+notaMayor);
 })

 /*Funcion que mostrara la nota Menor de los estudiantes*/
 document.getElementById('notaMenor').addEventListener('click',function(){
 		var notaMenor = estudiantes[0].nota;
 	for (i=0; i< estudiantes.length; i++){ // ciclo para recorrer el JSON
		if(estudiantes[i].nota <= notaMenor){
			notaMenor = estudiantes[i].nota;
		}
	}
 	alert("Nota Menor: "+notaMenor);
 })

  /*Funcion que mostrara el promedio de los estudiantes*/
 document.getElementById('notaPromedio').addEventListener('click',function(){
 		var promedio = 0;
 	for (i=0; i< estudiantes.length; i++){ // ciclo para recorrer el JSON
		promedio += estudiantes[i].nota;//Sumamos todas las notas de los estudiantes
	}
	promedio = promedio / estudiantes.length;//dividimos la suma entre el numero de estudiantes para obtener le promedio
 	alert("Nota Promedio de los estudiante: "+promedio);
 })
