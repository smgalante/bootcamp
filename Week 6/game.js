$( document ).ready(function() {
   
    var counter = 20;       
    
      $("#startButton").on("click", function() {
          var self = this;
          //change the color of the button to red
          $(this).addClass('btn-danger');

          var intervalId = setInterval(function() {              
              //change the button text to number of seconds remaining            
              //reduce the number of seconds left by 1
              //when it hits 0, make an alert
              counter--;

              $(self).html('number of seconds remaining: ' + counter);
              
              if (counter === 0) {
                  alert("time\'s up!");
                  clearInterval(intervalId);

                  
              }
          }, 1000);

          $('.btn-friend').on('click', function() {
              //increase the friend counter by 1
              friendCounter++;
              //show the friend counter to the click-count 
              $('#click-count').html(friendCounter);
              //bonus: disable the button after the click
              $(this).prop('disabled', true);
          });


      });

      //generate buttons dynamically using jquery
      var names = ['chen', 'arnold', 'darryl', 'jen'];

      for (var i=0; i<names.length;i++) {
          //for each name create a button
          var button = $('<button>');
          button.addClass('btn btn-default btn-margin btn-friend');          
          button.text(names[i]);          
          
          $('#friends').append(button);

      }

      var friendCounter = 0;
      



});