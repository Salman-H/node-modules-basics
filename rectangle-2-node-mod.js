/*
	A node module that exports two properties: 
	perimeter and area

	This new rectangle node module exports a function which takes
	3 parameters; lenght, breadth, and a callback function
*/
module.exports = function(x, y, callback) {
	try {
		if (x < 0 || y < 0) {
			// the Error function takes this message string as a parameter
			throw new Error("Rectangle dimensions should be greater than zero: l = " + 
				x + ", and b = " + y);
		}
		else 
			/*
				The callback function takes 2 parameters:

				1st parameter: 
					will always be the error message by convention; here, since there is no
					 error, it is set to null
				2nd parameter: 
					A JavaScript object that has two properties; parimeter and area
			*/

			/*
				VERY IMPORTANT:
				this is a function call. The program execution will execute this call and
				continue on; program execution will not wait for internal functions inside
				the 2nd parameter of the call to finish executing! Courtesy of Clouser support,
				these internal functions will continue to have access to x and y and continue
				to execute (as long as they have to) on the fly even after the external function
				has returned!
			*/
			callback(null, {
							/* 
								NOTICE: that the following internal functions don't take
										any x and y arguments!
								the x and y that are being used to calculate the perimeter
								and area (to supply back to the callback function)
							 	are the x and y that came in as arguments for the main function.
							 	Since JavaScript supports Closures, the following internal functions
							 	for calculating perimeter and area, have access to these external
							 	paramters; x and y. So that even if x and y have been passed back
							 	by the external funtion, and the external function has exited, 
							 	x and y would still be accessable to these internal function states.
							*/

							/*
								once these internal functions finish processing (usually long after
								the external function has returned), they will return the perimeter
								and area, and at that point, the 2nd paramter (above) in the call to 
								the callback function will become available and the call would initiate
							*/
								// object property
								perimeter: function () {
									return ( 2*(x+y) );
								},
								// object property
								area: function () {
									return (x*y);
								}
							}
					);
	}
	catch (Error) {
		/* 
			the Error is supplied back to the node app and the remaining parameter 
			(JS rectangle object), in this case, is obviously not valid anymore with
			negative length and breadth and, is therefore, set to null 
		*/
		callback(Error, null);
	}
};

