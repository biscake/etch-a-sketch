const RANDOMCOLOR = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]

const gridContainer = document.querySelector(".drawingpad-container");

const gridRow = document.createElement("div");
gridRow.classList.add("gridrow");
const grid = document.createElement("div");
grid.classList.add("grid");
grid.addEventListener("click", (event) => {
    event.target.style.backgroundColor = color; 
});

const gridSize = document.querySelector("#gridSize");
const updateGridSize = document.querySelector("#update");
updateGridSize.addEventListener("click", appendGrid);
appendGrid();

let color = "black";



function appendGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
        gridRow.removeChild(gridRow.firstChild);
    }
    const gridDimension = gridSize.value;
    for (gridCount = 0; gridCount < gridDimension; gridCount++) {
        let clone = grid.cloneNode();
        gridRow.appendChild(clone);
    }
    for (gridRowCount = 0; gridRowCount < gridDimension; gridRowCount++) {
        let gridRowClone = gridRow.cloneNode(true);
        gridContainer.appendChild(gridRowClone);
    }
}

const buttons = document.querySelector("ul");
buttons.addEventListener("click", (btn) => {
    const btnId = btn.target.id;
    if (btnId === "black") {
        color = "black";

    }
    else if (btnId === "random") {
        color = RANDOMCOLOR[Math.floor(Math.random() * RANDOMCOLOR.length)];
        console.log(color);
        hover = color
    }
    else if (btnId === "clear") {
        let grids = gridContainer.querySelectorAll(".gridrow > .grid");
        for (let i = 0; i < grids.length; i++) {
            grids[i].style.backgroundColor = "white";
        }
        return;
    }
    else if (btnId === "eraser") {
        color = "white";
    }
});
