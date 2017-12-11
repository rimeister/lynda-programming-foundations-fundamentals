function addTwoNumbers(a,b) {
	var result = a + b;
	return result;
}

var summedVal = addTwoNumbers(5,10);

alert(summedVal);

/* Interesting distinction:
	"Parameters" refers to the variable names in the function declaration -- i.e.,
	(a,b).
	"Arguments" refers to the the values you pass into the function -- e.g., 
	(5,10).
*/

/*

	Interesting way of thinking:
	Arguments pass information INTO a function.
	"Return" passes information back OUT of a function.

	Return exits the function.

*/

/*
	You can split your code up into multiple files.
	In JS, you can just import them using script tags, but I guess this is where "browserify" require statements could com in.
*/