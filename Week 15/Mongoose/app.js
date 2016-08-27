$('input[type="submit"]').on('click', function(){
  $.ajax({
    type: "POST",
    url: '/submit',
    dataType: 'json',
    data: {
      username: $('input[name="username"]').val(),
      password: $('input[name="password"]').val(),
      email: $('input[name="email"]').val(),    
      userCreated: Date.now()

    }
  })
  .done(function(data){
  
  });
  return false;
});
