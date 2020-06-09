// Ceci est le fichier javascript lié au simon

// Une sequence = chaine de caractere VRBJVVR  

/**
 * 
 * @param {string} son  une lettre V R B ou J du son a jouer 
 */
function joueSon(son)
{
    const nom_son = "sound_" +son;
    console.log ("Playing sound " +nom_son);
    son = document.getElementById(nom_son);
    son.play();
}

/** La fonction de jeu
 * 
 */
function play()
{
    // Ajoute un son aleatoire a la sequence (lettre)
    sequence = "BVRJB"

    // Joue la sequence
    i = 0;
    const metronome = setInterval( function () {
        joueSon(sequence[i++]);
        if (i >= sequence.length) clearInterval(metronome);
    }, 1000);

    // Attend que le joueur la sequence 

    // Si le joueur se trompe, fin du jeu

    // sinon on recommence
}

/**
 * 
 * @param {*} touche 
 */
function buttonClicked(touche) {
    touche.src = "assets/" + touche.id + "_on.png";
    setTimeout(function () {
        touche.src = "assets/" + touche.id + "_off.png";
    }, 500);

    joueSon(touche.id.toUpperCase()[0])
}