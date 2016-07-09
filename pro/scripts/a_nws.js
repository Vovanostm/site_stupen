
//81%

var pst = 0;



function update_news(){

$(".n_w").each(function(index, el) {
	if ($(this).children(".imgs").children("img").length > 6)
		$(this).children(".imgs").children("img").each(
		function(index, el) {
			if (document.body.clientWidth > document.body.clientHeight)
	 			$(this).css({height:"45%"});
	 		else
	 			$(this).css({width:"80%"});
		});
	else if ($(this).children(".imgs").children("img").length > 1)
		$(this).children(".imgs").children("img").each(function(index, el) {
	 	$(this).css({height:"45%"});});
	else
		$(this).children(".imgs").children("img").each(function(index, el) {
	 	$(this).css({height:"75%"});});
});
}


var _top = $('#b_n').height()+150;
$("#all_news").css({top: _top});

$('#a_n')
	.click(function(event) {
		// console.log(pst);
		var _top = $('#b_n').height()+150;
		if (pst == 0)
		{
			a_n_b.innerHTML='<polyline stroke="black" fill="none" stroke-width="2" points="4,4 16,16 28,4"></polyline>'
			a_n_t.innerHTML='Скрыть новости';
			// alert($('#b_n').height());
				$('#a_n I').append('Cвернуть');
				$("#all_news").animate({top: '50px'},100 );

				$("#all_news").css({height: "100%"});

				$('#a_n I').css({visibility: 'visible'});

				// $("#all_news").addClass("hide");
				$("#t_a_n").animate({opacity: 1}, 500 );
				$("#t_a_n").css({display:"block"});
				// $("#all_news").css({cursor:"pointer"});
				// $(".ar").css({'background-image': 'url(buttons/png/down-arrow.png)'});
				pst=1;
		}
		else
		{
			a_n_b.innerHTML='<polyline stroke="black" fill="none" stroke-width="2" points="4,16 16,4 28,16"></polyline>'
			a_n_t.innerHTML='Все новости';
			$('#a_n I').empty();
			$("#all_news").animate({top: _top},100 );
			$("#t_a_n").animate({opacity: 0}, 500 );
			$("#t_a_n").animate({display:"none"}, 500 );
			// $("#all_news").css({cursor:"auto"});
			pst=0;
		}
	})
	// .mouseover(function(event) {
	// 	if (!pst) $(".ar").addClass("ar_up");
	// })
	// .mouseleave(function(event) {
	// 	if (!pst) $(".ar").removeClass("ar_up");
	// });





var d_t = [];
var n_t = [];
var opened = false;

function get_all_nws()
{
	if (!opened)
	$.ajax({
    type: "POST",
    url: "work.php",
    data: "name=" + "all_news",
    dataType: "html",
    success: function(data){


    //alert(data);

	var news_dates = data.match(/<time .*?>.*?<\/time>/ig),
		news_heads = data.match(/<H2 .*?>.*?<\/H2>/ig);
	var gg="";
	for(var i=0; i < news_dates.length; i++)
	{
		//alert($(news_dates[i]).text());
		// for(var i=0; i < news_heads.length; i++)
		// 	alert($(news_heads[i]).text());
		k = news_dates.length -i;
		// gg +='<P><a class ="n_a" href ="http://127.0.0.1/site_stup/pro/?name=news&num='+k+'">';
		gg +='<P><a class ="n_a" onClick="show_nws('+k+')">';
		gg +=$(news_dates[i]).text();
		gg +=". ";
		gg +=$(news_heads[i]).text();
		gg +='</a></P>';
	};
	$("#t_a_n").append(gg);
	opened=true;
}
});
}


