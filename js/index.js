$('.search-button').click(function(){
  $(this).parent().toggleClass('open');
});

$.getJSON("https://api.airtable.com/v0/app3oxEZXINZHN8ux/musics?api_key=keydQHDgERxfAsnDe",
                    function(data) {

                     data_str = JSON.stringify(data);

                     $('article').html(data_str);

                    });

