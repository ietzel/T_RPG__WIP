function createObject(name, vars, methods) {
    this.name = "";
    this.vars = [];
    this.methods = [];
    if(name) {
        this.name = name;
    }
	if(vars) {
        this.vars = [];
    }
    if(methods) {
		this.methods = methods;
    }
}

object_types = ["boundary", "entity", "control"];


function createTimeline(a, b) {
	this.start = a;
	this.stop = a;
}

function createParam(name, type) {
    this.name = "";
    this.type = type;
    if(name) {
        this.name = name;
    }
}

function createVar(encap, name, type, val) {
    this.encap = encap_types[1];
	this.name = "";
	this.type = data_types[1];
    this.val = val;
    if(encap) {
        this.encap = encap;
    }
    if(name) {
        this.name = name;
    }
	
}
