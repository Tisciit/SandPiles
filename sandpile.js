class Sandpile {

    constructor(size, map) {
        this.size = size;
        if (!map) {
            this.spreadMap = [[0, 1, 0], [1, 0, 1], [0, 1, 0]];
        }
        else { this.spreadMap = map; }
        this.maxP = this.countOnesInMap();
        this.cells = this.createGrid();
    }

    countOnesInMap() {

        let ones = 0;
        for (let i = 0; i < this.spreadMap.length; i++) {
            for (let j = 0; j < this.spreadMap[i].length; j++) {
                if (this.spreadMap[i][j] == 1) {
                    ones++;
                }
            }
        }
        return ones;
    }

    createGrid() {
        let tgrid = [];
        for (let i = 0; i < this.size; i++) {
            tgrid[i] = [];
            for (let j = 0; j < this.size; j++) {
                tgrid[i][j] = 0;
            }
        }
        return tgrid;
    }

    topple() {
        let next = this.createGrid();

        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.cells[i][j] < this.maxP) {
                    next[i][j] = this.cells[i][j];
                }
            }
        }

        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.cells[i][j] >= this.maxP) {
                    next[i][j] += (this.cells[i][j] - this.maxP);


                    //Translate according to spreadMap
                    for (let y = -1; y < this.spreadMap.length - 1; y++) {
                        for (let x = -1; x < this.spreadMap[y + 1].length - 1; x++) {
                            
                            if (this.spreadMap[y + 1][x + 1] != 0) {
                                if (i + x >= 0 &&
                                    i + x < this.size &&
                                    j + y >= 0
                                    && j + y < this.size) {
                                    next[i + x][j + y] += 1;
                                }
                            }
                        }
                    }
                }
            }
        }
        //console.log(next);

        this.cells = next;
    }

    canTopple() {
        return !this.cells.indexOf(c => c.indexOf(c1 => c1 > this.maxP)) != -1;
    }
    add(i, j, val) {
        this.cells[i][j] += val;
    }
}