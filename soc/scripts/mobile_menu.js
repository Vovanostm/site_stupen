var hided=true;
var mobiled=false;
var pos_nv=0, otst_nv=0;

function open_menu()
{
	mobiled=true;
	if (hided)
	{
		hided=false;
		//document.getElementById("m_bd").style.marginLeft = "200px";
		document.getElementById("menu").style.display = "block";
		$(".blocks").click(function() {
			document.getElementById("menu").style.display = "none";	
			hided=true;
		});

		$(".warning").click(function() {
			document.getElementById("menu").style.display = "none";	
			hided=true;
		});	
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
 		

 		if (($('#menu')[0].getBoundingClientRect().top)<200)
 		{
        	document.getElementById("toTop").style.opacity = "0.9";
        	document.getElementById("body_nv").style.opacity = "0.4";
        	document.getElementById("proj_nv").style.opacity = "0.4";
        	document.getElementById("news_nv").style.opacity = "0.4";
        	document.getElementById("abou_nv").style.opacity = "0.4";
        	document.getElementById("cont_nv").style.opacity = "0.4";
        	document.getElementById("radu_nv").style.opacity = "0.6";
 		}
        else 
        {
        	document.getElementById("toTop").style.opacity = "0.0";
        	document.getElementById("body_nv").style.opacity = "0.0";
        	document.getElementById("proj_nv").style.opacity = "0.0";
        	document.getElementById("news_nv").style.opacity = "0.0";
        	document.getElementById("abou_nv").style.opacity = "0.0";
        	document.getElementById("cont_nv").style.opacity = "0.0";
        	document.getElementById("radu_nv").style.opacity = "0.0";
        }

        if (($('#menu')[0].getBoundingClientRect().top)<200)
        {
     		pos_nv=0;
        	document.getElementById("body_nv").style.backgroundColor = "#C1000E";
        	
        	document.getElementById("body_nv").style.opacity = "1";
        	
        }
        else document.getElementById("body_nv").style.backgroundColor = "#000";

        if (($('#projects')[0].getBoundingClientRect().top)<200)
        {	pos_nv=1;
        	document.getElementById("proj_nv").style.backgroundColor = "#FF9500";
        	
        	document.getElementById("proj_nv").style.opacity = "1";
        }
        else document.getElementById("proj_nv").style.backgroundColor = "#000";
        	
        if (($('#news')[0].getBoundingClientRect().top)<200)
        {
        	pos_nv=2;
        	document.getElementById("news_nv").style.backgroundColor = "#00AE00";
        	
        	document.getElementById("news_nv").style.opacity = "1";
        }
        else document.getElementById("news_nv").style.backgroundColor = "#000";
        if (($('#about')[0].getBoundingClientRect().top)<200)
        {	
        	pos_nv=3;
        	document.getElementById("abou_nv").style.backgroundColor = "#1B3DF1";
        	
        	document.getElementById("abou_nv").style.opacity = "1";
        }
        else document.getElementById("abou_nv").style.backgroundColor = "#000";   	
        if (($('#contacts')[0].getBoundingClientRect().top)<200)
        {	
        	pos_nv=4;
        	document.getElementById("cont_nv").style.backgroundColor = "#7000B7";
        	
        	document.getElementById("cont_nv").style.opacity = "1";
        }
        else document.getElementById("cont_nv").style.backgroundColor = "#000";
        
        if (pos_nv==0)
        	otst_nv=(-(($('#logo')[0].getBoundingClientRect().top)+200)/$('#logo').height())*(16+40);

        else if (pos_nv==1)
        	otst_nv=(-($('#projects')[0].getBoundingClientRect().top)+200)/($('#projects').height())*(16+40);

        else if (pos_nv==2)
        	otst_nv=(-(($('#news')[0].getBoundingClientRect().top)-200)/$('#news').height())*(16+40);
        else if (pos_nv==3)
        	otst_nv=(-(($('#about')[0].getBoundingClientRect().top)-200)/$('#about').height())*(16+40);
        else 
        	otst_nv=0;
        // if (pos_nv==4)
        // 	otst_nv=(-(($('#contacts')[0].getBoundingClientRect().top)-200)/$('#contacts').height())*(16+40);
        
        var h_n = pos_nv*(16+40)+otst_nv;

        document.getElementById("radu_nv").style.height = h_n+"px"; 




        
    });