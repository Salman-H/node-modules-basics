/*
	JS object called rect;
	will be moved later to a module of its own
*/
var rect = {
	// object property
	perimeter: function (x, y) {
		return ( 2*(x+y) );
	},

	// object property
	area: function (x, y) {
		return (x*y);
	}
};

/*
	JS function called solveRect
*/
function solveRect(l,b) {
	console.log("Solving for rectangle with l = " + l + " and b = " + b);

	if (l < 0 || b < 0) {
		console.log("Rectangle dimensions should be greater than zero: l = " + l + ", and be = " + b);
	}
	else {
		console.log("The area of a rectangle of dimensions lenght = " + l + " and breadth = " + b + " is " + rect.area(l,b));
		console.log("The perimeter of a rectangle of dimensions lenght = " + l + " and breadth = " + b +
			" is " + rect.perimeter(l,b));	
	}
}

/*
 This code will be excuted using Node command in a terminal:
 node simplerect
*/
solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);