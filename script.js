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
        let n = prompt("Enter number of squares per side for the new grid.");
        while (n > 100)
        {
            n = prompt("Enter number of squares per side for the new grid.");
        }
        
        for (let i = 0; i < n; i++)
        {
            let new_div = document.createElement("div");
            container.appendChild(new_div);
        }
    }
)


