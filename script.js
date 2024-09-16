const container = document.querySelector(".container");

createGrid(3);

function createGrid(dimension){
    for (let i = 0; i < (dimension * dimension); i++){
        const pixel = document.createElement("div");
        pixel.textContent = i;
        container.appendChild(pixel);
    }
}