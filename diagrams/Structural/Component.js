function createClass(name, vars, methods) {
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

data_types = ["int", "string"];

arrow_types = [
	"binding",				
	"substitution",	
	"bidirectional",			
	"flow",
	"containment",	
	"realization",
	"usage",
	"directional",	
	"aggregation",		
	"abstraction",			
	"composition",	
	"inheritance",
	"dependency",
	"association"
];

encap_types = ["private", "protected", "public"];

assoc_types = [
	"unary (recursion/cardinality)", 
	"binary (iteration/connectivity): 'o:o', 'o:M', 'M:N'"
]

inher_types = [
	"Single", 
	"Multilevel", 
	"Multiple", 
	"Multipath", 
	"Hierarchical", 
	"Hybrid"
];

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

function createMethod(encap, name, params, type) {
    this.encap = encap_types[1];
	this.name = "";
	this.params = [];
	this.type = type;
    if(encap) {
        this.encap = encap;
    }
	if(name) {
        this.name = name;
    }
	if(params) {
        this.params = params;
    }
}

function createParam(name, type) {
    this.name = "";
    this.type = type;
    if(name) {
        this.name = name;
    }
}


