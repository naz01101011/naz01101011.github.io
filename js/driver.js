document.body.addEventListener("load", theDriver());

function theDriver() {
	
	function makeMenu() {
		var button = document.createElement("button");
		button.innerHTML = "Project Diagram";

		var mymenu = document.getElementsByClassName("menu");
		mymenu.appendChild(button);

		button.addEventListener ("click", function() {
		  alert("did something");
		});
	}

	//Calling the functions
	makeMenu();
}