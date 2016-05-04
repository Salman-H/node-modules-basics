/*
	import node module rectangle-1-node-mod.js

	rect object is now being imported as a node module

	rect.area and rect.perimeter would result
	in calls to this node module
*/
var rect = require('./rectangle-1-node-mod');


/*
	JS function called solveRect
*/
function solveRect(l,b) {
	console.log("Solving for rectangle with l = " + l + " and b = " + b);

	if (l < 0 || b < 0) {
		console.log("Rectangle dimensions should be greater than zero: l = " + l + ", and be = " + b);
	}
	else {
		console.log("The area of a rectangle of dimensions lenght = " + l + " and breadth = " + b + 
			" is " + rect.area(l,b));
		console.log("The perimeter of a rectangle of dimensions lenght = " + l + " and breadth = " + b +
			" is " + rect.perimeter(l,b));	
	}
}

/*
 This code will be excuted using Node command in a terminal:
 node simplerect

 At the moment, the length and breadth arguments are hardcoded inside this node app,
 but we can employ an external node module, called yargs, to send these arguments
 from the command line.
*/
solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);