function changeForm(event, object, id) {
    var div = document.getElementById(id);
    var otherDivs = document.getElementsByClassName("formulier");
    for (var i = 0; i < otherDivs.length; i++) {
        otherDivs[i].setAttribute("style", "display: none");
    }
    div.setAttribute("style", "display: block");
}