function show_nws(new_number)
{
	$.scrollTo("#newss", 0, {axis:'y', margin:'false' });
	$("#fl_nw").removeClass("ovf_hid").addClass("ovf_vis");
	$("#mns").css({overflow:"hidden"});
	close_nws.classList.toggle("cl_hided");
	close_nws.classList.toggle("cl_visbl");
	var out_nw;
	out_nw=num_news-x;
	$.ajax({
	    type: "POST",
	    url: "work.php",
	    data: "name=" + "ful_nw"+"&nws="+new_number,
	    dataType: "html",
	    success: function(data){


	    	var _url = "?name=news&num="+new_number;
			if(_url != window.location.search){
            	window.history.pushState(null, null, _url);
        	}

	    	$('#fl_nw').append('<DIV id = "full_new_img" class ="ovf img_ovf_hid"><div id="close_imgs" class="close_btn cl_hided"></div><div id="fl_nw_img" class="fl_img"></div></DIV>');
        close_imgs.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewbox="0 0 100 100"><line stroke="#f4f4f4" stroke-width="3" x1="5" y1="5" x2="95" y2="95"></line><line stroke="#f4f4f4" stroke-width="3" x1="5" y1="95" x2="95" y2="5"></line></svg>'
				$("#close_imgs").click(function(event)
			{
				$("#full_new_img").removeClass("img_ovf_vis").addClass("img_ovf_hid");
				$('#fl_nw_img').empty();
				$("#full_new_img").removeClass("img_ovf_vis").addClass("img_ovf_hid");
				$("#fl_nw").css({overflow:"auto"});
				$("#close_imgs").addClass("cl_hided").removeClass("cl_visbl");
				$("#fl_nw_img").empty();
				full_nws.classList.remove("blured");
				close_nws.classList.remove("cl_hided");
				close_nws.classList.add("cl_visbl");


				// alert("work");

			});
    		$('#full_nws').append(data);
    		// $('#full_nws').append("<P>Cсылка на статью: http://192.168.0.107/site_stup/pro/?name=news&num="+new_number+"</P>");
    		// window.location.search = "name=news&num="+out_nw;
    		var src_images = new Array();
	    	var k = 0;
	    	$("#full_nws").find("img").each(function() {
	    		src_images[k++] = $(this).attr("src");
	    	});
	    	k--;

    		$("#full_nws img").click(function(event) {
   //  			/* Act on the event */
   			//$op_img=$("#full_nws img");
				full_nws.classList.add("blured");
				close_nws.classList.add("cl_hided");
				close_nws.classList.remove("cl_visbl");

   			var img_src = $(this).attr('src');
    		$("#full_new_img").removeClass("img_ovf_hid").addClass("img_ovf_vis");
			$("#fl_nw").css({overflow:"hidden"});
			// $("#fl_nw_img").append("<img width=100% ");
			$("#fl_nw_img").addClass("transit_5");
			$("#fl_nw_img").css({'background-image':'url("'+img_src+'")'});
			// fl_nw_img.style.backgroundColor= "#448899";
			// fl_nw_img.style.backgroundImage= "url("+img_src+")";
			// alert(img_src);
			$("#close_imgs").addClass("cl_visbl").removeClass("cl_hided");
			// alert("work");
			$("#fl_nw_img").click(function(event) {
				// alert("work");
				// alert($(this).css("background-image"));
				var n = 0;
				while ((n<=k)&&(img_src!=src_images[n]))
				{
					n++;
				}
				if (n == k) n = 0; else n++;
				img_src=src_images[n];
				$(this).css({'background-image':'url("'+src_images[n]+'")'});
			});
    	});

		}
	});
}



$("#b_n").click(function(event)
{

	var out_nw;
	out_nw=num_news-x;
	// window.location.replace("http://127.0.0.1/site_stup/pro/?name=news&num="+out_nw);
	show_nws(out_nw);

});

$("#close_nws").click(function(event)
{
	$('#full_nws').empty();

	$("#fl_nw").removeClass("ovf_vis").addClass("ovf_hid");
	$("#mns").css({overflow:"auto"});
	close_nws.classList.toggle("cl_hided");
  close_nws.classList.toggle("cl_visbl");
	var _url = "?#newss";
	if(_url != window.location.hash){
            window.history.pushState(null, null, _url);
        }
	// window.location.replace("http://127.0.0.1/site_stup/pro/?name=goto&id=newss");

});






var get = location.search;	// строка GET запроса
if(get != '') {
	var tmp = new Array();		// два вспомагательных
	var tmp2 = new Array();		// массива
	var param = new Array();
	tmp = (get.substr(1)).split('&');	// разделяем переменные
	for(var i=0; i < tmp.length; i++) {
		tmp2 = tmp[i].split('=');		// массив param будет содержать
		//param[tmp2[0]] = tmp2[1];		// пары ключ(имя переменной)->значение
		if ((tmp2[0]="name")&&(tmp2[1]=="news"))
		{
			tmp2 = tmp[++i].split('=');
			if (tmp2[0]="num") show_nws(tmp2[1]);
		}
		else if ((tmp2[0]="name")&&(tmp2[1]=="goto"))
		{
			tmp2 = tmp[++i].split('=');
			if (tmp2[0]="id")  $.scrollTo('#'+tmp2[1], 1, {axis:'y', margin:'false' });;
		}

	}
}
