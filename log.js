const container = document.querySelector(".container");

function createGrid() {
    checkGrid();
    let size;

    while (true) {
        size = prompt("Select the size of the grid (between 16 and 100): ");
        if (!(size > 100 || size < 16)) {
            break;
        }
    }
    
    for (let i = 0; i < size; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        container.appendChild(column);

        for (let i = 0; i < size; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", function(e) {
                square.style.backgroundColor = "mediumaquamarine";
            });
            column.appendChild(square);
        }
    }
}

function checkGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}
