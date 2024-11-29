const inputNom = document.getElementById("studentInput");
const btnEntrez = document.getElementById("enter");
const listeNom = document.getElementById("listOl");
// const listeLi = document.getElementById("listLi")




// code ALI

let tableau = [];

console.log(listeNom);

btnEntrez.addEventListener("click", handleSubmit);

function handleSubmit() {
  //
  // let testing = listeLi.innerText  += textt;
  // console.log(listeNom);

  // newList.textContent = textt;

  // listeNom.appendChild(newList)

  // for(let tab of tableau){
  //     let textt = inputNom.value;
  //     let newList = document.createElement('li');
  //     newList.innerText = tab
  // }

  let textt = inputNom.value;

  tableau.push(textt);


  let newLi = document.createElement("li");
  newLi.innerText = textt;

   listeNom.appendChild(newLi);
  inputNom.value = '';

  

  console.log(tableau);
  
}


// FIN DE CODE ALI