// Ceci est le fichier javascript lié au simon

function buttonClicked(touche) {
    touche.src = "assets/" + touche.id + "_on.png";
    setTimeout(function () {
        touche.src = "assets/" + touche.id + "_off.png";
    }, 500);
}