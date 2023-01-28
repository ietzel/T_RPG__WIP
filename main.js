var characters = [];
var hexagons = [];

const width = 24;
const height = 21;

for(var i=0; i<20; i++) {
	for(var j=0; j<20; j++) {
		hexagons.push(new Hexagon(i, j, radius, i+", "+j));
	}	
}

function setup() {
	for(var i=0; i<width/2; i++) {
		hexagons[i] = [];
		for(var j=0; j<height; j++) {
			hexagons[i][j] = new Hexagon(i, j, radius, i+", "+j);
			hexagons[i][j].hex = createHexagon(i*radius*3, j*slant*2);
			hexagons[i][j] = new Hexagon(i, j, radius, i+", "+j);
			hexagons[i][j].hex = createHexagon(i*radius*3+(radius*1.5), j*slant*2-(slant));
		}	
	}
}

function draw() {
	/*
	for(var i=0; i<20; i++) {
		for(var j=0; j<20; j++) {
			
		}	
	}
	*/
}

setup();
/*
setInterval(function() {
    draw();
}, 3000);
*/