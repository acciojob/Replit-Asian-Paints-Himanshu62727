//your JS code here. If required.

// Function to reset the background color of all grid items
function resetGridColors() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
}

// Function to change the background color of a specific grid item
function changeColor() {
    // Get input values
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // Reset the grid colors
    resetGridColors();

    // Find the specific block and change its color
	
    if (blockId >= 1 && blockId <= 9) {
        const block = document.getElementById(blockId);
        block.style.backgroundColor = color;
    } else {
        alert('Invalid block ID. Please enter a number between 1 and 9.');
    }
}

// Event listener for the Change Color button
document.getElementById('change_button').addEventListener('click', changeColor);

// Event listener for the Reset button
document.getElementById('Reset').addEventListener('click', resetGridColors);

