class Sandpile {

    constructor(size, maxP) {
        this.size = size;
        this.maxP = maxP;
        this.cells = this.createGrid();
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

                    if (i - 1 >= 0) {
                        next[i - 1][j] += 1;
                    }

                    if (i + 1 < this.size) {
                        next[i + 1][j] += 1;
                    }

                    if (j - 1 >= 0) {
                        next[i][j - 1] += 1;
                    }

                    if (j + 1 < this.size) {
                        next[i][j + 1] += 1;
                    }
                }
            }
        }
        //console.log(next);

        this.cells = next;
    }

    add(i, j, val) {
        this.cells[i][j] += val;
    }
}