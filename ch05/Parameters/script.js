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
