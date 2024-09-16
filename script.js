const container = document.querySelector(".container");
const clearButton = document.querySelector(".clearBtn");


clearButton.addEventListener("click", () =>{
    container.replaceChildren();
    createGrid(10);
})


function createGrid(dimension){
    for (let i = 0; i < dimension; i++){
        createRow(dimension);
    }
}

function createRow(dimension){
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < dimension; j++){
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.textContent = (j+1);
        row.appendChild(pixel);
    }
    container.appendChild(row);
}