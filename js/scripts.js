$(document).ready(function(){
  $("form.form1").submit(function(event){
    event.preventDefault();
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
  });
});
