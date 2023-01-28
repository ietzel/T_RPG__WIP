document.getElementById("create Character").addEventListener("click", function() {
    characters.push(new createCharacter(document.getElementById("character").value));
});

document.getElementById("negotiate/profiteer").addEventListener("click", function() {
	negotiate_profiteer();
});

var canvas = new fabric.Canvas("canvas");

const radius = 7; 
const slant = 6;

let noiseScale = 1/150
let ocean = "#008dc4";
let shore = "#00a9cc";
let sand = "#eecda3";
let grass = "#7ec850";
let stone = "#676767";
let snow = "#fffafa";

class Character {
	constructor(x, y, r, name) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.name = name;
	}
}

function createCharacter(name) {
    this.name = "";
    //this. = [];
    if(name) {
        this.name = name;
    }
}

class Hexagon {
	constructor(x, y, r, name) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.hex;
		this.name = name;
	}
	/*
	function distanceToMouse() {
		return dist(pointer.x, pointer.y, this.x, this.y);
	}
	*/
}

function pickColor(i, j) {
  let h = ((perlin.get((i)*noiseScale, (j)*noiseScale))+1)/2;
  let c = "#facade";
  
  if(h < 0.2) {
    c = ocean;
  } else if(h < 0.3) {
    if(Math.random() > Math.pow(h-0.2, 2)*100) {
      c = ocean;
    } else {
      c = shore;
    }
  } else if(h < 0.4) {
    if(Math.random() > Math.pow(h-0.3, 2)*100) {
      c = shore;
    } else {
      c = sand;
    }
  } else if(h < 0.5) {
    if(Math.random() > Math.pow(h-0.4, 2)*100) {
      c = sand;
    } else {
      c = grass;
    }
  } else if(h < 0.6) {
    if(Math.random() > Math.pow(h-0.5, 2)*100) {
      c = grass;
    } else {
      c = stone;
    }
  } else if (h < 0.7) {
    if(Math.random() > Math.pow(h-0.6, 2)*100) {
      c = stone;
    } else {
      c = snow;
    }
  } else {
    c = snow;
  }
  return c;
}

function createHexagon(x_pos, y_pos) {
	var hexagon = new fabric.Polygon(
		[
			{ x: x_pos, y: y_pos },
			{ x: x_pos+radius, y: y_pos },
			{ x: x_pos+(radius*1.5), y: y_pos+slant },
			{ x: x_pos+radius, y: y_pos+(slant*2) },
			{ x: x_pos, y: y_pos+(slant*2) },
			{ x: x_pos-(radius*0.5), y: y_pos+slant }
		], 
		{
			fill: pickColor(x_pos, y_pos),
			stroke: 'black',  
            strokeWidth: 0.5,
			//borderColor: 'black',
			//cornerColor: 'black',
			selectable: false
		}
	);
	canvas.add(hexagon);
}