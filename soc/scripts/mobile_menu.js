var hided=true;
function open_menu()
{
	if (hided)
	{
		hided=false;
		//document.getElementById("m_bd").style.marginLeft = "200px";
		document.getElementById("menu").style.display = "block";	
	}
	else
	{
		//document.getElementById("m_bd").style.marginLeft = "0px";
		document.getElementById("menu").style.display = "none";	
		hided=true;
	}
}
$(window).scroll(function()
    { 	
 		if (($('#menu').height()+$('#menu')[0].getBoundingClientRect().top)<0)
        	document.getElementById("toTop").style.opacity = "1";
        else document.getElementById("toTop").style.opacity = "0.0";
    });