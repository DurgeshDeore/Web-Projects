// var btn = document.getElementById("btn-solve");
// alert("helo");         
// Select all input elements in the Sudoku grid
const inputs = document.querySelectorAll(".row input");

// Helper function to get the grid as a 2D array
function getGrid() {
  let grid = [];
  for (let i = 0; i < 9; i++) {
    grid[i] = [];
    for (let j = 0; j < 9; j++) {
      const value = inputs[i * 9 + j].value;
      grid[i][j] = value ? parseInt(value, 10) : 0; // Parse number or set to 0
    }
  }
  return grid;
}

// Helper function to set the grid values in the input elements
function setGrid(grid) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      inputs[i * 9 + j].value = grid[i][j] === 0 ? "" : grid[i][j];
    }
  }
}

// Check if a number is valid at a given position
function isValid(grid, row, col, num) {
  // Check row
  for (let x = 0; x < 9; x++) {
    if (grid[row][x] === num) return false;
  }
  // Check column
  for (let x = 0; x < 9; x++) {
    if (grid[x][col] === num) return false;
  }
  // Check 3x3 box
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[startRow + i][startCol + j] === num) return false;
    }
  }
  return true;
}

// Solve Sudoku using backtracking
function solveSudoku(grid, row = 0, col = 0) {
  if (row === 9) return true; // Solved the grid
  if (col === 9) return solveSudoku(grid, row + 1, 0); // Move to next row
  if (grid[row][col] !== 0) return solveSudoku(grid, row, col + 1); // Skip filled cell

  for (let num = 1; num <= 9; num++) {
    if (isValid(grid, row, col, num)) {
      grid[row][col] = num;
      if (solveSudoku(grid, row, col + 1)) return true;
      grid[row][col] = 0; // Backtrack
    }
  }
  return false;
}

// Handle Solve button click
document.getElementById("btn-solve").addEventListener("click", () => {
  const grid = getGrid();
  if (solveSudoku(grid)) {
    setGrid(grid);
    alert("Sudoku solved!");
  } else {
    alert("No solution exists for the given Sudoku!");
  }
});

// Handle Reset button click
document.getElementById("btn-reset").addEventListener("click", () => {
  inputs.forEach(input => (input.value = ""));
});
