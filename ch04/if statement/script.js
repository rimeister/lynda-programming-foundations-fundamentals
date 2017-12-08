var a = 5;
var b = 10;

if ( a < b ) {
   alert("Yes, a is less than b");
}

if ( a == b ) {
   alert("Yes, a is equal to b");
}

// The === operator, known as the "strict equality operator", is not available in most C-based languages

if ( 1 == "1") {
	alert("These are loosely equal.");
}

if ( 1 !== "1") {
	alert("These are not exactly equal.");
}

// Can be a good habit to use the triple equals sign.

// In C-Based languages, you use the && for AND. You use the double pipes || for OR)

if ( 1 < 2 && 2 < 3) {
	alert("Both conditions are true");
}

// You can also put the conditions in parantheses for readability.
if ( (1 < 2) && (2 < 3) ) {
	alert("Both of these are also true.");
}

//