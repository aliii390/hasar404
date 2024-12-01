const inputNom = document.getElementById("studentInput");
const btnEntrez = document.getElementById("enter");
const listeNom = document.getElementById("list");
// const listeLi = document.getElementById("listLi")
// code ALI
let tableau = [];
const buttonForGenerate = document.getElementById("buttonGenerer")
let mesPlace = document.querySelectorAll("#placeStudent > div > article > p")
let count = 0;


btnEntrez.addEventListener("click", handleSubmit);
buttonForGenerate.addEventListener("click", handleOnClickAleatoirePlacement)


function handleSubmit() {

  let textt = inputNom.value;

  tableau.push(textt);


  let newLi = document.createElement("li");
  newLi.innerText = textt;


 listeNom.appendChild(newLi);
  inputNom.value = '';

  

  console.log(tableau);
  
}
// FIN DE CODE ALI





function handleOnClickAleatoirePlacement(){   
  console.log("test");
  
    const listeRandomiser = [...tableau];
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


