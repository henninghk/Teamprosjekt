
show();

function show(){

    
     document.getElementById("humor").innerHTML=
    `
    <div>Her kan du oppgradere!</div>
    <button onclick="upgrade()">oppgradere</button>
    <button onclick="downgrade()">nedgradere</button>
    <div id="cirkel" onclick="sirkel()"></div>
    <div id="pointinfo"></div>
    
    `;
    document.getElementById('pointinfo').innerHTML = points;
}