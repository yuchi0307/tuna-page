var menuBtn = document.getElementById('menuBtn');
var sideNav = document.getElementById('sideNav');
var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var line3 = document.querySelector('.line3');

// menuBtn.addEventListener('click',()=>{
// 	console.log("menuBtn");
// })


sideNav.style.right = "-250px";
line1.style.background = "#291F1E";
line2.style.background = "#291F1E";
line3.style.background = "#291F1E";

menuBtn.onclick = function(){
	if(sideNav.style.right == "-250px"){
		// console.log("success");
		sideNav.style.right = "0";
		line1.style.background = "white";
		line2.style.background = "white";
		line3.style.background = "white";

	}
	else{
		sideNav.style.right = "-250px";
		line1.style.background = "#291F1E";
		line2.style.background = "#291F1E";
		line3.style.background = "#291F1E";
	}
}

/* 
  github cferdinandi
 /smooth-scroll
 */

var scroll = new SmoothScroll('a[href*="#"]',{
		speed: 1000,
		speedAsDuration: true
});
