var names = ["Enemy"];
var characters = [[], []]; 
var planes = [];
var characterTetra, partyHex, groupTri;
var squares_moved = 0;
var enemies = 4, allies = 0;

(function setup() {
	for(var i=0; i<width; i+=2) {
		planes[i] = [];
		planes[i+1] = [];
		for(var j=0; j<height; j++) {
			if(j%2 == 0) {
				planes[i][j] = new createTriangle(i, j, i*radius*0.5, j*slant);
				planes[i+1][j] = new createTriangle(i+1, j, (i+1)*radius*0.5, j*slant);
			} else {
				planes[i][j] = new createTriangle(i, j, (i+1)*radius*0.5, j*slant);
				planes[i+1][j] = new createTriangle(i+1, j, (i+2)*radius*0.5, j*slant);
			}
		}	
	}
	for(var i=0; i<width; i+=2) {
		planes[groupX][groupY].map[i] = [];
		planes[groupX][groupY].map[i+1] = [];
		for(var j=0; j<height; j++) {
			planes[groupX][groupY].map[i][j] = new createHexagon(i, j, i*radius*1.5, j*slant*2);
			planes[groupX][groupY].map[i+1][j] = new createHexagon(i+1, j, (i+1)*radius*1.5, j*slant*2-(slant));
		}	
	}
	for(var i=0; i<width; i+=2) {
		planes[groupX][groupY].map[partyX][partyY].grid[i] = [];
		planes[groupX][groupY].map[partyX][partyY].grid[i+1] = [];
		for(var j=0; j<height; j++) {
			planes[groupX][groupY].map[partyX][partyY].grid[i][j] = new createSquare(i, j, i*radius, j*radius, planes[groupX][groupY].map[partyX][partyY].c);
			planes[groupX][groupY].map[partyX][partyY].grid[i+1][j] = new createSquare(i+1, j, (i+1)*radius, j*radius, planes[groupX][groupY].map[partyX][partyY].c);
		}	
	}
	redraw(1);
	for(var i=1; i<allies+1; i++) {
		characters[0][i] = new createCharacter(
			names[0]+" "+(i+1), 
			0.5, 0.5, 
			10, 10, 10, 11, 11, 11,
			false, false, false, false, true
		);
		characters[1][i].x = i;
		characters[1][i].y = i;
	}	
	for(var i=0; i<enemies; i++) {
		characters[1][i] = new createCharacter(
			names[0]+" "+(i+1), 
			0.5, 0.5, 
			10, 10, 10, 11, 11, 11,
			false, false, false, false, true
		);
		characters[1][i].x = i;
		characters[1][i].y = i;
	}	
})();

function round() {
	let s_m = squares_moved%6;
	while(s_m < 7) {
		s_m = squares_moved%6;
	}
	prompt("Type attack to attack, or type the name of a skill");
	for(var i=0; i<enemies; i++) {
		fr_action(characters[1][i], 3, 3, characters[1][i], "attack");
	}
	for(var i=0; i<enemies; i++) {
		fr_action(characters[1][i], 3, 3, characters[0][0], "attack");
	}
}

function redraw(scale) {
	if(scale == 0) {
		for(var i=0; i<width; i++) {
			for(var j=0; j<height; j++) {
				canvas.add(planes[groupX][groupY].map[partyX][partyY].grid[i][j].tetra);
			}
		}
		characterTetra = new fabric.Polygon(
			[
				{ x: planes[groupX][groupY].map[partyX][partyY].grid[characterX][characterY].x_pos, y: planes[groupX][groupY].map[partyX][partyY].grid[characterX][characterY].y_pos },
				{ x: planes[groupX][groupY].map[partyX][partyY].grid[characterX][characterY].x_pos+radius, y: planes[groupX][groupY].map[partyX][partyY].grid[characterX][characterY].y_pos },
				{ x: planes[groupX][groupY].map[partyX][partyY].grid[characterX][characterY].x_pos+radius, y: planes[groupX][groupY].map[partyX][partyY].grid[characterX][characterY].y_pos+radius },
				{ x: planes[groupX][groupY].map[partyX][partyY].grid[characterX][characterY].x_pos, y: planes[groupX][groupY].map[partyX][partyY].grid[characterX][characterY].y_pos+radius },
			], 
			{
				stroke: 'black',  
				strokeWidth: 0.5,
				//borderColor: 'black',
				//cornerColor: 'black',
				opacity: 0.66,
				selectable: false
			}
		);
		canvas.add(characterTetra);
		for(var i=0; i<characters[1].length; i++) {
			enemyTetra = new fabric.Polygon(
				[
					{ x: characters[1][i].x*radius, y: characters[1][i].y*radius },
					{ x: (characters[1][i].x+1)*radius, y: characters[1][i].y*radius },
					{ x: (characters[1][i].x+1)*radius, y: (characters[1][i].y+1)*radius },
					{ x: characters[1][i].x*radius, y: (characters[1][i].y+1)*radius }
				], 
				{
					stroke: 'black',  
					strokeWidth: 0.75,
					//borderColor: 'black',
					//cornerColor: 'black',
					opacity: 0.33,
					selectable: false
				}
			);
			canvas.add(enemyTetra);
		}	
		while(running) {
			round();
		}
	} else if(scale == 1) {
		for(var i=0; i<width; i++) {
			for(var j=0; j<height; j++) {
				canvas.add(planes[groupX][groupY].map[i][j].hex);
			}
		}
		partyHex = new fabric.Polygon(
			[
				{ x: planes[groupX][groupY].map[partyX][partyY].x_pos+(radius/2), y: planes[groupX][groupY].map[partyX][partyY].y_pos },
				{ x: planes[groupX][groupY].map[partyX][partyY].x_pos+(radius*1.25), y: planes[groupX][groupY].map[partyX][partyY].y_pos+(slant/2) },
				{ x: planes[groupX][groupY].map[partyX][partyY].x_pos+(radius*1.25), y: planes[groupX][groupY].map[partyX][partyY].y_pos+(slant*1.5) },
				{ x: planes[groupX][groupY].map[partyX][partyY].x_pos+(radius/2), y: planes[groupX][groupY].map[partyX][partyY].y_pos+(slant*2) },
				{ x: planes[groupX][groupY].map[partyX][partyY].x_pos+(radius*-0.25), y: planes[groupX][groupY].map[partyX][partyY].y_pos+(slant*1.5) },
				{ x: planes[groupX][groupY].map[partyX][partyY].x_pos+(radius*-0.25), y: planes[groupX][groupY].map[partyX][partyY].y_pos+(slant/2) }
			], 
			{
				stroke: 'black',  
				strokeWidth: 0.5,
				//borderColor: 'black',
				//cornerColor: 'black',
				opacity: 0.66,
				selectable: false
			}
		);
		canvas.add(partyHex);
	} else if(scale == 2) {
		for(var i=0; i<width; i++) {
			for(var j=0; j<height; j++) {
				canvas.add(planes[groupX][groupY].tri);
			}
		}
		groupTri = new fabric.Circle(
			{
				left: planes[groupX][groupY].x_pos-(radius*0.25), 
				top: planes[groupX][groupY].y_pos+(slant*0.125),
				radius: radius/4,
				fill: "black",
				stroke: 'black',  
				strokeWidth: 0.25,
				selectable: false
			}
		);
		canvas.add(groupTri);
	}
}

