var canvas = new fabric.Canvas("systemCanvas");

function createSystem(name) {
    this.name = "";
    this.diagrams = [];
    if(name) {
        this.name = name;
    }
}

function createDiagram(name) {
    this.name = "";
    this.categories = [];
    if(name) {
        this.name = name;
    }
}

function createCategory(text) {
    console.log(text);
    var textbox = new fabric.Textbox(text, { 
		backgroundColor: "rgb(256, 256, 256)",
		fontSize: 9,
		fontFamily: 'sans-serif',
        fill: "rgb(0, 0, 0)",
        //fontStyle: "oblique", 
	});
    canvas.add(textbox);
}