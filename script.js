const button = document.querySelector("button");
const container = document.querySelector(".container");


function create_divs(squares_per_side)
{
    let grid_squares_per_side = squares_per_side; 
    let gridSquares = grid_squares_per_side ** 2;
    for (let i = 0; i < gridSquares; i++)
        {
            // Create divs and add them to the div container.
            let new_div = document.createElement("div");
            container.appendChild(new_div);
        }

    const items = document.querySelectorAll(".container div");
    items.forEach
    (
        function(div)
        {
            div.style.width = "calc(100% / " + grid_squares_per_side + ")";
        }
    )
}

create_divs(16);

// Add a button for the prompt that will ask about the number of squares in a grid.
button.addEventListener
(
    "click", () =>
    {
        // When a number is added into the prompt delete the existing grid and create a new grid.
        while (container.firstChild)
        {
            container.removeChild(container.lastChild);
        }

        squares_per_side = prompt("Enter number of squares per side for the new grid.");
        while (squares_per_side > 100)
        {
            squares_per_side = prompt("Number of squares per side should not exceed 100");
        }

        create_divs(squares_per_side);
    }
)


