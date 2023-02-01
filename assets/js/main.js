let nav_btn = document.getElementById("nav_btn");
let close_btn = document.getElementById("close_btn");
let navigation_menu_mobile = document.getElementById("navigation_menu_mobile");

nav_btn.onclick = function(){
	navigation_menu_mobile.style.right = "0";
	close_btn.style.transform = "rotate(90deg)";
}
close_btn.onclick = function(){
	navigation_menu_mobile.style.right = "-100%";
	close_btn.style.transform = "rotate(0deg)";
}

console.log(nav_btn);