//Biz logic
var callFunction = function() {
  ???? hold the numbers here
  for (var i=1; i<=number; i++) {
    if (i % 3 === 0 && i % 5 === 0){
      console.log("pingpong");
    }
    else if ( i % 3 === 0 ) {
      console.log("ping");
    }
    else if (i % 5 ===0){
      console.log("pong");
    }
    else {
      console.log(i);
    }
  }
  ?????
}

$(document).ready(function(){
  $("form.form1").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($(???)???);
    var newName = callFunction(userInput);

    display all the numbers with code here (.append();)
  });
});
