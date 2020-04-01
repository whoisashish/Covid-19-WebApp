$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://www.thehindu.com/news/national/kerala/feeder/default.rss",
    success: function(data) {
    var regx = new RegExp('coronavirus');
    var newsData = [];
    $(data).find("item").each(function () { // or "item" or whatever suits your feed
        var el = $(this);

        if(regx.exec(el.find("title").text().toLowerCase()) || regx.exec(el.find("description").text().toLowerCase())){
          newsData.push({
            "title": el.find("title").text(),
            "description": el.find("description").text(),
            "url": el.find("link").text(),
            "date": el.find("pubDate").text()
        })
        }
    });
    publishNewsData(newsData, 0);
    
}
})

$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://www.thehindu.com/news/national/feeder/default.rss",
    success: function(data) {
    var regx = new RegExp('coronavirus');
    var newsData = [];
    $(data).find("item").each(function () { // or "item" or whatever suits your feed
        var el = $(this);

        if(regx.exec(el.find("title").text().toLowerCase()) || regx.exec(el.find("description").text().toLowerCase())){
          newsData.push({
            "title": el.find("title").text(),
            "description": el.find("description").text(),
            "url": el.find("link").text(),
            "date": el.find("pubDate").text()
        })
        }
    });
    publishNewsData(newsData, 0);
    
}
})


    publishTipsData(["Wash your hands well and often. Wash for at least 20 seconds with soap and water or use hand sanitizer with at least 60% alcohol.",
"Try not to touch your eyes, nose, and mouth, especially if you haven't washed your hands.",
"Avoid contact with people who are sick. If a child becomes sick while in your care, keep them separate from the other children while they wait to be picked up.",
"Cover your mouth and nose with a tissue if you sneeze or cough, then throw it out.",
"You do not need to wear a face mask. Experts say they're not needed to stay healthy. They are needed by sick patients and the health workers caring for them."])

function publishNewsData(newsData, type){
    var items = [];
    $("#loader").hide();
    $.each(newsData, function(i, item) {

      items.push('<li>'+
                      '<div class="card teal lighten-2">'+
                          '<div class="card-content white-text">'+
                              '<span class="card-title">'+item.title+'</span>'+
                              '<div class="chip">'+
                                  '<a href="'+item.url+'" target="_blank">Link</a>'+
                              '</div>'+
                              '<p>'+item.description+'</p>'+
                          '</div>'+
                      '</div>'+
                  '</li>');

    }); 
    type == 0 ? $('#newsCards').append(items.join('')) : $('#newsCardsTimes').append(items.join(''));
}

function publishTipsData(newsData, type){
    var items = [];

    $.each(newsData, function(i, item) {

      items.push('<li>'+
                      '<div class="card blue-grey darken-1">'+
                          '<div class="card-content white-text">'+
                              '<p>'+item+'</p>'+
                          '</div>'+
                      '</div>'+
                  '</li>');

    }); 
    $('#tipsCard').append(items.join(''));
}

function makeData(data) {
  var map = {};
  for(var i in data){
    map[data[i].state.toLowerCase().split(" ")[0]] = i;
  }
  return map;
}

function makeDataForStateGraph(data){
  var map = {
    "confirmed": [],
    "recovered": [],
    "deceased": [],
    "states": []
  };
  data.forEach((d)=>{
    map.confirmed.push(d.confirmed);
    map.recovered.push(d.recovered);
    map.deceased.push(d.deaths);
    map.states.push(d.state)
  });
  map.confirmed.splice(0,1);
  map.recovered.splice(0,1);
  map.deceased.splice(0,1);
  map.states.splice(0,1);
  return map;
}

function makeDataForProgressGraph(data){
  var map = {
    "label": [],
    "data": {
      "confirmed":[],
      "recovered":[],
      "deceased":[]
    }
  };
  var times;
  if(data.length % 10 == 0){
    times = data.length / 10;
  }else{
    times = (data.length / 10)+1
  }

  times = parseInt(times);

  for(var i=0;i<times;i++){
    var count = 0;
    var c=0,r=0,d=0;
    for(var j=i*10; j< data.length;j++){
    	if(count == 10) break;
        count++;
        c = data[j].totalconfirmed ;
	    r = data[j].totalrecovered ;
	    d = data[j].totaldeceased ;
        
    }
    var endDate = data[j-1].date;
    map.label.push(endDate);
    map.data.confirmed.push(c);
    map.data.recovered.push(r);
    map.data.deceased.push(d);
  }

  return map;
}

function addData(numData, chart){
    for (var i = 0; i < numData; i++){
        var newwidth = $('.chartAreaWrapper2').width() +120;
        $('.chartAreaWrapper2').width(newwidth);
    }
}

function menuClick(event){

  $('#mapContainer').fadeOut();
  for(var i=0;i<event.target.parentElement.children.length;i++){
      event.target.parentElement.children[i].classList.remove("active")
  }
  event.target.classList.add("active");
  if(event.target.id == "map"){
    $('#mapContainer').fadeIn();
    $('#statechartContainer').fadeOut();
    $('#statsContainer').fadeOut();
  } else if(event.target.id == "graph"){
    $('#mapContainer').fadeOut();
    $('#statechartContainer').fadeIn();
    $('#statsContainer').fadeOut();
  } else{
    $('#mapContainer').fadeOut();
    $('#statechartContainer').fadeOut();
    $('#statsContainer').fadeIn();
  }
}