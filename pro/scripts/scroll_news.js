var
  num_news = 0,
  max_x = 0;

function update_news() {
  $(".n_w").each(function(index, el) {
    // alert("work");
    if ($(this).children(".imgs").children("img").length > 6)
      $(this).children(".imgs").children("img").each(
        function(index, el) {
          $(this).css({
            height: "25%"
          });
        });
    else if ($(this).children(".imgs").children("img").length > 1)
      $(this).children(".imgs").children("img").each(function(index, el) {
        $(this).css({
          height: "40%"
        });
      });
    else
      $(this).children(".imgs").children("img").each(function(index, el) {
        $(this).css({
          height: "75%"
        });
      });
  });
}

$.ajax({
  type: "POST",
  url: "work.php",
  data: "name=" + "num_news",
  dataType: "html",
  success: function(data) {

    num_news = data;
    now_news = num_news;

    $.ajax({
      type: "POST",
      url: "work.php",
      data: "name=" + "shr_nw" + "&nws=" + num_news,
      dataType: "html",
      success: function(data) {

        $('#b_n').append(data);
        update_news();
      }
    });

  }
});



function scroll_left(area) {

  var $area = $('#' + area);
  if (area = "b_n") {
    x = x <= 1 ? 0 : x - 1;

    $area.scrollTo('section:eq(' + x + ')', 900, {
      axis: 'x'
    });
  } else {
    s_proj = s_proj <= 1 ? 0 : s_proj - 1;
    $area.scrollTo('section:eq(' + s_proj + ')', 900, {
      axis: 'x'
    });

  }
}

function scroll_right(area) {
  console.log("clicked");
  now_news = now_news - 1;
  $.ajax({
    type: "POST",
    url: "work.php",
    data: "name=" + "shr_nw" + "&nws=" + now_news,
    dataType: "html",
    success: function(data) {

      $('#b_n').append(data);
      update_news();
      var $area = $('#' + area);
      if (area = "b_n") {


        x = x >= $("section.news").length - 1 ? $("section.news").length -
          1 : x + 1;
        $area.scrollTo('section:eq(' + x + ')', 900, {
          axis: 'x'
        });
      } else {
        s_proj = s_proj + 1;
        $area.scrollTo('section:eq(' + s_proj + ')', 900, {
          axis: 'x'
        });
      }
    }
  });



}

function navTo(block_id) {
  $.scrollTo(block_id, 900, {
    axis: 'y',
    margin: 'false'
  });
  //$(block_id).scrollTo("27%");

  if (block_id != window.location.hash) {
    window.history.pushState(null, null, block_id);
  }
}

x = 0;
var s_proj = 0;


function change_menu() {
  if (($('nav')[0].getBoundingClientRect().bottom) < 50) {
    console.log("dynamic");
    $("#main_nav").addClass("dynamic").removeClass("static");
  } else {
    console.log("static");
    $("#main_nav").addClass("static").removeClass("dynamic");
  }
}
$(window).scroll(function() {
  change_menu();
});

change_menu();
