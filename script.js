/* class chessPiece {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.x = initX;
    this.y = initY;
  }
} */

class Pawn {
  constructor(name, color, R, C) {
    this.name = name;
    this.color = color;
    this.R = R;
    this.C = C;
      this.moves = [
        [1, 0],
      ];
  }
  

  //Calculate next moves when grid is clicked.
  next_move() {

    const potential_moves = this.moves.map((el) => {
      const next_row = this.R + -el[0];
      const next_col = this.C + el[1];
      if (next_row < 0) return;

      //Check if can eat
      
      //check for obstruction
      return cells.get(`${next_row},${next_col}`);
     });

    return potential_moves;
  }
}

/* class King extends chessPiece {
  constructor() {
      super(alias, color, X, Y);
      this.moves = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, -1],
        [-1, 1],
      ];
    }
}
class Knight extends chessPiece {
  constructor() {
      super(alias, color, X, Y);
      this.moves = [
        [1, 3],
        [3, 1],
        [-1, 3],
        [-3, 1],
        [3, -1],
        [1, -3],
        [-1, -3],
        [-3, -1],
      ];
    }
}
class Rook extends chessPiece {
  constructor() {
      super(alias, color, X, Y);
      this.moves = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, -1],
        [-1, 1],
      ];
    }
}
class Queen extends chessPiece {
  constructor() {
      super(alias, color, X, Y);
      this.moves = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, -1],
        [-1, 1],
      ];
    }
}

class Bishop extends chessPiece {
  constructor() {
      super(alias, color, X, Y);
      this.moves = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, -1],
        [-1, 1],
      ];
    }
} */

let RUNNING = true;
let turn = 0;
let active = null;
let next_moves = [];
const tracker = Array.from({ length: 8 }, () => new Array(8).fill(null));
const cells = new Map();
//render the squares

const grid = document.querySelector(".grid");
flag = false;
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const el = document.createElement("li");
      el.classList.add('.cell');
      el.classList.add()
    cells.set(`${i},${j}`, el);
    if (i % 2 == 0) {
      flag == true ? el.classList.add("even") : el.classList.add("odd");
    } else {
      flag == true ? el.classList.add("odd") : el.classList.add("even");
    }
    flag = !flag;
    grid.append(el);
    }
}

const pawn = new Pawn('pawn', 'white', 7, 4);
tracker[7][4] = pawn;

const pawn1 = new Pawn("pawn", "white", 7, 5);
tracker[7][5] = pawn1;

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (tracker[i][j]) {
      const start_point = cells.get(`${i},${j}`);
      const img = document.createElement("svg");
      img.className = "piece";
      img.innerHTML = `<svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M266.487,35.439c-4.557-1.178-9.208,1.604-10.359,6.17c-1.161,4.574,1.604,9.216,6.178,10.368
				c9.131,2.313,16.23,9.412,18.517,18.526c0.973,3.874,4.454,6.451,8.269,6.451c0.691,0,1.391-0.085,2.091-0.256
				c4.574-1.152,7.339-5.786,6.195-10.359C293.538,51.132,281.711,39.287,266.487,35.439z"/>
			<path d="M349.867,426.667h-1.075c5.896-7.356,9.609-16.358,9.609-25.6c0-16.657-8.235-33.604-17.775-53.24
				c-11.665-24.013-24.892-51.243-24.892-83.294c0-43.17,4.574-68.113,6.844-77.85c10.778-3.012,18.756-12.817,18.756-24.55
				c0-14.114-11.486-25.6-25.6-25.6h-11.563C321.604,122.445,332.8,100.915,332.8,76.8C332.8,34.458,298.351,0,256,0
				s-76.8,34.458-76.8,76.8c0,24.115,11.196,45.645,28.629,59.733h-11.563c-14.114,0-25.6,11.486-25.6,25.6s11.486,25.6,25.6,25.6
				H281.6c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533h-85.333c-4.71,0-8.533-3.831-8.533-8.533
				c0-4.702,3.823-8.533,8.533-8.533h119.467c4.71,0,8.533,3.831,8.533,8.533c0,4.702-3.823,8.533-8.533,8.533
				c-0.119,0-0.205,0.06-0.324,0.068c-0.64,0.026-1.229,0.205-1.835,0.367c-0.478,0.128-0.956,0.188-1.391,0.393
				c-0.521,0.239-0.93,0.597-1.391,0.939c-0.435,0.316-0.887,0.572-1.246,0.956c-0.341,0.358-0.555,0.811-0.828,1.237
				c-0.341,0.512-0.691,1.007-0.922,1.596c-0.043,0.102-0.12,0.171-0.154,0.282c-0.367,1.101-8.977,27.605-8.977,88.03
				c0,35.985,14.754,66.347,26.607,90.752c8.619,17.732,16.06,33.05,16.06,45.781c0,12.442-13.158,25.6-25.6,25.6H230.4
				c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h119.467c12.442,0,25.6,13.158,25.6,25.6v25.6H136.533v-25.6
				c0-12.442,13.158-25.6,25.6-25.6h34.133c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533
				c-12.442,0-25.6-13.158-25.6-25.6c0-12.732,7.441-28.049,16.06-45.781c11.853-24.405,26.607-54.767,26.607-90.752
				c0-11.221-1.408-28.834-4.173-52.343c-0.555-4.685-4.787-8.081-9.481-7.475c-4.676,0.555-8.021,4.796-7.475,9.481
				c2.662,22.519,4.062,39.927,4.062,50.338c0,32.051-13.227,59.281-24.892,83.294c-9.54,19.635-17.775,36.582-17.775,53.24
				c0,9.233,3.678,18.253,9.566,25.6h-1.033c-21.931,0-42.667,20.736-42.667,42.667v34.133c0,4.71,3.814,8.533,8.533,8.533h256
				c4.719,0,8.533-3.823,8.533-8.533v-34.133C392.533,447.403,371.797,426.667,349.867,426.667z M256,136.533
				c-32.93,0-59.733-26.795-59.733-59.733S223.07,17.067,256,17.067s59.733,26.795,59.733,59.733S288.93,136.533,256,136.533z"/>
		</g>
	</g>
</g>
</svg>`;
      start_point.appendChild(img);
    }
  }
}

const dim = grid.getBoundingClientRect();

document.querySelector('.board').addEventListener('click', (e) => {
  let clickX = e.clientX - dim.left;
  let clickY = e.clientY - dim.top;
  const row = Math.floor(clickY / 50);
  const col = Math.floor(clickX / 50);

    
  const piece = tracker[row][col];
  console.log(piece);
  if (!piece) return;
  
  const cell = cells.get(`${row},${col}`);
  if (active) {
    cells.get(active).classList.remove("active");
  }
  
  if (next_moves) {
    while (next_moves.length !== 0) {
      next_moves.pop().classList.remove('active');
    }
  }

  next_moves = piece.next_move();

  next_moves.forEach(el => {
    el.classList.add('active');
  });

    cell.classList.add("active");
    active = `${row},${col}`;
});

function move(curr) {
    
    //take curr row and col
    const { row, col } = curr;

    //check if piece exists
    if (!tracker[row][col]) return;

}