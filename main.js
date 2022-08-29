function myFunction() {
    var x = document.getElementById("Links");
    if (x.className === "links") {
        x.className += " responsive";
    } else {
        x.className = "links";
    }
}