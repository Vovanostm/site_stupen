
"use strict";

var iframe = prj_frame;
function show_project(event)
{
	event.preventDefault();
	iframe.src=this.href;
	console.log(iframe);
	iframe.onload = function(){
		prj_div.classList.remove("hid");
		all_prj.classList.add("hid");
		document.getElementsByTagName("body")[0].style.overflow="hidden";
		var imgs=iframe.contentWindow.document.getElementsByTagName("img");
		for (var i = 0; i< imgs.length; i++){
			imgs[i].addEventListener("click",function(){prj_close.style.display="none";});
		}
		var cls_gal=iframe.contentWindow.document.getElementById('cls_gallery');
		cls_gal.addEventListener("click",function(){prj_close.style.display="block"});
	}
}

function close_project()
{
	prj_div.classList.add("hid");
	all_prj.classList.remove("hid");
	document.getElementsByTagName("body")[0].style.overflow="auto";
}

prj_close.addEventListener("click",close_project);

var prj_buttons = document.getElementsByClassName("prj_button");

for (var i=0; i<prj_buttons.length; i++){
	prj_buttons[i].addEventListener("click",show_project);
}

var prjs = document.querySelectorAll('.prj');
for (var i = 0; i<prjs.length; i++){
	var blockWidth = prjs[i].clientWidth;
	prjs[i].style.height = blockWidth * 1.3 + "px";
}
var pr_names = document.querySelectorAll('.prj h2');
for (var i = 0; i<pr_names.length; i++){
	console.log(pr_names[i].innerHTML.length);
	pr_names[i].style.top=(pr_names[i].innerHTML.length>18?30:40)+"%";
	console.log(pr_names[i].style.top);

	// pr_names[i].style.fontSize = 400/pr_names[i].innerHTML.length + "px";
}
var paragrpahs = document.querySelectorAll(".prj p")
for (var i = 0; i<paragrpahs.length; i++){
 var tmp = paragrpahs[i].innerHTML;
 if (tmp.length>200){
   tmp = tmp.substr(0, (200 - 3)) + '...';
   paragrpahs[i].innerHTML = tmp;
 }
}
