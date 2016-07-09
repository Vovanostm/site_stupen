

var x=0;
jQuery(function( $ ){
    /**
     * Demo binding and preparation, no need to read this part
     */
        //borrowed from jQuery easing plugin
        //http://gsgd.co.uk/sandbox/jquery.easing.php 
    // Settings examples bindings, they will all scroll to the same place, with different settings
    var $settings = $('#pane-settings');
    $('#settings-examples a').click(function() {
        // before each animation, reset to (0,0), skip this.
        
    });    
    $('#settings-axis').click(function() {// only scroll horizontally
        x=x+1;
        $settings.scrollTo('li:eq('+x+')', 1000, { axis:'x' });
    
    });
    
});


$(window).scroll(function()
    {   
    

    if (($('#menu')[0].getBoundingClientRect().top)<200)
    {
          // document.getElementById("toTop").style.opacity = "0.9";
          document.getElementById("body_nv").style.opacity = "0.4";
          document.getElementById("proj_nv").style.opacity = "0.4";
          document.getElementById("news_nv").style.opacity = "0.4";
          document.getElementById("abou_nv").style.opacity = "0.4";
          document.getElementById("cont_nv").style.opacity = "0.4";
          document.getElementById("radu_nv").style.opacity = "0.6";
    }
        else 
        {
          // document.getElementById("toTop").style.opacity = "0.0";
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

        if (($('#projects')[0].getBoundingClientRect().top)<30)
        { pos_nv=1;
          document.getElementById("proj_nv").style.backgroundColor = "#FF9500";
          
          document.getElementById("proj_nv").style.opacity = "1";
        }
        else document.getElementById("proj_nv").style.backgroundColor = "#000";
          
        if (($('#news')[0].getBoundingClientRect().top)<30)
        {
          pos_nv=2;
          document.getElementById("news_nv").style.backgroundColor = "#00AE00";
          
          document.getElementById("news_nv").style.opacity = "1";
        }
        else document.getElementById("news_nv").style.backgroundColor = "#000";
        if (($('#about')[0].getBoundingClientRect().top)<30)
        { 
          pos_nv=3;
          document.getElementById("abou_nv").style.backgroundColor = "#1B3DF1";
          
          document.getElementById("abou_nv").style.opacity = "1";
        }
        else document.getElementById("abou_nv").style.backgroundColor = "#000";     
        if (($('#contacts')[0].getBoundingClientRect().top)<30)
        { 
          pos_nv=4;
          document.getElementById("cont_nv").style.backgroundColor = "#7000B7";
          
          document.getElementById("cont_nv").style.opacity = "1";
        }
        else document.getElementById("cont_nv").style.backgroundColor = "#000";
        
        if (pos_nv==0)
          otst_nv=(-(($('#logo')[0].getBoundingClientRect().top)+400)/$('#logo').height())*(16+40);

        else if (pos_nv==1)
          otst_nv=(-($('#projects')[0].getBoundingClientRect().top)+30)/($('#projects').height())*(16+40);

        else if (pos_nv==2)
          otst_nv=(-(($('#news')[0].getBoundingClientRect().top)-30)/$('#news').height())*(16+40);
        else if (pos_nv==3)
          otst_nv=(-(($('#about')[0].getBoundingClientRect().top)-30)/$('#about').height())*(16+40);
        else 
          otst_nv=0;
        // if (pos_nv==4)
        //  otst_nv=(-(($('#contacts')[0].getBoundingClientRect().top)-200)/$('#contacts').height())*(16+40);
        
        var h_n = pos_nv*(16+40)+otst_nv;

        document.getElementById("radu_nv").style.height = h_n+"px"; 




        
    });

function scrollwr()
{
  var $area = $('body');
   $area.scrollTo('#wr', 2500, { axis:'y' });
}

function scrolldown(area)
{
  var $area = $('#'+area);
   x=x<=1?0:x-1;
   $area.scrollTo('div:eq('+x+')', 900, { axis:'x' });
}

function scrollup(area)
{
  var $area = $('#'+area);
   x=x+1;
   $area.scrollTo('div:eq('+x+')', 900, { axis:'x' });
}

function navTo(block_id)
{
    $.scrollTo(block_id, 900, { axis:'y' });
}

//scrollwr();
