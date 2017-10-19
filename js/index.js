$('.search-button').click(function(){
  $(this).parent().toggleClass('open');
});

$(function(){
	$(document).one('click', '.like-review', function(e) {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> Vous aimez');
		$(this).children('.fa-heart').addClass('animate-like');
	});
});

$('.block').smoove({offset:'40%'});

$.getJSON("https://api.airtable.com/v0/app3oxEZXINZHN8ux/musics?api_key=keydQHDgERxfAsnDe",
                    function(data) {

                     data_str = JSON.stringify(data);

                     $('article').html(data_str);

                    });

