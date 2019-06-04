

var txta = document.getElementById('ta');
var chk = document.getElementById('cid');
var id = 0;

function decorate() {
    var a = window.getComputedStyle(txta, null).getPropertyValue("font-size");
    txta.style.fontSize = parseInt(a) + 2 + "px";
}

function popup() {
    if (!chk.checked) {
        txta.style.fontWeight = "300";
        txta.style.color = "black";
        txta.style.textDecoration = "none";
        document.body.style.backgroundImage = "url(dbill.jpeg)";
     
    }

    else {
        txta.style.fontWeight = "bold";
        txta.style.color = "green";
        txta.style.textDecoration = "underline";  }
}

function Piglatin() {
    var x = txta.value;
    txta.value = x.substring(1, x.length) + x[0] + "ay";
}

function grow() {
    if (id)
        clearInterval(id);
    else
        id = setInterval(decorate, 500);
}

document.getElementById('bd').onclick = grow;
document.getElementById('pig').onclick = Piglatin;

chk.onchange = popup;


