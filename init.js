var running = false;
const scales = ["(local)", "(geographic)", "(planar)"];
var scale = 1;
const minigames = [
	createMinigame(
		"",
		"",
		""
	),
	createMinigame(
		"",
		"",
		""
	), 
	createMinigame(
		"scavenger hunt",
		"It is not safe to travel, though a bunker may suffice for now.",
		"Ammo, as well as some food, is found to continue on a journey."
	),  
	createMinigame(
		"sentient jungle",
		"Whatever produced the knots in this jungle will surely not be safe enough to encounter.",
		"There is an unsettling ring of 8 trees in the center of the jungle."
	),
	createMinigame(
		"snakeoil gladiator arena",
		"It seems to dangerous to partake in the games hosted in the mountain range.",
		"Once piecemeal armour is selected in the armoury, the opponent is met in the arena."
	),
	createMinigame(
		"kyton castle",
		"The castle appears too unusual for this snowy terrain.",
		"Upon entering the castle, you are offered an oppoirtunity to participate in some experiments: after being taken to a room, and being offered a seat on a reclining chair, they speak of the imperfections of humanity, and how they may be changed to perfection through pain: they inform you that while the problems of your organs are difficult to remove, your limbs may be approximated at a worth that may be exhanged for rather painfully-integrated prosthetics. You claim that some information of yours may be a more preferrable currency, and thereby exit the castle after informing them of the recent ways of nearby mortals."
	)
];

document.getElementById("play").addEventListener("click", function() {
	if(running) {
		running = false;
		document.getElementById("play").innerHTML = "play";
	} else {
		running = true;
		document.getElementById("play").innerHTML = "pause";
	}
});

function score_to_mod(score) {
	return Math.floor((score-10)/2);
}

function randomInt(a, b) {
	return (Math.random()*(b-a))+a;
}

var canvas = new fabric.Canvas("canvas");

const radius = 7, slant = 6;
const width = 24, height = 21;
let clickX = canvas.width, clickY = canvas.height;
let partyX = 12, partyY = 10;
let characterX = partyX, characterY = partyY, groupX = partyX, groupY = partyY; 

let noiseScale = 1/150;
let ocean = "#008dc4";
let shore = "#00a9cc";
let sand = "#eecda3";
let grass = "#7ec850";
let stone = "#676767";
let snow = "#fffafa";

function createCharacter(name, ethics, morals, str, dex, con, int, wis, cha, c_or_f, h_d, lycanthrope, giant, advanced) {
	this.name = "Character";
	this.ethics = 0.5;
	this.morals = 0.5;
	this.level = 1;
	this.XP = 200;
	this.budget = Math.round(787*Math.pow(2, 0.365*this.level), 2);
	this.type = "Humanoid";
	this.abilities = [10, 10, 10, 11, 11, 11]; //str, dex, con, int, wis, cha
	this.templates = [false, false, false, false, false];
	this.speeds = [30, 0, 0, 0, 0, 0]; //land, climb, fly, swim, burrow;
	this.x = 0;
	this.y = 0;
	this.bonuses = [0, 0]; //nat armor, initiative
	this.equipment;
	if(name) {
		this.name = name;
	}
	if(ethics) {
		this.ethics = 0.5;
	}
	if(morals) {
		this.morals = 0.5;
	}
	if(str) {
		this.abilities[0] = str;
	}
	if(dex) {
		this.abilities[1] = dex;
	}
	if(con) {
		this.abilities[2] = con;
	}
	if(int) {
		this.abilities[3] = int;
	}
	if(wis) {
		this.abilities[4] = wis;
	}
	if(cha) {
		this.abilities[5] = cha;
	}
	if(c_or_f) {
		this.templates[0] = c_or_f;
	}
	if(h_d) {
		this.templates[1] = h_d;
		this.abilities[0] += 8;
		this.abilities[2] += 6;
		this.abilities[3] += 2;
		this.abilities[5] += 2;
		this.bonuses += 4;
		this.speeds[2] = this.speeds[0]*2; 
	}
	if(lycanthrope) {
		this.templates[3] = lycanthrope;
		this.abilities[0] += 2+((lycanthrope+1)*2);
		this.abilities[1] -= lycanthrope*2;
		this.abilities[2] += 2;
		this.abilities[4] += 2;
		this.abilities[5] -= 2;
		this.bonuses[0] += 2+lycanthrope;
	}
	if(giant) {
		this.templates[4] = true;
		this.size = "L";
		this.abilities[0] += 8;
		this.abilities[1] -= 2;
		this.abilities[2] += 4;
		this.bonuses[0] += 3;
	}
	if(advanced) {
		this.templates[5] = true;
		this.abilities[0] += 4;
		this.abilities[1] += 4;
		this.abilities[2] += 4;
		this.abilities[3] += 4;
		this.abilities[4] += 4;
		this.abilities[5] += 4;
		this.bonuses[0] += 2;
	}
	
	this.f_updateSaves = function([fort, ref, will]) {
		this.saves = [fort, ref, will];
	}
	this.f_updateMvmt = function(run_mult, init_bonus) {
		this.run_mult = run_mult; 
		this.init_bonus = init_bonus; 
	}
	this.f_updatePoints = function(skill, hp_bonus) {
		this.skill = skill; 
		this.hp_bonus = hp_bonus; 
	}	
}

