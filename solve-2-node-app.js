/*
	v2 handles callbacks and errors
*/

/*
	import node module rectangle-2-node-mod.js

	rect object is now being imported as a node module

	rect.area and rect.perimeter would result
	in calls to this node module
*/
var rect = require('./rectangle-2-node-mod');


/*
	JS function called solveRect
*/
function solveRect(l,b) {
	console.log("Solving for rectangle with l = " + l + " and b = " + b);

	/*
		In the following call to the rectangle-2 node module, 
		the third paramter is an entire funtion itself (known as the callback function) which will 
		be called back from the node module (after it has already returned the following main call) 
		once the internal functions inside it finish processing whatever. 
		This ensures that this node app will continue its execution after the following 
		node module call, without having to wait for the aformentioned internal processing to 
		finish first.
	*/
	rect(l, b, 
		function(err, rectangle) {
			if (err) {
				console.log(err);
			}
			// else part executes when no error is returned by the node module
			else {
				/* rectangle.area is a call to the area property function of the 
					JS rectangle object that came in
				*/
				console.log("The area of a rectangle of dimensions lenght = " + 
					l + " and breadth = " + b + " is " + rectangle.area());
				console.log("The perimeter of a rectangle of dimensions lenght = " + 
					l + " and breadth = " + b +" is " + rectangle.perimeter());	
			}
		}); 
	};

/*
 This code will be excuted using Node command in a terminal:
 node simplerect

 At the moment, the length and breadth arguments are hardcoded inside this node app,
 but we can employ an external node module, called yargs, to send these arguments
 from the command line.
*/
solveRect(2,4);
//solveRect(3,5);
//solveRect(-3,5);