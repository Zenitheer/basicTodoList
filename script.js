let input = document.getElementById("input");
let addBtn = document.getElementById("btn");

function create(){
  let text = input.value;
  
  console.log(text);
}

addBtn.addEventListener( 'click', ()=>{create()});
