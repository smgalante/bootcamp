var APIKey = "bb99aa4197f855238017a720be8d7577";
var queryURL = "https://crossorigin.me/https://api.forecast.io/forecast/" + APIKey + "/37.8267,-122.423";
var unixtime = Date.parse("24-Nov-2009 17:57:35").getTime()/1000

$.ajax({
	url: queryURL,
	method: 'GET',
	
})
	.done(function(result) {
			$("#weather").html(result.currently.apparentTemperature);
			$('#icon').html(result.currently.icon);
			$('#time').html(unixtime);
              //$('#weather').innerHTML('and the weather is: ' + result);   
			});

