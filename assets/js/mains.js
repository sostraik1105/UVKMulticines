import datos from "../../data.json" assert {type: "json"};

const cards = ()=>{
    const container = document.getElementById('pelis');
    const cardPelis = document.getElementById('cardPelis').content;
    const fragment = document.createDocumentFragment();

    datos.forEach(el=>{
        cardPelis.querySelector("img").setAttribute("src", el.img);
        cardPelis.querySelector("h3").textContent = el.title;
        cardPelis.querySelector("p").textContent = `${el.genero}, ${el.duracion}, ${el.rangoEdad}`;

        let repeat = document.importNode(cardPelis, true)
        fragment.appendChild(repeat)
    })

    container.appendChild(fragment)
}

document.addEventListener("DOMContentLoaded", cards )