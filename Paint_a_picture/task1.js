//function for saving the clicked color
//function start(){
	var color;
	document.getElementById("color-1").onclick  = function(){
		color = "red";
	}
	document.getElementById("color-2").onclick  = function(){
		color = "green";
	}
	document.getElementById("color-3").onclick  = function(){
		color = "black";
	}
	document.getElementById("color-4").onclick  = function(){
		color = "blue";
	}
//}
//function colorthem(color){//function for coloring
	document.getElementById("Image").onclick = function(){
		//alert(color);
		this.style.background = color;
	}
	document.getElementById("grass").onclick = function(){
		//alert(color);
		this.style.background = color;
	}
	document.getElementById("sun").onclick = function(){
		//alert(color);
		this.style.background = color;
	}
	document.getElementById("building").onclick = function(){
		this.style.background = color;
	}
	document.getElementById("window1").onclick = function(){
		this.style.background = color;
	}
	document.getElementById("window2").onclick = function(){
		this.style.background = color;
	}
	document.getElementById("window3").onclick = function(){
		this.style.background = color;
	}
	document.getElementById("window4").onclick = function(){
		this.style.background = color;
	}
	document.getElementById("window5").onclick = function(){
		this.style.background = color;
	}
	document.getElementById("window6").onclick = function(){
		this.style.background = color;
	}
	document.getElementById("door").onclick = function(){
		this.style.background = color;
	}
//}
