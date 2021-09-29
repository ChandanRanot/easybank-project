function myFunction() {
    var x = document.getElementById("links");
    var icon = document.getElementById("dropdown-icon");
    if(x.style.display === "block"){
        x.style.display = "none";
        x.style.boxShadow = "none";
        icon.src = "./images/icon-hamburger.svg";
    }
    else{
        x.style.display = "block";
        x.style.boxShadow = "-10px 10px 100px";
        icon.src = "./images/icon-close.svg";
    }
}