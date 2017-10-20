$('.search-button').click(function(){
  $(this).parent().toggleClass('open');
});

$(function(){
	$(document).one('click', '.like-review', function(e) {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> Vous aimez');
	});
});

$.getJSON("https://api.airtable.com/v0/app3oxEZXINZHN8ux/musics?api_key=key46IDre0cUesMxW",
  					function(data) {
              $.each(data.records, function(key,val) {
                console.log(val.fields.title);
                $('<li>'+val.fields.title+'</li>').appendTo("#musiques");
                 $("<iframe src='https://open.spotify.com/embed?uri=" + val.fields['spotify-link'] + "'&view=coverart frameborder='0' allowtransparency='true'></iframe>").appendTo('#musiques');
				      });
  }
);