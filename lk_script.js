window.onload = function(){
	// When the user scrolls the page, execute myFunction 
	window.onscroll = function() {myFunction()};

	// Get the navbar
	var navbar = document.getElementById("navbar");

	// Get the offset position of the navbar
	var sticky = navbar.offsetTop;

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
	  if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky")
	  } else {
	    navbar.classList.remove("sticky");
	  }
	}

	// Get all buttons with class="btn" inside the container
	var segments = navbar.getElementsByClassName("nav-item");

	// Loop through the buttons and add the active class to the current/clicked button
	for (var i = 0; i < segments.length; i++) {
	  segments[i].addEventListener("click", function() {
	    var current = document.getElementsByClassName("active");
	    current[0].className = current[0].className.replace(" active", "");
	    this.className += " active";
	  });
	}

	
};