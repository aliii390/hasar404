const inputNom = document.getElementById("studentInput");
const btnEntrez = document.getElementById("enter");
const listeNom = document.getElementById("listOl");
let tableau; 

console.log(listeNom);


btnEntrez.addEventListener("click", handleSubmit);




function handleSubmit(){
    let textt = inputNom.value;
     console.log(textt);
    textt.innerHtml = "<li> test </li>"

}





