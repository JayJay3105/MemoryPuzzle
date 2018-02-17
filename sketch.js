let scl = 100;
let size = scl * (9 / 10);
let cols = 6,
  rows = 5;
// let cols = 2,
//   rows = 2;
let grid = new Array(cols);
let show = [];
let found = [];
let status;
let showButton, hideButton;

function setup() {
  createCanvas(cols * scl, rows * scl);
  frameRate(15);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(rows);
  }
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      grid[x][y] = new Cell(x, y, null, null, 0);
    }
  }
  initializePartners();
  status = createP("Test");
  status.style("font-size", "70px");
  showButton = createButton("Show all");
  showButton.mousePressed(showAll);
  hideButton = createButton("Hide all");
  hideButton.mousePressed(hideAll);
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let x = floor(mouseX / scl);
    let y = floor(mouseY / scl);
    let cell = grid[x][y];
    // console.log(x + " | " + y + "\t\t" + cell.x + " | " + cell.y);
    cell.show = true;
    show.push(cell);
    updateOnMouse(cell);
  }
}

function draw() {
  background(0, 20, 20);
  fill(255);

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      grid[x][y].draw();
      grid[x][y].update();
    }
  }
}

function initializePartners() {
  let done = [];
  let partners = [];
  for (let i = 0; i < (cols * rows) / 2; i++) {
    let x = floor(random(cols));
    let y = floor(random(rows));
    let cell = grid[x][y];
    while (cell.show) {
      x = floor(random(cols));
      y = floor(random(rows));
      cell = grid[x][y];
    }
    cell.show = true;
    done.push(cell);
    partners.push(cell);
  }
  let noPartner = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!grid[i][j].show) noPartner.push(grid[i][j]);
    }
  }
  for (let i = noPartner.length - 1; i >= 0; i--) {
    let mainCell = random(done);
    let cell = noPartner[i];
    mainCell.partner = cell;
    cell.partner = mainCell;
    noPartner.splice(i, 1);
    done.splice(done.indexOf(mainCell), 1);
  }
  for (cell of partners) {
    let col = color(random(255), random(255), random(255));
    let shape = round(random(1));
    cell.color = col;
    cell.partner.color = col;
    cell.shape = shape;
    cell.partner.shape = shape;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j].show = false;
    }
  }
}