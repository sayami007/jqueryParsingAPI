$.ajax({
  url:"https://api.github.com/users/sayami007",
  statusCode:{
    200:function(){
      console.log("done")
    },
    404:function(){
      console.log("Page not found")
    }
  }
}).then(function(data){
    $('#username').append(data.login)
    $('#name').append(data.name)
    $('#image').attr('src',data.avatar_url)
});
