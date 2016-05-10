document.body.addEventListener("load", theDriver());

function theDriver() {
	
	function makeMenu() {
		var button = document.createElement("button");
		button.innerHTML = "Project Diagram";

		var mymenu = document.getElementsByClassName("menu")[0];
		mymenu.appendChild(button);

		button.addEventListener ("click", makeDiagram());
	}
	
	function makeDiagram() {
		document.getElementsByClassName("main-content")[0].innerHTML = "Aici vine diagrama";
	}

	//Calling the functions
	makeMenu();
}