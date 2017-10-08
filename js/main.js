$(document).ready(function(){
  $('#showWeather').on('click',function(){
    var name = $('#username').val();
     $.ajax({
      url:"https://api.github.com/users/"+name,
      statusCode:{
        200:function(data){
          $('#name').text(data.name)
          $('#image').attr('src',data.avatar_url)
        },
        404:function(){

          $('#name').text("N/A")
          $('#image').attr('alt',"N/A")
          $('#image').attr('src',"N/A")
          alert("Username not found")
        }
      }
    })
  });
});
