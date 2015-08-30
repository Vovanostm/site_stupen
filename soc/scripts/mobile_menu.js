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