
"use strict";


var hashes_list={};
var iframe = prj_frame;
function show_project(event)
{
	event.preventDefault();
	iframe.src=this.getAttribute('data-href');
	// console.log(iframe);
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
hashes_table_body.addEventListener('click',function(e){
	this.classList.remove('is-visiable');
})

function close_project()
{
	prj_div.classList.add("hid");
	all_prj.classList.remove("hid");
	document.getElementsByTagName("body")[0].style.overflow="auto";
}

prj_close.addEventListener("click",close_project);

var prj_buttons = document.querySelectorAll(".prj_button");

for (var i=0; i<prj_buttons.length; i++){
	prj_buttons[i].addEventListener("click",show_project);
	prj_buttons[i].hashes = prj_buttons[i].querySelectorAll('.hashtag-item');
	for (var j=0; j<prj_buttons[i].hashes.length; j++){
		// console.log(prj_buttons[i].hashes[j]);
		var hash_name = prj_buttons[i].hashes[j].getAttribute('data-hash'),
		    hash_project_name = prj_buttons[i].hashes[j].getAttribute('data-project'),
						hash_project_src = prj_buttons[i].getAttribute('data-href');
		if (hash_name in hashes_list){
			var hashes_list_item = document.createElement('a');
			hashes_list_item.classList.add('hash-table-item');
			hashes_list_item.innerHTML = hash_project_name;
			hashes_list_item.href = hash_project_src;
			hashes_list[hash_name].appendChild(hashes_list_item);
		}
		else{
			hashes_list[hash_name]=document.createElement('div');
			var hashes_list_item = document.createElement('a');
			hashes_list_item.classList.add('hash-table-item');
			hashes_list_item.innerHTML = hash_project_name;
			hashes_list_item.href = hash_project_src;
			hashes_list[hash_name].appendChild(hashes_list_item);
		}
		prj_buttons[i].hashes[j].addEventListener('click',open_hash_nav)}
	}

var hashes_menu_items ={ };
	var hashes_menu = document.createElement('div');
	hashes_menu.classList.add('hash-menu');
	for (var key in hashes_list){
		hashes_menu_items[key] = document.createElement('span');
		hashes_menu_items[key].classList.add('hash-menu-item');
		hashes_menu_items[key].innerHTML=key;
		hashes_menu_items[key].setAttribute('data-hash',key);
		hashes_menu.appendChild(hashes_menu_items[key]);
		hashes_menu_items[key].addEventListener('click', open_hash_nav);
	}
function open_hash_nav(event){
	event.stopImmediatePropagation();
	if(hashes_table.now_open)hashes_table.removeChild(hashes_table.now_open);
	if(hashes_table.querySelector('.is-active'))hashes_table.querySelector('.is-active').classList.remove('is-active');
	hashes_table_body.classList.add('is-visiable');
	var hash_name = this.getAttribute('data-hash');
		hashes_table.appendChild(hashes_menu);
		hashes_table.now_open = hashes_list[hash_name];
		hashes_table.appendChild(hashes_list[hash_name]);
		hashes_menu_items[hash_name].classList.add('is-active');
}

var prjs = document.querySelectorAll('.prj');
for (var i = 0; i<prjs.length; i++){
	var blockWidth = prjs[i].clientWidth;
	prjs[i].style.height = blockWidth * 1.4 + "px";
}
var pr_names = document.querySelectorAll('.prj h2');
for (var i = 0; i<pr_names.length; i++){
	// console.log(pr_names[i].innerHTML.length);
	pr_names[i].style.top=(pr_names[i].innerHTML.length>18?30:40)+"%";
	// console.log(pr_names[i].style.top);

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
