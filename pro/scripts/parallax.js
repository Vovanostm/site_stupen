var bg_img_n = 1;

var pos = {
  'x': 0,
  'y': 0
}
var ps = {
  'x': 50,
  'y': 50
}

var tEnab = false;
var inter;

// $(".m_menu").mousemove(function(e) {
//       // set up the element as a variable
//
//       var el = $(this);
//
//       // calculate the center
//       var _center = {
//         'x': Math.floor(parseInt(el.width()) / 2),
//         'y': Math.floor(parseInt(el.height()) / 2)
//       }
//
//        pos.x= (e.pageX - el.offset().left);
//        pos.y= (e.pageY - el.offset().top);
//
//       if (!tEnab)
//       {
//       	tEnab=true;
//       	inter = setInterval(clsr, 10);
//
//       }
//
//
//
//
//       // calculate the offset
//
//       // var _ps = {
//       // 	'x': ((_offset.x /_center.x)*100)/15+50,
//       // 	'y': 50+((_offset.y /_center.y)*100)/16
//       // }
//       // if (_ps.y > 100) _ps.y = 100;
//       // var _lg =
//       // {
//       // 	'x': (_ps.x-50)/2+35,
//       // 	'y': (_ps.y-50)/2+30
//       // }
//
//
//       //$("#bg_2").css({"background-position":_lg.x+"%"+_lg.y+"%"});
//       //$("#bg_3").css({"background-position":_ps.x+"%"+_ps.y+"%"});
//       // $("#logo").css({"top":_lg.y+"%"});
//       // $("#logo").css({"left":_lg.x+"%"});
//   });
//
//
//
// function clsr()
// {
// 	// alert("ff");
// 	var el = $("#mns");
// 	var _center = {
//         'x': Math.floor(parseInt(el.width()) / 2),
//         'y': Math.floor(parseInt(el.height()) / 2)
//       }
//       // print(ps.x);
//       console.log(ps.x,ps.y);
//       var _offset = {
//         'x': (pos.x - _center.x)/120+50,
//         'y': (pos.y - _center.y )/120+50
//       }
//       var lvals =
//       {
//       	'x': ps.x,
//         'y': ps.y
//       }
//       ps.x=ps.x+(_offset.x-ps.x)/70;
//       ps.y=ps.y+(_offset.y-ps.y)/70;
//
//       if ((Math.abs(ps.x-lvals.x)<0.02)&&(Math.abs(ps.y-lvals.y)<0.02))
//       {
//       	tEnab=false;
//       	clearInterval(inter);
//       }
//
//
//       // if (_ps.y > 100) _ps.y = 100;
//       var _lg =
//       {
//       	'x': (ps.x-50)*2+35,
//       	'y': (ps.y)*2+30
//       }
//
//       $("#bg_2").css({"background-position":_lg.x+"%"+_lg.y+"%"});
//       $("#bg_3").css({"background-position":ps.x+"%"+ps.y+"%"});
// }
//
// // function next_image()
// // {
// //   // bg_img_n++;
// //   // if (bg_img_n > 2) bg_img_n = 1;
// //   $("#bg_3").css({"background-image":"url(bg"+"2"+".jpg)"});
// // }
//
// // setInterval(next_image,3000);
// clsr();
$(window).scroll(function() {
  var tx = 50 - $('body')[0].getBoundingClientRect().top / 15;
  $('body').css({
    'background-position': '50%' + tx + '%'
  });
  tx = -tx;
  $('.block').css({
    'background-position': '50%' + tx * 2 + '%'
  });
  console.log(tx / 10);
});
