// variabelen images
var bodyElement = document.querySelector("body");

var mislukt = document.querySelector("#mislukt");

var hoed = document.querySelector("#hoed");
var hoedInRij = document.querySelector("#hoedinrij");

var mond = document.querySelector("#mond");
var mondInRij = document.querySelector("#mondinrij");

var armen = document.querySelector("#armen");
var armenInRij = document.querySelector("#armeninrij");

var neus = document.querySelector("#neus");
var neusInRij = document.querySelector("#neusinrij");

var ogen = document.querySelector("#ogen");
var ogenInRij = document.querySelector("#ogeninrij");

var oren = document.querySelector("#oren");
var orenInRij = document.querySelector("#oreninrij");

var schoenen = document.querySelector("#schoenen");
var schoenenInRij = document.querySelector("#schoeneninrij");
// einde variabelen images

// variablen buttons
var opnieuwButton = document.querySelector("#opnieuw");
var klaarButton = document.querySelector("#klaar");
var vorigeButton = document.querySelector("#vorige");
var volgendeButton = document.querySelector("#volgende");
// einde variablen buttons

// variabelen naamveld
var aardappelNamenLijst = ["Meneer aardappelhoofd", "Mr potato head", "Signor testa di patate", "Mr Kartoffelkopf", "Señor Cara de Papa"];
var indexUitAardappelNamenLijst = 0;
var aardappelNaam = aardappelNamenLijst[indexUitAardappelNamenLijst]
var h1Element = document.querySelector("h1.aardappelnaam");
h1Element.textContent = aardappelNaam;
// einde variabelen naamveld

// variabelen teller
var aantalPogingen = 7;
var aardappelOnderdeelButtons = document.querySelectorAll("#rijopties img");
var pogingenInvoerveld = document.querySelector("#aantalpogingen");
// einde variabelen teller




//namen in verschillende talen
function volgendeAardappelNaam (huidigeIndexAardappelNamenLijst){
    if(huidigeIndexAardappelNamenLijst == (aardappelNamenLijst.length - 1)){
        return 0;
    } else{
        return huidigeIndexAardappelNamenLijst + 1;
    }
}

function vorigeAardappelNaam (huidigeIndexAardappelNamenLijst){
    if (huidigeIndexAardappelNamenLijst == 0){
        return aardappelNamenLijst.length - 1;
    } else{
        return huidigeIndexAardappelNamenLijst - 1;
    }
}

function klikOpVolgende(){
    indexUitAardappelNamenLijst = volgendeAardappelNaam(indexUitAardappelNamenLijst);
    aardappelNaam = aardappelNamenLijst[indexUitAardappelNamenLijst];
    h1Element.textContent = aardappelNaam;
}

function klikOpVorige(){
    indexUitAardappelNamenLijst = vorigeAardappelNaam(indexUitAardappelNamenLijst);
    aardappelNaam = aardappelNamenLijst[indexUitAardappelNamenLijst];
    h1Element.textContent = aardappelNaam;
}
volgendeButton.addEventListener("click", klikOpVolgende);
vorigeButton.addEventListener("click", klikOpVorige);
//einde namen in verschillende talen




//aardappel toggle
// bron style display: https://www.w3schools.com/jsref/prop_style_display.asp
function toggleOnderdeelOpAardappel(onderdeelOpAardappel){
    if (onderdeelOpAardappel.style.display === "none"){
        onderdeelOpAardappel.style.display = "block";
    } else {
        onderdeelOpAardappel.style.display = "none";
    }
}

hoedInRij.addEventListener('click', function hoedKomtTevoorschijn(){
    toggleOnderdeelOpAardappel(hoed);
});

ogenInRij.addEventListener('click', function ogenKomtTevoorschijn(){  
    toggleOnderdeelOpAardappel(ogen);
});

neusInRij.addEventListener('click', function neusKomtTevoorschijn(){  
    toggleOnderdeelOpAardappel(neus);
});

mondInRij.addEventListener('click', function mondKomtTevoorschijn(){  
    toggleOnderdeelOpAardappel(mond);
});

orenInRij.addEventListener('click', function orenKomtTevoorschijn(){  
    toggleOnderdeelOpAardappel(oren);
});

armenInRij.addEventListener('click', function armenKomtTevoorschijn(){  
    toggleOnderdeelOpAardappel(armen);
});

schoenenInRij.addEventListener('click', function schoenenKomtTevoorschijn(){  
    toggleOnderdeelOpAardappel(schoenen);
});



function pogingenReset(tellerTeruggezet){
    aantalPogingen = tellerTeruggezet;
}

function mislukteAardappelAdd(){
    bodyElement.classList.add("frietachtergrond");
    toggleOnderdeelOpAardappel(mislukt);
}

function mislukteAardappelRemove(){
    bodyElement.classList.remove("frietachtergrond");
    mislukt.style.display = "none";
    location.reload();// bron location.reload(): https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript
}

function onderdelenNietTonen(){
    hoed.style.display = "none";
    ogen.style.display = "none";
    neus.style.display = "none";
    mond.style.display = "none";
    oren.style.display = "none";
    armen.style.display = "none";
    schoenen.style.display = "none";
    pogingenReset(7);
}
opnieuwButton.addEventListener('click', onderdelenNietTonen);
opnieuwButton.addEventListener('click', mislukteAardappelRemove);
klaarButton.addEventListener('click', onderdelenNietTonen);
klaarButton.addEventListener('click', mislukteAardappelAdd);
//einde aardappel toggle




//audio 
//bron audio play: https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
function playKlaarButtonAudio(){
    audioklaar.play();
    audiosoundtrack.pause();
}

function playSoundtrackAudio(){
    audiosoundtrack.play();
}

function pauseSoundtrackAudio(){
    audiosoundtrack.pause();
}

function playOpnieuwAudio(){
    audiopop.play();
}
//einde audio




//teller
function pogingenOver(){
    if (aantalPogingen > 0){
        aantalPogingen = aantalPogingen - 1;
    } else if (aantalPogingen == 0){
        onderdelenNietTonen();
        mislukteAardappelAdd();
        playKlaarButtonAudio();
    }
    pogingenInvoerveld.textContent = aantalPogingen;
}

for (var index = 0; index < aardappelOnderdeelButtons.length; index++){
    aardappelOnderdeelButtons[index].addEventListener("click", pogingenOver);
}
//einde teller