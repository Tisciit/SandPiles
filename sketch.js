let pile;
let skip;
let oldmap;

const TSIZE = 3;

function setup() {

    noStroke();

    let spreadMap = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ]

    pile = new Sandpile(301, spreadMap);
    pile.add(round(pile.size / 2), round(pile.size / 2), 200000);

    createCanvas(pile.size * TSIZE, pile.size * TSIZE + 60);

    skip = createSlider(0, 20, 0)
    skip.position(10, pile.size * TSIZE + 5);
    frameRate(60);
}

function draw() {

    if (pile.canTopple()) {
        for (let a = 0; a < skip.value(); a++) {
            pile.topple();
        }
    }
    drawPile();
    oldmap = pile.cells;
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

            if (!oldmap || pile.cells[i][j] != oldmap[i][j]) {

                switch (pile.cells[i][j]) {
                    case 0:
                        fill(255, 228, 196);
                        break;

                    case 1:
                        fill(255, 218, 185);
                        break;

                    case 2:
                        fill(244, 164, 96);
                        break;

                    case 3:
                        fill(205, 183, 158);
                        break;
                    case 4:
                        fill(255, 127, 80);
                        break;
                    case 5:
                        fill(205, 91, 69);
                        break;
                    case 6:
                        fill(255, 140, 0);
                        break;
                    case 7:
                        fill(238, 118, 0);
                        break;
                    case 8:
                        fill(139, 62, 47);
                        break;
                    default:
                        fill(255, 165, 0);
                        break;
                }

                rect(i * TSIZE, j * TSIZE, TSIZE, TSIZE);
            }
        }
    }
}