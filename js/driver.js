function theDriver() {
	function makeMenu() {
		var button = document.createElement("button");
		button.innerHTML = "Project Diagram";

		var menu = document.getElementsByClassName("menu");
		menu.appendChild(button);

		button.addEventListener ("click", function() {
		  alert("did something");
		});
	}

	//Calling the functions
	makeMenu();
}