function validar(){

/*creo una variable de tipo booleano que en principio tendrá un valor true(verdadero),
y que se convertirá en false(falso) cuando la condición no se cumpla*/

var todo_correcto = true;

/*---------------------NOMBRE----------------------------------*/

if(form1.nombre.value.length < 2 ) {
    todo_correcto = false;
	document.getElementById('nombreError').textContent = "Debe contener al menos 2 caracteres";
} else 
	document.getElementById('nombreError').textContent = " ";

/*-----------------------------APELLIDOS---------------------*/

if(form1.apellidos.value.length < 10) {
    todo_correcto = false;
	document.getElementById('apellidosError').textContent = "Debe contener al menos 10 caracteres";
} else 
	document.getElementById('apellidosError').textContent = " ";
    
/*-----------------------EMAIL----------------------------------*/

var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
var email = form1.email.value;

if (email.length == 0){
    document.getElementById('emailError').textContent = "Es obligatorio introducir un email valido";
}else
    if (!expresion.test(email)) {
        todo_correcto = false;
        document.getElementById('emailError').textContent = "Debe tener el formato 'john@doe.com'";
    } else {
        document.getElementById('emailError').textContent = " ";
}

    
/*-------------------------REVISAR FECHA----------------------*/
if((isNaN(form1.edad.value)) || (form1.edad.value < 1)) {
    todo_correcto = false;
	document.getElementById('edadError').textContent = "Debe ser un número";
} else 
	document.getElementById('edadError').textContent = " ";

/*----------------------------Telefono-------------------*/
var expresiontel = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{3}$/;

var tel = form1.telefono.value;
    if (!expresiontel.test(tel)) {
	todo_correcto = false;
	document.getElementById('telefonoError').textContent = "Debe tener el formato '(999)555-555'";
}

/*------------------------------PROVINCIA----------------------*/

if(form1.provincia.value == '') {
    todo_correcto = false;
	document.getElementById('provinciaError').textContent = "Debes elegir una opción";
} else 
	document.getElementById('provinciaError').textContent = " ";
    
    
/*----------------------USUARIO----------------------------------*/
if(form1.usuario.value.length < 4 ) {
    todo_correcto = false;
	document.getElementById('usuarioError').textContent = "Debe contener al menos 4 caracteres";
} else 
	document.getElementById('usuarioError').textContent = " ";
    
/*---------------------CONTRASEÑA-------------------------------*/
    
if(form1.contraseña.value.length < 6 ||  form1.contraseña.value.length > 15 && form1.usuario.value != form1.contraseña.value) {
    todo_correcto = false;
	document.getElementById('usuarioError').textContent = "Tu contraseña puede ser de 6 a 15 caracteres y no puede contener tu nombre usuario";
} else 
	document.getElementById('usuarioError').textContent = " ";

/*---------------------ACEPTAR TERMINOS-------------------------*/
      

if(!form1.acepto.checked) {
    todo_correcto = false;
	document.getElementById('aceptoError').textContent = "Debes marcar la casilla";
} else 
	document.getElementById('aceptoError').textContent = " ";
/*-------------------------COMPROBAR----------------------------*/
if(!todo_correcto)
    alert('Algunos campos no están correctos, vuelva a revisarlos');

if (todo_correcto) {
	alert('Todo correcto');
}

return todo_correcto;
}