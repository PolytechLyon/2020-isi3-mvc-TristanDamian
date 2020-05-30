import {
  GAME_SIZE,
  CELL_STATES,
  DEFAULT_ALIVE_PAIRS,
  RENDER_INTERVAL
} from "./constants";
import { drawGame } from "./view";

export class Model {
  constructor(callback) {
    this.width = GAME_SIZE;
    this.height = GAME_SIZE;
    this.raf = null;
    this.callback = callback;
  }

  init() {
    this.state = Array.from(new Array(this.height), () =>
      Array.from(new Array(this.width), () => CELL_STATES.NONE)
    );
    DEFAULT_ALIVE_PAIRS.forEach(([x, y]) => {
      this.state[y][x] = CELL_STATES.ALIVE;
    });
    this.updated();
  }

  run(date = new Date().getTime()) {
    this.raf = requestAnimationFrame(() => {
      const currentTime = new Date().getTime();
      if (currentTime - date > RENDER_INTERVAL) {
        const modification = [];
        for (let i = 0; i < this.width; i++) {
          for (let j = 0; j < this.width; j++) {
            const nbAlive = this.aliveNeighbours(i, j);
            //console.log(nbAlive);
            if (
              this.state[j][i] === CELL_STATES.ALIVE &&
              (nbAlive < 2 || nbAlive > 3)
            ) {
              modification.push([i, j, CELL_STATES.DEAD]);
            } else {
              if (nbAlive == 3) {
                modification.push([i, j, CELL_STATES.ALIVE]);
              }
            }
            // TODO implement Game of life logic
          }
        }

        modification.forEach(([x, y, value]) => {
          this.state[y][x] = value;
        });

        this.updated();
        this.run(currentTime);
      } else {
        this.run(date);
      }
    });
  }

  stop() {
    cancelAnimationFrame(this.raf);
    this.raf = null;
  }

  reset() {
    // TODO

    this.stop();
    this.init();
    this.updated();
  }

  isCellAlive(x, y) {
    return x >= 0 &&
      y >= 0 &&
      y < this.height &&
      x < this.height &&
      this.state[y][x] === CELL_STATES.ALIVE
      ? 1
      : 0;
  }

  aliveNeighbours(x, y) {
    let number = 0;
    // TODO
    /*for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (j !== 0 || i !== 0) {
          //on ne test pas la cellule de départ
          if (this.isCellAlive(x + i, y + j)) {
            number++;
          }
        }
      }
    }*/

    if (this.isCellAlive(x - 1, y - 1)) {
      number++;
    }
    if (this.isCellAlive(x, y - 1)) {
      number++;
    }
    if (this.isCellAlive(x + 1, y - 1)) {
      number++;
    }
    if (this.isCellAlive(x - 1, y)) {
      number++;
    }
    if (this.isCellAlive(x + 1, y)) {
      number++;
    }
    if (this.isCellAlive(x - 1, y + 1)) {
      number++;
    }
    if (this.isCellAlive(x, y + 1)) {
      number++;
    }
    if (this.isCellAlive(x + 1, y + 1)) {
      number++;
    }

    return number;
  }

  updated() {
    // TODO update the view
    this.callback(this);
  }
}
