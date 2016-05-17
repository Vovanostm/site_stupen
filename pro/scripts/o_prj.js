
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
