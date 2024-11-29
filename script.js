const buttonForGenerate = document.getElementById("buttonGenerer")
let maListe = ["Karl", "Ali", "Jean", "Jeremy", "Marion", "Micheal", "Nadir", "Mathias", "Sirène", "Mohand", "Elodie", "Jean-Eude", "Hamza", "Simon", "Naim",];
let mesPlace = document.querySelectorAll("#placeStudent > div > article > p")
let count = 0;

buttonForGenerate.addEventListener("click", handleOnClickAleatoirePlacement)



function handleOnClickAleatoirePlacement(){   
    const listeRandomiser = [...maListe];
    for(let i = listeRandomiser.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i - 1));
        [listeRandomiser[i], listeRandomiser[j]] = [listeRandomiser[j], listeRandomiser[i]]   
    }
    placement(listeRandomiser);

}
function placement(listeRandomiser){
    mesPlace.forEach((place, index) => {
        place.innerHTML = listeRandomiser[index];
        
    })
}








