const container = document.querySelector(".container");


createGrid(16);

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
        pixel.textContent = j;
        row.appendChild(pixel);
    }
    container.appendChild(row);
}