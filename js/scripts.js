//business logic
function Pizza (toppings, sizes, price){
  this.size = sizes;
  this.topping = toppings;
  this.price = price;
  debugger;
}

Pizza.prototype.pizzaPrice = function(size, toppingsArray){
  var total = 0;
  if(this.size === "s"){
    this.price = 5 + this.topping;
  }else if (this.size === "md"){
    this.price =  10 + this.topping;
  } else {
    this.price = 15 + this.topping;
  }
  if (toppingsArray.length < 1){
    total += 0;
    this.price = total;
  } else {
    for (var i = 0; i < toppingsArray.length; i++) {
      total += 1;
      this.price = total;
  }
  pizza.prototype.cost = function (toppings, price, sizes) {
    return "$" + this.price + " " + this.size + "pizza, with" + this.toppings;
  }
}
}











//UI Logic
$(document).ready(function(){
  $("form.form").submit(function(event){
    debugger;
    event.preventDefault();

    $("input:checkbox[name=topping]:checked").each(function(){
      var toppings = parseInt($(this).val());
      var newToppings = [];
      for(var i=0; i< toppings.length; i++) {
          newToppings.push(toppings[i].val());
      }



      $(".results").show();
      $(".form").hide();



    });
  });
});
