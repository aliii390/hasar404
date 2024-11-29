const buttonForGenerate = document.getElementById("buttonGenerer")
let maListe = ["Karl", "Ali", "Jean", "Jeremy", "Marion", "Micheal", "Nadir", "Mathias", "Sirène", "Mohand", "Elodie", "Jean-Eude", "Hamza", "Simon", "Naim",];
let mesPlace = document.querySelectorAll("#placeStudent > div > article > p")
let count = 0;

buttonForGenerate.addEventListener("click", handleOnClickAleatoirePlacement)



function handleOnClickAleatoirePlacement(){   

for(let i = 0; i < mesPlace.length; i++){

    mesPlace[i].innerHTML= maListe[i]
console.log(i)
}



}







