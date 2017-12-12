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

var keyPhraseEle = document.getElementById('keyPhrase');
var phrase = keyPhraseEle.innerHTML;
var slicedWord;

document.getElementById('findGroovy').addEventListener('click', function(event){
	event.preventDefault();

	if (phrase.indexOf('groovy') > -1) {
		alert('Groovy can be found at index ' + phrase.indexOf('groovy'));
		slicedWord = phrase.slice(10,17);

	} else {
		alert('"' + slicedWord + '" has been removed from the phrase');
	}

	phrase = phrase.replace(slicedWord,'');
	keyPhraseEle.innerHTML = phrase;

});

document.getElementById('regBtn').addEventListener('click', function(event){
	event.preventDefault();

	var isGroove = /groovy/;

	if ( isGroove.test(phrase) ) {
		alert( 'RegExp results: Groovy can be found at index ' + phrase.indexOf('groovy') );
	} else {
		alert( '"Groovy" has been removed from the phrase' );
	}

});