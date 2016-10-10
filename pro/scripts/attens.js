$("li.a_ns")
	.click(function(event) {
		/* Act on the event */

		// $(this).animate({opacity: 0}, 500 );
		// alert($(this).children('span').width());
		$("hr.a_ns").animate({left:$(this).children('span').position().left+"px", width:$(this).children('span').width()},600);

		/* Act on the event */
	});
		/* Stuff to do when the mouse enters the element */

$(document).ready(function(event){
	$("hr.a_ns").animate({left:$("li.a_ns").children('span').position().left+"px", width:$("li.a_ns").children('span').width()},600);
});

function scrollAt(attns)
{
	$("#a_ns_block").scrollTo('#'+attns, 600, { axis:'x' });

}
