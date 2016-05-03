


function show_nws(new_number)
{
	$.scrollTo("#newss", 0, {axis:'y', margin:'false' });
	$("#fl_nw").removeClass("ovf_hid").addClass("ovf_vis");
	$("#mns").css({overflow:"hidden"});
	$("#close_nws").addClass("cl_visbl").removeClass("cl_hided");
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

	    	$('#fl_nw').append('<DIV id = "full_new_img" class ="ovf img_ovf_hid"><div id="close_imgs" class="cl_hided"></div><div id="fl_nw_img" class="fl_img"></div></DIV>');
    		$("#close_imgs").click(function(event)
			{
				$("#full_new_img").removeClass("img_ovf_vis").addClass("img_ovf_hid");
				$('#fl_nw_img').empty();
				$("#full_new_img").removeClass("img_ovf_vis").addClass("img_ovf_hid");
				$("#fl_nw").css({overflow:"auto"});
				$("#close_imgs").addClass("cl_hided").removeClass("cl_visbl");
				$("#fl_nw_img").empty();
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
	$("#close_nws").addClass("cl_hided").removeClass("cl_visbl");
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
