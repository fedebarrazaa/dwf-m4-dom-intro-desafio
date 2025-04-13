const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEl = document.querySelector(".lista");
  const ItemsEls = document.querySelectorAll(".lista li");

  //for of para remover la lista actual
  for (let el of ItemsEls) {
    el.remove()
  }

  //for of para crear los nuevos 
  for (let item of cosasQueAprendimos) {
    const newLi = document.createElement('li');
    newLi.textContent = item.tema;

    const claseQueVoyAsignar = item.class || "item"; //poner item en las clases vacias
    newLi.classList.add(claseQueVoyAsignar); //asignar ya las clases que tienen el array

    listaEl.appendChild(newLi)
    
  }


  

  
}

main();
