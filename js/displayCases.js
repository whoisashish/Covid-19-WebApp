
$.ajax({
	url: "https://corona.lmao.ninja/countries",
	beforeSend: function() {
		$("#mapid").css('opacity', '0.4');
		$("#loading").show();
	},
	complete: function() {
		$("#loading").hide();	
		$("#mapid").css('opacity', '1');
	},
	success: function (resp) {
		var coronaData = resp;
		for(var i = 0; i < coronaData.length; i++) {
			/*Get Latitude and Longitude of country*/
			var pos = coronaData[i]["countryInfo"];
			var lat = pos["lat"];
			var lng = pos["long"];

			/*Draw a red circle at that location. Bigger circle means worse hit*/
			var rad = coronaData[i]["cases"];
			var exp = rad.toString().length - 1;
			
			if(exp > 3) {
				/*Max exponential is 3. Otherwise significant difference not seen*/
				exp = 3;
			}

			if(rad < 10) {
				/*Shouldn't be too small*/
				rad = 5;
			}
			else {
				rad = 5 + (rad / Math.pow(10, exp)) + (10 * (exp - 1));
				if(rad > 50) {
					/*Significant difference must be seen. But radius > 50 is too big.*/
					rad = 50;
				}
			}
			var circle = L.circleMarker([lat, lng], {
					color: 'red',
					fillColor: '#f03',
					fillOpacity: 0.85,
					radius: rad
				     }).addTo(myMap).bindPopup("<b>" + coronaData[i]["country"] + "</b>" +  	
							  "<hr>" + 
							  "Total Cases: " + coronaData[i]["cases"] +  
							  "<br> Total Deaths: " + coronaData[i]["deaths"] +
							  "<br> Cases Today: " + coronaData[i]["todayCases"] + 
							  "<br> Deaths Today: " + coronaData[i]["todayDeaths"] + 
							  "<br> Total Recovered: " + coronaData[i]["recovered"] + 
							  "<br> Critical Cases: " + coronaData[i]["critical"]);
			
		}
	},
	error: function() {
	}
});
