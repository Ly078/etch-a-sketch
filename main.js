const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");

function createGrid(size) {
    container.innerHTML = "";

    const squareSize = 100 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        square.addEventListener("mouseenter", () => {
            square.classList.add("active");
        });

        container.appendChild(square);
    }
}

resizeBtn.addEventListener("click", () => {
    const input = prompt("Squares per side (max 100):");
    if (input === null) return;

    const size = parseInt(input, 10);

    if (Number.isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    createGrid(size);
});

createGrid(16);