// Test to see if entered value is a number
document.getElementById('testBtn').addEventListener('click', function(event){
	event.preventDefault();

	var inputVal = document.getElementById('queryNum').value;

	if ( isNaN(inputVal) ) {
		alert("The value is not a number");
	} else {
		alert("The value is a number");
	}
})