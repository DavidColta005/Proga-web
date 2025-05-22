function leer(){
    var nombre = document.forms["formulario"].elements[0].value;
    //Referncia por id
    var pass = document.getElementById("text2").value;
    var car = document.getElementsByTagName("select")[0].value
    document.getElementById("datos").innerHTML = "  Nombre" + nombre +    "  Password: " + pass + "  Carrera: " + car;  
}