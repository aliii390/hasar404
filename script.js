const inputNom = document.getElementById("studentInput");
const btnEntrez = document.getElementById("enter");
const listeNom = document.getElementById("list");
// const listeLi = document.getElementById("listLi")
// code ALI
let tableau = [];

console.log(listeNom);


btnEntrez.addEventListener("click", handleSubmit);

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


