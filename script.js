const inputNom = document.getElementById("studentInput");
const btnEntrez = document.getElementById("enter");
const listeNom = document.getElementById("list");
// const listeLi = document.getElementById("listLi")
// code ALI
let tableau = [];
const buttonForGenerate = document.getElementById("buttonGenerer")
let mesPlace = document.querySelectorAll("#placeStudent > div > article > p")
let count = 0;
let addDiv = document.getElementById("addDiv")
let divPourAdd = document.getElementById("placeStudent")
let divTarget;

btnEntrez.addEventListener("click", handleSubmit);
buttonForGenerate.addEventListener("click", handleOnClickAleatoirePlacement)
addDiv.addEventListener("click", handleClickAddDiv)


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

function handleClickAddDiv(){

  let newDiv = document.createElement("article")
newDiv.classList.add("w-[100px]", "justify-center", "items-center", "flex", "shadow-xl", "h-[100px]", "border-opacity-[20%]", "border-white", "border-[0.1px]", "rounded-[14%]", "bg-gradient-to-r", "from-box-premiere-couleur", "to-box-deuxieme-couleur", "opacity-[1]", "blur-[0.5px]")  
divPourAdd.appendChild(newDiv)

newDiv.addEventListener("mousedown", handlePressMoveDiv)

return newDiv
}


function handlePressMoveDiv(newDiv){
divTarget = newDiv.target

  divTarget.classList.add("absolute", "z-[1000]")
  

  divTarget.addEventListener("mousemove", handleMouseMoveFollow)

return divTarget;
}


function moveAt(pageX, pageY){
  divTarget.style.left = pageX - divTarget.offsetWidth / 2 + "px";
  divTarget.style.top = pageY - divTarget.offsetWidth / 2 + "px";
}


function handleMouseMoveFollow(event){ 
moveAt(event.pageX, event.pageY);
}
