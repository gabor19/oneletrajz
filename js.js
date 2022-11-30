const element = document.getElementById("sotetes");
element.addEventListener("click",bekapcsolo);
var on = false;
function bekapcsolo(){
    var elem = document.getElementById("sotets");
    on = !on;
    if (on) {
        elem.classList.add("sotet");
    }else{
        elem.classList.remove("sotet");
    }
}
