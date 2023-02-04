var running = false;
const scales = ["(local)", "(geographic)", "(planar)"];
var scale = 1;

document.getElementById("play").addEventListener("click", function() {
	if(running) {
		running = false;
		document.getElementById("play").innerHTML = "play";
	} else {
		running = true;
		document.getElementById("play").innerHTML = "pause";
		characters[0][0] = new createCharacter(
			document.getElementById("character_name").value, 
			parseFloat(document.getElementById("ethics").value).toFixed(1), 
			parseFloat(document.getElementById("morality").value).toFixed(1), 
			document.getElementById("str").value, 
			document.getElementById("dex").value, 
			document.getElementById("con").value, 
			document.getElementById("int").value, 
			document.getElementById("wis").value, 
			document.getElementById("cha").value, 
			document.getElementById("celestial").checked || document.getElementById("fiendish").checked,
			document.getElementById("h_d").checked,
			document.getElementById("lycanthrope").checked,
			document.getElementById("giant").checked,
			document.getElementById("advanced").checked
		);
	}	
});

function cb_limit() {
	let total = 0, limit = 10;
	for(var i=0; i < document.nC.skill.length; i++){
		if(document.nC.skill[i].checked){
			total++;
		}
		if(total > limit){
			alert("10 class skills must be selected") 
			document.nC.skill[i].checked = false ;
			return false;
		}
	}
}

function randomInt(a, b) {
	return (Math.random()*(b-a))+a;
}

function roll(n, s) {
	let total = 0;
	for(var i=0; i<n; i++) {
		total += randomInt(1, s);
	}
	return total;
}

var canvas = new fabric.Canvas("canvas");

const radius = 7, slant = 6;
const width = 24, height = 21;
let clickX = canvas.width, clickY = canvas.height;
let partyX = Math.round(width/2, 0), partyY = Math.round(height/2, 0);
let characterX = partyX, characterY = partyY, groupX = partyX, groupY = partyY;

let noiseScale = 1/150
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
	this.shapechange;
	this.abilities = [10, 10, 10, 11, 11, 11]; //str, dex, con, int, wis, cha
	this.templates = [false, false, false, false, false];
	this.speeds = [30, 0, 0, 0, 0, 0]; //land, climb, fly, swim, burrow;
	this.x = 0;
	this.y = 0;
	this.bonuses = [0, 0]; //nat armor, initiative
	this.class_skill_limit = 10;
	this.class_skills = [];
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
		this.abilities[0] = dex;
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
		this.templates[0] = true;
	}
	if(h_d) {
		this.templates[1] = true;
		this.abilities[0] += 8;
		this.abilities[2] += 6;
		this.abilities[3] += 2;
		this.abilities[5] += 2;
		this.bonuses += 4;
		this.speeds[2] = this.speeds[0]*2; 
	}
	if(lycanthrope) {
		this.shapechange = shapechange;
		this.templates[3] = true;
		this.abilities[0] += 2+((this.shapechange+1)*2);
		this.abilities[1] -= this.shapechange*2;
		this.abilities[2] += 2;
		this.abilities[4] += 2;
		this.abilities[5] -= 2;
		this.bonuses[0] += 2+this.shapechange;
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

function createType(name, HD_type, skills_p_l, BAB, [fort, ref, will], [llv, dv, scent], []) {
	this.name = name;
	this.HD_type = 8;
	this.skills_p_l = skills_p_l; 
	this.BAB = BAB;
	this.saves = [fort, ref, will]; 
	this.senses = [llv, dv, scent];
	this.class_skills = [];
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
	this.ranks = 0;
	this.class_skill = false;
}

function createEquipment(name, mod, target, value, weight, [attack]) {
	this.name = name;
	this.mod = mod;
	this.target = target;
	this.value = value, 
	this.weight = weight;
	this.abilities = [attack];	
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
			//borderColor: 'black',
			//cornerColor: 'black',
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
			//borderColor: 'black',
			//cornerColor: 'black',
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
			//borderColor: 'black',
			//cornerColor: 'black',
			selectable: false
		}
	);
}