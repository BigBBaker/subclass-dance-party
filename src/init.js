$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

     //makeBlinkyDancer
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    //console.log(this)
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    //console.log(window[dancerMakerFunctionName])
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
  
  $('.addJigglyButton').on('click', function(event){
    
    var dancer = new jigglyDance(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
 
  //salsa Dance
   $('.addSalsalyButton').on('click', function(event){     
    var dancer = new salsaDance(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      $('body').append("<img src=https://ak7.picdn.net/shutterstock/videos/3193627/thumb/1.jpg>"),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
  }); 



