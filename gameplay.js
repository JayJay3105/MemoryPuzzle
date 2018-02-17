let moves = 0;

function updateOnMouse(cell) {
  moves += 1;
  if (arePartners()) {
    found.push(show[0], show[1]);
    status.html("You found a pair!");
  }
  if (moves >= 3) {
    moves = 0;
    show.splice(0, show.length);
    hideAll();
  }
  if (found.length == (cols * rows)) {
    status.html("You won!");
  }
}

function arePartners() {
  return show.length == 2 && show[0].partner == show[1];
}

function hideAll() {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      grid[x][y].show = false;
    }
  }
  for (let i = 0; i < found.length; i++) {
    found[i].show = true;
  }
}

function showAll() {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      grid[x][y].show = true;
    }
  }
}