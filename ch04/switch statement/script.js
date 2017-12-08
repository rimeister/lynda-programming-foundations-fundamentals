var grade = "Premium";

/*
if ( grade === "Regular") {
     alert("It's $3.15");
}
if ( grade === "Premium") {
     alert("It's $3.35");
}
if ( grade === "Diesel") {
     alert("It's $3.47");
}
*/

// Switch statements -- very useful in situations where you have a range of set values to check against.
/* 
//My first shot at it
switch (grade) {
	
	case: "Regular" {
		alert("its reg");
	}
	break;

	case "Premium": alert("its prem");
	break;

	case "Diesel": alert("Its dies");
	break;

	default: alert("none of the above");

}
*/

switch (grade) {
	
	case "Regular":
		alert("its reg");
		break;

	case "Premium":
		alert("its prem");
		break;

	case "Diesel":
		alert("Its Diesel");
		break;

	default:
		alert("none of the above");

}

/* Because of "fallthrough", as I read in my pro JS book, we must add "break" to prevent it from falling through. */