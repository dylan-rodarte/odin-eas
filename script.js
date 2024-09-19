const container = document.querySelector(".container");
const clearButton = document.querySelector(".clearBtn");
const selectGrid = document.querySelector("#gridSize");


clearButton.addEventListener("click", () =>{
    container.replaceChildren();
    createGrid(selectGrid.value);
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
        pixel.addEventListener("click", () =>{
            pixel.style.backgroundColor = "black";
        })
        pixel.addEventListener("dblclick", () =>{
            pixel.style.backgroundColor = "white";
        })
        //pixel.textContent = (j+1);
        row.appendChild(pixel);
    }
    container.appendChild(row);
}

function createSelectionGrid(){
    for (let i = 1; i < 101; i++){
        const option = document.createElement("option");
        option.value = i;
        option.text = `${i}`;
        selectGrid.appendChild(option);
    }
}