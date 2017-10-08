$(document).ready(function(){
  	$('#showWeather').on('click',function(){
    	var location = $('#location').val();
    	$.ajax({
    		url:'http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=4887f9ed6473e74aa7f23760dab7f288&units=metric',
    		success:function(data){
    			console.log(data.main.temp)
    			$('#temparature').text(data.main.temp)
    			$('#locationValue').text(data.name)
    		},
    		error:function(response){
    			alert('No Address found')
    		},
    		complete:function(response){
				console.log(response)
			}
   		})
	})
});
