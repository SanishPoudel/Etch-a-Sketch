// Create divs and add them to the div container.
// Set hovering effect for the divs.
// Add a button for the prompt that will ask about the number of squares in a grid.
// When a number is added into the prompt delete the existing grid and create a new grid.

const button = document.querySelector("button");
const container = document.querySelector(".container");

button.addEventListener
(
    "click", () =>
    {
        let squares_per_side = prompt("Enter number of squares per side for the new grid.");
        while (squares_per_side > 100)
        {
            squares_per_side = prompt("Enter number of squares per side for the new grid.");
        }
        
        gridSquares = squares_per_side ** 2;

        for (let i = 0; i < gridSquares; i++)
        {
            let new_div = document.createElement("div");
            new_div.textContent = "I'm a div."
            container.appendChild(new_div);
        }
    }
)