function fr_action(character, dX, dY, target, interaction) {
	if(dX+dY <= 30) {
		character.x += dX;
		character.y += dY;
	}
	if(interaction == "attack") {
		//target.;
	} else {
		//;
	}
}

const Feats = [
	"Great Fortitude",
	"Iron Will",
	"Lightning Reflexes",
	"Run",
	"Imp. Initiative",
	"Skill Focus",
	"Toughness"
]

const Skills = [
	new createSkill("Climb", "str"),
	new createSkill("Swim", "str"),
	new createSkill("Fly", "dex"),
	new createSkill("Acrobatics", "dex"),
	new createSkill("Disable Device", "dex"),
	new createSkill("Escape Artist", "dex"),
	new createSkill("Sleight of Hand", "dex"),
	new createSkill("Stealth", "dex"),
	new createSkill("Craft", "int"),
	new createSkill("Knowledge", "int"),
	new createSkill("Profession", "wis"),
	new createSkill("Heal", "wis"),
	new createSkill("Perception", "wis"),
	new createSkill("Perform", "cha"),
	new createSkill("Diplomacy", "cha"),
	new createSkill("Disguise", "cha")
];

function createEquipment(name, mod, target, value, weight, attack) {
	this.name = name;
	this.mod = mod;
	this.target = target;
	this.value = value;
	this.weight = weight;
	this.attack = attack;	
}	

function createAttack(name, atk_mod, dmg_mod, ...dmg) {
	this.name = name;
	this.atk_mod = atk_mod;
	this.dmg_mod = dmg_mod;
	this.dmg = [dmg];
}	

function createDamage(name, dmg, type) {
	this.name = name;
	this.dmg = dmg;
	this.type = type;
}

function createSkill(name, mod) {
	this.name = name;
	this.mod = mod;
}	

function pickColor(i, j, h) {
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

function createSquare(x, y, x_pos, y_pos, c) {
	this.x = x;
	this.y = y;
	this.x_pos = x_pos;
	this.y_pos = y_pos;
	this.tetra = new fabric.Polygon(
		[
			{ x: x_pos, y: y_pos },
			{ x: x_pos+radius, y: y_pos },
			{ x: x_pos+radius, y: y_pos+radius },
			{ x: x_pos, y: y_pos+radius },
		], 
		{
			fill: c,  
            stroke: "black",
			strokeWidth: 0.33,
			selectable: false
		}
	);
}

function createHexagon(x, y, x_pos, y_pos) {
	this.x = x;
	this.y = y;
	this.x_pos = x_pos;
	this.y_pos = y_pos;
	this.elevation = ((perlin.get((x_pos)*noiseScale, (y_pos)*noiseScale))+1)/2;
	this.c = pickColor(x, y, this.elevation);
	this.grid = [];
	this.hex = new fabric.Polygon(
		[
			{ x: x_pos, y: y_pos },
			{ x: x_pos+radius, y: y_pos },
			{ x: x_pos+(radius*1.5), y: y_pos+slant },
			{ x: x_pos+radius, y: y_pos+(slant*2) },
			{ x: x_pos, y: y_pos+(slant*2) },
			{ x: x_pos-(radius*0.5), y: y_pos+slant }
		], 
		{
			fill: this.c,
			stroke: 'black',  
            strokeWidth: 0.5,
			selectable: false
		}
	);
}

function createTriangle(x, y, x_pos, y_pos) {
	this.x = x;
	this.y = y;
	this.x_pos = x_pos;
	this.y_pos = y_pos;
	this.map = [];
	this.cds = [
		{ x: this.x_pos+radius*-0.5, y: this.y_pos },
		{ x: this.x_pos+radius*0.5, y: this.y_pos },
		{ x: this.x_pos, y: this.y_pos+slant }
	];
	if(this.x%2 == 1) {
		this.cds = [
			{ x: this.x_pos, y: this.y_pos },
			{ x: this.x_pos+radius*0.5, y: this.y_pos+slant },
			{ x: this.x_pos+radius*-0.5, y: this.y_pos+slant }
		];
	}
	this.tri = new fabric.Polygon(
		this.cds, 
		{
			fill: "rgba("+(128+Math.random()*64)+","+(128+Math.random()*64)+","+(128+Math.random()*64)+","+(0.25+Math.random()*0.75)+")",
			stroke: 'black',  
            strokeWidth: 0.5,
			selectable: false
		}
	);
}

function createMinigame(name, o1, o2) {
	this.name = name;
	this.o1 = o1;
	this.o2 = o2;
}