const buttons = document.querySelectorAll("button");
// console.log(buttons);
for (let i =0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
            // console.log("click")
            const joueur = buttons[i].innerHTML; // prend le texte dans le bouton
            const robot = buttons[Math.floor(Math.random()*buttons.length)].innerHTML; // prend une valeur random
            
            
            // console.log(`Joueurs : ${joueur}`);

            let resultat = "";

            if (joueur === robot){
                resultat = "Egalite";
            }
            else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") || (joueur === "Ciseaux" && robot === "Feuille")){

                resultat="Gagné";
            }
            else{
                resultat = "Perdu";
            }

            document.querySelector(".resultat").innerHTML = `Joueur : ${joueur} </br> Robot : ${robot} </br> ${resultat}`;


    })
}
