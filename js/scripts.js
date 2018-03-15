//Biz logic
var callFunction = function(userInput){
  var outputArray = [];
  for (var i = 1; i <= userInput; i++){
var index = outputArray.indexOf(i);
    if (i % 15 === 0){
      outputArray.slice(index, 0);
      outputArray.push("pingpong");
    }else if ( i % 3 === 0){
      outputArray.slice(index, 0);
      outputArray.push("ping");
    }else if (i % 5 ===0){
      outputArray.slice(index, 0);
      outputArray.push("pong");
    }else {
      outputArray.push(i);
    }
  }
  alert ("outputArray");
  //return outputArray;
};

$(document).ready(function(){
  $("form.form1").submit(function(event){
    event.preventDefault();
    debugger
    var userInput = parseInt($("input#number").val());
    var newName = callFunction(userInput);

    newName.forEach(function(value){
      $("#output").append('<li>' + value + '</li>');
    })
    //display all the numbers with code here (.append();)
  });
});
