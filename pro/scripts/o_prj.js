"use strict";


var hashes_list = {};
var iframe = prj_frame;

function show_project(event) {
    event.preventDefault();
    iframe.src = this.getAttribute('data-href');
    // console.log(iframe);
    iframe.onload = function () {
        prj_div.classList.remove("hid");
        all_prj.classList.add("hid");
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        var imgs = iframe.contentWindow.document.getElementsByTagName("img");
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener("click", function () {
                prj_close.style.display = "none";
            });
        }
        var cls_gal = iframe.contentWindow.document.getElementById('cls_gallery');
        cls_gal.addEventListener("click", function () {
            prj_close.style.display = "block"
        });
    }
}
//hashes_table_body.addEventListener('click',function(e){
//	this.classList.remove('is-visiable');
//})

function close_project() {
    prj_div.classList.add("hid");
    all_prj.classList.remove("hid");
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}

prj_close.addEventListener("click", close_project);

var prjs = document.querySelectorAll('.prj');
for (var i = 0; i < prjs.length; i++) {
    var blockWidth = prjs[i].clientWidth;
    prjs[i].style.height = blockWidth * 1.4 + "px";
}

var prj_buttons = document.querySelectorAll(".prj_button");

for (var i = 0; i < prj_buttons.length; i++) {
    prj_buttons[i].addEventListener("click", show_project);
    prj_buttons[i].hashes = prj_buttons[i].querySelectorAll('.hashtag-item');
    prj_buttons[i].hashList = [];
    for (var j = 0; j < prj_buttons[i].hashes.length; j++) {
        var hash_name = prj_buttons[i].hashes[j].getAttribute('data-hash'),
            hash_project_name = prj_buttons[i].hashes[j].getAttribute('data-project'),
            hash_project_src = prj_buttons[i].getAttribute('data-href');
        prj_buttons[i].hashList.push(hash_name);
        prj_buttons[i].hashes[j].addEventListener('click', addHashItemToFilter)
    }
}

var hashes_menu_items = {};
var hashes_menu = document.createElement('div');
hashes_menu.classList.add('hash-menu');
for (var key in hashes_list) {
    hashes_menu_items[key] = document.createElement('span');
    hashes_menu_items[key].classList.add('hash-menu-item');
    hashes_menu_items[key].innerHTML = key;
    hashes_menu_items[key].setAttribute('data-hash', key);
    hashes_menu.appendChild(hashes_menu_items[key]);
    hashes_menu_items[key].addEventListener('click', filterByHashTag);
}
var filterHashesList = [];

function filterByHashTag() {
    for (var i = 0; i < prj_buttons.length; i++) {
        var flag = 1;
        for (var j = 0; j < filterHashesList.length; j++)
            if (prj_buttons[i].hashList.indexOf(filterHashesList[j]) < 0) flag = 0;
        if (!flag) prj_buttons[i].style.display = 'none';
        else prj_buttons[i].style.display = "inline-block";
    }
}

function addHashItemToFilter(e) {
    e.stopPropagation();
    var name = e.currentTarget.getAttribute('data-hash')
    if (filterHashesList.indexOf(name) < 0) {
        var hashItem = document.createElement('div');
        hashItem.classList.add('hashFilter__item');
        hashItem.innerHTML = '#'+name;
        hashItem.closeButton = document.createElement('span');
        hashItem.closeButton.classList.add('hashFilter__close');
        hashItem.closeButton.innerHTML = "×";
        hashItem.closeButton.setAttribute('data-close', name);
        hashItem.appendChild(hashItem.closeButton);
        hashItem.closeButton.addEventListener('click', removeHashItemFromFilter);
        hashFilter.appendChild(hashItem);
        if (filterHashesList.indexOf(name) < 0) {
            filterHashesList.push(name);
        }
        filterByHashTag();
    }
};

function removeHashItemFromFilter(e) {
    e.stopPropagation();
    var name = e.currentTarget.getAttribute('data-close');
    e.currentTarget.parentNode.remove();
    filterHashesList.splice(filterHashesList.indexOf(name), 1);
   

    filterByHashTag();

}



var pr_names = document.querySelectorAll('.prj h2');
for (var i = 0; i < pr_names.length; i++) {
    // console.log(pr_names[i].innerHTML.length);
    pr_names[i].style.top = (pr_names[i].innerHTML.length > 18 ? 30 : 40) + "%";
    // console.log(pr_names[i].style.top);

    // pr_names[i].style.fontSize = 400/pr_names[i].innerHTML.length + "px";
}
// var paragrpahs = document.querySelectorAll(".prj p")
// for (var i = 0; i<paragrpahs.length; i++){
//  var tmp = paragrpahs[i].innerHTML;
//  if (tmp.length>200){
//    // tmp = tmp.substr(0, (200 - 3)) + '...';
//    paragrpahs[i].innerHTML = tmp;
//  }
// }