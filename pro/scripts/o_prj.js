
"use strict";

function show_project(event)
{
	event.preventDefault();
	prj_frame.src=this.href;
	prj_div.classList.remove("hid");
	all_prj.classList.add("hid");
}

function close_project()
{
	prj_div.classList.add("hid");
	all_prj.classList.remove("hid");
}

prj_close.addEventListener("click",close_project);

var prj_buttons = document.getElementsByClassName("prj_button");

for (var i=0; i<prj_buttons.length; i++){
	prj_buttons[i].addEventListener("click",show_project);
}
