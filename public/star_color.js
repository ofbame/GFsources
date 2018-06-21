$( document ).ready(function() {
  paintOnRate();
});

function paintOnRate(){
	$('td').each(function(){
		var data = $(this).html();
    var color = '';
    if(data == '★★'){
    	color = '#ddd';
    } else if(data == '★★★'){
    	color = '#cef';
    } else if(data == '★★★★'){
      color = '#cf7';
    } else if(data == '★★★★★'){
      color = '#fd8';
    } else {
      color = '';
    }
    $(this).css('background-color', color);
  });
}