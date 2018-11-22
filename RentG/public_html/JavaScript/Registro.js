/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validar(){
var nombre = document.getElementById("nombre").value;
    if(nombre === ""){
        alert("El campo nombre está vacio");
        return false;
    }
    else if (nombre.length < 3){
        alert("El nombre es demasiado corto");
        return false;
    }
var telefono = document.getElementById("telefono").value;
    if(telefono === ""){
        alert("El campo telefono está vacio");
        return false;
    }
    else if (isNaN(telefono) && tlefono.length =! 9){
        alert("El telefono es incorrecto");
        return false;
    }
var DNI = document.getElementById("DNI").value;
    if(DNI === ""){
        alert("El campo DNI está vacio");
        return false;
    }
    else if (DNI.length =! 9){
        alert("DNI incorrecto");
        return false;
    }
var email = document.getElementById("correo").value;
var expresion = /\w+@\w+\.+[a-z]/;
    if(email == ""){
        alert("El campo correo está vacio");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("El campo correo no es valido");
        return false;
    }
    
var pass = document.getElementById(pass);
    if(pass === ""){
        alert("El campo contraseña está vacio");
        return false;
    }
    else if (pass.length < 6){
        alert("El campo contraseña debe tener al menos 6 caracteres");
        return false;  
    }
}
