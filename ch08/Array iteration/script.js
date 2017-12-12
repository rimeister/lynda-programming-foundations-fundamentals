var myArray = [500,500,500,500,500,120,800];

var total = 0;

function sumCollection(valCollection) {

	if ( total < 1 ) {

		for ( var i = 0 ; i < valCollection.length ; i++ ) {
		    // add the current element to the total	
		    total = total + valCollection[i];
		}

	} 

} 


// after we're done with the loop
document.getElementById('seeTotalVal').addEventListener('click', function(event){
	event.preventDefault();
	alert(total);
});

document.getElementById('sumBtn').addEventListener('click', function(event){
	event.preventDefault();
	sumCollection(myArray);
	alert("The numbers have been added together");
});

