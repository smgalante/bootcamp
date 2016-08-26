/* MongoDB Zoo Site (18.2.94)
 * Front-End
 * ========================= */
$(document).ready(function() {

    $.ajax("/all").done(function(data){
      console.log(data);
      for(var i=0; i < data.length; i++){
        $('#results').append(
          '<tr><td>' + data[i].name + <'/td>' +
          '<td>' + data[i].numlegs + '</td>' +
          '<td>' + data[i].numlegs + '</td>' +
          )
      }
    });
    $('#weightsort').click(function(){
      $.ajax('/weight').done(function(data){
        console.log(data);
      })
    });
    $('#namesort').click(function(){
      $.ajax('/name').done(function(data){
        $('#results tr');
      })
    });
      

});



/* TODO: 

  1. Make an AJAX function for loading the table in index.html
  with the data from your animals collection in MongoDB.
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click
  the two buttons on index.html.
      a. When the user clicks the Weight button, the table should
      display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should
      display the animal data sorted by name. 

  Good luck!
*/
