let reset = document.getElementById("reset");
let dinscore = document.getElementById("din-score");
let datamaskinscore = document.getElementById("datamaskin-score");
let message = document.getElementById("message");
let stein = document.getElementById("stein");
let saks = document.getElementById("saks");
let papir = document.getElementById("papir");
let dinscore_main = 0;
let datamaskinscore_main = 0;

function datamaskinValg () {
    let valg = ["stein", "saks", "papir"];
    let tilfeldigTall= Math.floor((Math.random()*3));
    return valg[tilfeldigTall];
}
function vunnet(brukervalg, datamaskinvalg){
    dinscore_main++;
    dinscore.innerHTML = dinscore_main;
    datamaskinscore.innerHTML = datamaskinscore_main;
    message.innerHTML = brukervalg + " slår " + datamaskinvalg + " . Du vinner!";

}
function tapt(brukervalg, datamaskinvalg) {
    datamaskinscore_main++;
    datamaskinscore.innerHTML = datamaskinscore_main;
    message.innerHTML = datamaskinvalg + " slår " + brukervalg + " . Du taper!";

}
function uavgjordt(brukervalg, datamaskinvalg){
    message.innerHTML = brukervalg + " og " + datamaskinvalg + " er likt. Ingen vinner!"

}


function game(brukervalg) {
    let datamaskinvalg = datamaskinValg();
    switch (brukervalg + datamaskinvalg) {
        case "steinsaks":
        case "papirstein":
        case "sakspapir":
         vunnet(brukervalg, datamaskinvalg);
        break;
        case "steinpapir":
        case "saksstein":
        case "papirsaks":
         tapt(brukervalg, datamaskinvalg);
        break;
        case "steinstein":
        case "papirpapir":
        case "sakssaks":
         uavgjordt(brukervalg, datamaskinvalg);
        break;
    }
}

function main () {
    stein.addEventListener("click", function() {
        game("stein");
        reset.style.display = "block";
        
    })
    saks.addEventListener("click", function() {
        game("saks");
        reset.style.display = "block";
        
    })
    papir.addEventListener("click", function() {
        game("papir");
        reset.style.display = "block";  
    
    })
    

}
main();


reset.addEventListener("click", function(){
    location.reload();
});