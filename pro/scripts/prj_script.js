"use strict";
var imgs = document.getElementsByTagName("img");
var array_img = [];

function ar_find(_array, _item){
  var _index = -1;
  for (var i = 0; i < _array.length; i++){
    console.log(_item, _array[i]);
    if (_item == 'url("'+_array[i]+'")') _index = i;
  }
  return(_index);
}

function next_img(){
  var _img = ar_find(array_img, gallery.style.backgroundImage);
  console.log(_img);
  _img++;
  if (_img >= array_img.length) _img=0;
  gallery.style.backgroundImage='url("'+array_img[_img]+'")';
}

function close_glr(){
  ovf_gallery.classList.add("hided");
  var sections = document.getElementsByTagName("section");
  for (var i = 0; i < sections.length; i++){
    sections[i].classList.remove("blured");
  }
}

function open_full(){
  this.classList.toggle("full_scr");
  ovf_gallery.classList.remove("hided");
  var sections = document.getElementsByTagName("section");
  for (var i = 0; i < sections.length; i++){
    sections[i].classList.add("blured");
  }
  gallery.style.backgroundImage='url("'+this.getAttribute("src")+'")';
  gallery.addEventListener("click", next_img);
  cls_gallery.addEventListener("click", close_glr);
}

for (var i = 0; i < imgs.length; i++){
  imgs[i].addEventListener("click",open_full);
  array_img.push(imgs[i].getAttribute("src"));
}


//галлерея
