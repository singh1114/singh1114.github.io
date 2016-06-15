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
document.getElementById("color-5").onclick  = function(){
	color = "yellow";
}
var iDiv = document.createElement('div');
iDiv.id = 'block';
iDiv.className = 'block';
document.getElementsByTagName('body')[0].appendChild(iDiv);
var a = [];
for(var j=1;j<=35;j++){
	for(var i=1;i<=30;i++){
		a[i] = document.createElement('div');
		a[i].className = "blah"+j+i;
		a[i].id = "blah"+j+i;
		document.getElementById('block').appendChild(a[i]);
		document.getElementById("blah"+j+i).onmouseover = function(){
			this.style.background = color;
	}
	}
}
document.getElementById("text_change").onclick = function(){
	var x = prompt("Enter your name");
	this.innerHTML = "MY NAME IS "+x;
}
//document.getElementById('blah1').style.backgroundColor = "red";
//document.getElementById('blah1').style.width = 100+"px";
//document.getElementById('blah1').style.height = 100+"px";
//document.getElementById('blah1').style.position = "relative";
