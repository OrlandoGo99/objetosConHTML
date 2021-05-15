var appTelefonos = {};
var misTelefonos = (datos) => {
    appTelefonos = datos;
    var html = ""
    html+="<h2> Telefonos del grupo de programacion Web</h2>"
    appTelefonos.map((telefonos) =>{
    html += "<img src='" + telefonos.foto + "'></img>"
   
    for(propiedades in telefonos){
        html +=  "<li type=>" + propiedades + " : " + telefonos[propiedades] + "</li>"
    }
    html += "<hr/>"
});

    document.getElementById("resultados").innerHTML = html;
} //fin de la funcion misTelefonos

