const MOVE_STEP = 10; //step length in pixels

const DIR_TOP = 1;
const DIR_RIGHT = 2;
const DIR_BOTTOM = 3;
const DIR_LEFT = 4;

const TOP_KEY_ALLIAS = ["w", "W", "ц", "Ц"];
const RIGHT_KEY_ALLIAS = ["d", "D", "в", "В"];
const BOTTOM_KEY_ALLIAS = ["s", "S", "ы", "Ы"];
const LEFT_KEY_ALLIAS = ["a", "A", "ф", "Ф"];

const KEY2DIR = new Map([
  [TOP_KEY_ALLIAS, DIR_TOP],
  [RIGHT_KEY_ALLIAS, DIR_RIGHT],
  [BOTTOM_KEY_ALLIAS, DIR_BOTTOM],
  [LEFT_KEY_ALLIAS, DIR_LEFT],
]);

window.addEventListener("keydown", (e) => {
  for (let allias in KEY2DIR.keys()) {
    if (allias.includes(e.key)) {
      // TODO : Connect to tutle instance
      Tutle.changeDirection(KEY2DIR[allias]);
      Tutle.move();
    }
  }
});

class Tutle {
  constructor(id) {
    this.id = id;
    this.direction = DIR_TOP;
  }

  changeDirection(dir) {
    this.direction = dir;
    DOMEditor.changeTutleDirection(this.id);
  }

  move() {
    switch (this.direction) {
      case 1:
        DOMEditor.shiftTutle(this.id, "Y", -1);
        break;
      case 2:
        DOMEditor.shiftTutle(this.id, "X", 1);
        break;
      case 3:
        DOMEditor.shiftTutle(this.id, "Y", 1);
        break;
      case 4:
        DOMEditor.shiftTutle(this.id, "X", -1);
        break;
      default:
        console.error("KUDA???");
    }
  }
}

let DOMEditor = {
  changeTutleDirection(tutleId) {
    // TODO : Texture rotation
  },

  shiftTutle(tutleId, axis, direction) {
    switch (axis) {
      case "X":
        // top direction * MOVE_STEP
        break;
      case "Y":
        // left direction * MOVE_STEP
        break;
      default:
        console.error("HOW???");
    }
  },
};
