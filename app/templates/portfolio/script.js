// funcion que me aplica el estil a la opcion selecionada en el menu y quita la previamente seleccionado
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";

    // hacemos desaparecer el menu seleccionado

    var x = document.getElementById('nav');
    x.className = "";

}
// funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById('nav');
    if (x.className ===""){
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detectos de scrolling para aplicar a la animacion
window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("python").classList.add("barra-progreso1");
        document.getElementById("html").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
    }
}