function clear() {
	if(scale == 0) {
		for(var i=0; i<width; i++) {
			for(var j=0; j<height; j++) {
				canvas.remove(planes[groupX][groupY].map[partyX][partyY].grid[i][j].tetra);
			}
		}
		canvas.remove(characterTetra);
	} else if(scale == 1) {
		for(var i=0; i<width; i++) {
			for(var j=0; j<height; j++) {
				canvas.remove(planes[groupX][groupY].map[i][j].hex);
			}
		}
		canvas.remove(partyHex);
	} else if(scale == 2) {
		for(var i=0; i<width; i++) {
			for(var j=0; j<height; j++) {
				canvas.remove(planes[groupX][groupY].tri);
			}
		}
		canvas.remove(groupTri);
	}
}

function characterTetraChange(dX, dY) {
	characterX += dX;
	characterY += dY;
	if(characterX < 0) {
		characterX = 0;
	}
	if(characterX > width-1) {
		characterX = width-1;
	}
	if(characterY < 0) {
		characterY = 0;
	}
	if(characterY > height-1) {
		characterY = height-1;
	}
	clear(0);
	redraw(0);
}
function partyHexChange(dX, dY) {
	partyX += dX;
	partyY += dY;	
	if(partyX < 0) {
		partyX = 0;
	}
	if(partyX > width-1) {
		partyX = width-1;
	}
	if(partyY < 0) {
		partyY = 0;
	}
	if(partyY > height-1) {
		partyY = height-1;
	}
	clear(1);
	redraw(1);
}
function groupTriChange(dX, dY) {
	groupX += dX;
	groupY += dY;
	if(groupX < 0) {
		groupX = 0;
	}
	if(groupX > width-1) {
		groupX = width-1;
	}
	if(groupY < 0) {
		groupY = 0;
	}
	if(groupY > height-1) {
		groupY = height-1;
	}
	clear(2);
	redraw(2);
}

window.addEventListener('keydown', (e) => {
	let dX = 0, dY = 0;
	switch(e.code) {
		case "KeyW":
			dY = -1;
			e.returnValue = false;
			break;
		case "KeyD":
			dX = 1;
			e.returnValue = false;
			break;
		case "KeyS":
			dY = 1;
			e.returnValue = false;
			break;
		case "KeyA":
			dX = -1;
			e.returnValue = false;
			break;
    }
    if(scale == 0) {
		characterTetraChange(dX, dY);
		squares_moved+=(dX+dY);
	} else if(scale == 1) {
		partyHexChange(dX, dY);
	} else if(scale == 2) {
		groupTriChange(dX, dY);
	}
});

document.getElementById("local").addEventListener("click", function() {
	clear(scale);
	scale = 0;
	redraw(scale);
	document.getElementById("scale").innerHTML = "Scale: "+scales[scale];
});

document.getElementById("geographic").addEventListener("click", function() {
	clear(scale);
	scale = 1;
	redraw(scale);
	document.getElementById("scale").innerHTML = "Scale: "+scales[scale];
});

document.getElementById("planar").addEventListener("click", function() {
	clear(scale);
	scale = 2;
	redraw(scale);
	document.getElementById("scale").innerHTML = "Scale: "+scales[scale];
});