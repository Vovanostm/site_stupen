var x=1;
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

var $area = $('#block_news');

function scrolldown()
{
   x=x<=1?1:x-1;
   $area.scrollTo('div:eq('+x+')', 900, { axis:'x' });
}

function scrollup()
{
   x=x+1;
   $area.scrollTo('div:eq('+x+')', 900, { axis:'x' });
}

function navTo(block_id)
{
    $.scrollTo(block_id, 900, { axis:'y' });
}
