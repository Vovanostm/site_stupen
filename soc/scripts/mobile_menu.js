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


