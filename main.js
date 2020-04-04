
$(document).ready(function(){
  apiCall(1);
});



 function apiCall(flag){
   $(".app-content").html("");

   var html = "";
     $.ajax({
      url: 'https://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'q=corona&' +
          'apiKey=46f96b287e9e4c92b3a8bd0d1b0e3300',  /*<-- Your api key goes here*/
      dataType: 'json',
      async: false,
      success: function(result){
        // channelName = result.display_name;
        // imgUrl = result.logo;
        // twitchLink = result.url;
        for (var i = 0; i<parseInt(result.articles.length); i++) {
          art_source_name = result.articles[i].source.name;
          art_title = result.articles[i].title;
          art_description = ((result.articles[i].description.length>200)?(result.articles[i].description.substr(0,200)):(result.articles[i].description))+"...";
          art_url = result.articles[i].url;
          art_img_url = result.articles[i].urlToImage;
          art_publish_date = result.articles[i].publishedAt.substr(0,10);
          console.log("--> "+i+"\n");
          console.log(art_source_name+" "+art_title+" "+art_url+" "+art_img_url);
          console.log("=========================================================");
          html = '<div style="margin:0 10px">'
                    +'<a href="'+art_url+'">'
                    +'<div class= "row article">'
                      +'<div class="col-md-3 col-sm-12"><img src="'+art_img_url+'"></div>'
                      +'<div class="col-md-9 col-sm-12">'
                          +'<h4><strong>'+art_title+'</strong></h4>'
                          +'<p>'+art_description+'</p>'
                          +'<span style="padding:0 0;margin:0 0">'+art_publish_date+" | "+art_source_name+'</span>'
                      +'</div>'
                   +'</div>'
                  +'</a>'
                  +'<div style="border-top:solid; border-width:1px; border-color: #eeeeee; height: 10px"></div>'
                  +'</div>';
          $(".app-content").append(html);
        }
      },
      error: function(xhr, a,b){
        alert(xhr.status);
      }
    });
 }




  /*$.ajax({
      url: 'https://wind-bow.glitch.me/twitch-api/streams/'+channel+'?callback=?',
      dataType: 'json',
      success: function(result){
      },
      error: function(xhr, a,b){
        //alert(xhr.status);
      }
    });*/
