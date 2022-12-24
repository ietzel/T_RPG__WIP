var systems = [];

var names = [
	'InteractionOverview',
	'Sequence',
	'Activity',
	'UseCase',
	'Class',
	'Component',
	'CompositeStructure',
	'Object'
];

var sequenceLabels = [
	'<<actor>>',
	'<<boundary>>',
	'<<control>>',
	'<<entity>>',
];

var classLabels = [
	'Name \n\n Attributes: \n\n Methods: \n\n',
	'instance: Class'
];

document.getElementById("create System").addEventListener("click", function() {
    systems.push(new createSystem(document.getElementById("system").value));
	document.getElementById("choose System").options[0].innerHTML = document.getElementById("system").value;
	play(chords[Math.ceil(Math.random()*chords.length)-1]);
});

document.getElementById("create Diagram").addEventListener("click", function() {
	systems[systems.length-1].diagrams.push(
		new createDiagram(document.getElementById("new Diagram").selectedIndex)
	);
	play(chords[Math.ceil(Math.random()*chords.length)-1]);
});

document.getElementById("create Category").addEventListener("click", function() {
	systems[systems.length-1].diagrams[systems[systems.length-1].diagrams.length-1].categories.push(
		new createCategory(document.getElementById("new Category").options[0].value)
	);
	play(chords[Math.ceil(Math.random()*chords.length)-1]);
});

document.getElementById("negotiate/profiteer").addEventListener("click", function() {
	negotiate_profiteer();
});