document.getElementById('personaje').addEventListener("mouseover",sumarPuntos);

puntos = 0;
tiempo = 60;
necesario = 30;
function sumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesario + "</b>"
    randNum = Math.round(Math.random()*500);
    randNum = Math.round(Math.random()*500);
    document.getElementById("personaje").style.marginTop = randNum +  "px";
    document.getElementById("personaje").style.marginLeft = randNum +  "px";
    document.getElementById("personaje").style.marginBottom = randNum +  "px";
    document.getElementById("personaje").style.marginRight = randNum +  "px";
    if (puntos == 30){
        alert("Sos una maquina");
    }
}


function restarTiempo(){
    tiempo--
    document.getElementById("tiempo").innerHTML = " &nbsp;&nbsp;&nbsp;Tiempo: " +tiempo;
    if (tiempo == 0){
        alert("Perdiste, Loser");
        tiempo = 0;
        puntos = 0;
    }
}

setInterval(restarTiempo,1000);




// Iconos con los que puede empzar una variable $, _
