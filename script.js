const inputNom = document.getElementById("studentInput");
const btnEntrez = document.getElementById("enter");
let tableau = [];
let count = 0;
console.log(tableau);


btnEntrez.addEventListener("click", handleSubmit);


function handleSubmit(tableau){
  let nameStudent = inputNom.value;
pushtableau(nameStudent)

return nameStudent;
}


function pushtableau(nameStudent, listeNom){
tableau.push(nameStudent)
console.log(tableau)

for(let i = 0; i < tableau.length; i = i + 1){
let addName = document.createElement("li")
addName.innerHTML= tableau[i]
console.log(addName)

document.querySelector("ol").appendChild(addName)

console.log(listeNom)
}

}


