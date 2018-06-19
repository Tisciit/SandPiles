let pile;
let colors;
let skip = 100;

const TSIZE = 12;

function setup() {

    noStroke();

    pile = new Sandpile(101, 4);
    pile.add(pile.size / 2, pile.size / 2, 90000);

    createCanvas(pile.size * TSIZE, pile.size * TSIZE);
    frameRate(60);
}

function draw() {
    background(90);
    for (let a = -1; a < skip; a++) {
        pile.topple();
    }
    drawPile();
    //noLoop();
}

function mousePressed() {

    let x = floor(mouseX / TSIZE);
    let y = floor(mouseY / TSIZE);

    if (pile.cells[x][y] != undefined) {
        pile.add(x, y, 1000);
    }
}

function drawPile() {
    for (let i = 0; i < pile.size; i++) {
        for (let j = 0; j < pile.size; j++) {

            let index = pile.cells[i][j];

            fill(255, 255, 255);
            switch (index) {
                case 0:
                    fill(180, 180, 180);
                    break;

                case 1:
                    fill(0, 0, 0);
                    break;

                case 2:
                    fill(90, 255, 0);
                    break;

                case 4:
                    fill(120, 255, 120);
                    break;
            }
            rect(i * TSIZE, j * TSIZE, TSIZE, TSIZE);
        }
    }
}
