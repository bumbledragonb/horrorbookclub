/*The Slick Js and Jquery libraries were used for the carousel script, the script was adapted from the demo section on their website https://kenwheeler.github.io/slick/*/
/* The Form Focus code adapted from UoL Coursera video 8.2.8 Form Events at https://www.coursera.org/learn/uol-web-development/lecture/Sy7AO/8-2-8-form-events*/

//SLICK CAROUSEL SCRIPT - responsive to resizing//
if ($('.carousel123').length > 0) {
jQuery(document).ready(function(){
    $('.carousel123').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
    {
        breakpoint: 1280,
          settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
        },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    });
    });
}

//SLICK CAROUSEL SCRIPT END//

// FORM FOCUS script- check if form exists and add focus//
if ($('#form').length > 0) {

var form = document.getElementById("form");
form.addEventListener("focus", function(event){
  event.target.style.background="var(--form)";
}, true); 

form.addEventListener("blur", function(event){
  event.target.style.background="";
}, true); 
}
//FORM FOCUS script end//

//TRANSLATION SCRIPT- book title//

var allp = document.getElementsByTagName("h6");
var buy = document.getElementsByTagName("button")
if ($('#en-lg').length > 0) {

/* french book titles translation array */
translation_fr = ["La Maison hantée", "Dracula", "Frankenstein ou Le Prométhée moderne", "La Beauté", "Brèche vers l'Enfer","La Compagnie des loups",
"Chants du cauchemar et de la nuit", "Nous avons toujours vécu au château", "Beloved","Les Monstres"];
/* spanish book titles translation array */
translation_es = ["La maldición de Hill House", "Drácula", "Frankenstein o el moderno Prometeo", "La belleza", "Cero","La cámara sangrienta", "Canciones de un soñador muerto"," Siempre hemos vivido en el castillo","Beloved","Monstruos rotos"];

/* german book titles translation array */
translation_de = ["Spuk in Hill House", "Dracula: Ein Vampirroman", "Frankenstein oder Der neue Prometheus", "Die Schönheit",
"Das Chiffre","Blaubarts Zimmer", "Lieder eines toten Träumers","Wir haben schon immer im Schloß gelebt","Menschenkind", "Broken Monsters"];



//translate();
document.getElementById("es-lg").onclick = function() {translate_es()}; 
document.getElementById("fr-lg").onclick = function() {translate_fr()}; 
document.getElementById("de-lg").onclick = function() {translate_de()};  

document.getElementById("en-lg").onclick = function() {return_default()};

function translate_es(){
    for (var i=0; i< translation_es.length + 1;i++){
    allp[i].innerHTML= (i+1) + ". " +  translation_es[i];
    buy[i].innerHTML= "Comprar ya";
}
}
function translate_fr(){
    for (var i=0; i< translation_fr.length + 1;i++){
    allp[i].innerHTML=  (i+1) + ". " + translation_fr[i];
    buy[i].innerHTML= "Acheter cet article";
}
}
function translate_de(){
    for (var i=0; i<translation_de.length + 1;i++){
    allp[i].innerHTML= (i+1) + ". " + translation_de[i];
    buy[i].innerHTML= "Jetz kaufen";
}
}
function return_default(){
   
    location.reload(); // reload page to return to english
}
}
///translation script end//

