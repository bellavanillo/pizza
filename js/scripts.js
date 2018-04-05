//business logic
function Pizza (toppings, size, price){
  this.size = size;
  this.topping = toppings;
  this.price = price;
  debugger;
}

Pizza.prototype.sizeCost = function(size, toppingsArray){
  var total = 0;
  if (size === "Small") {
    total += 5;
  } else if (size === "Medium") {
    total += 10;
  } else if (size === "Large") {
    total += 15;
  }



  if (toppingsArray.length < 1){
    total += 0;
    this.price = total;
  } else {
    for (var i = 0; i < toppingsArray.length; i++) {
      total += 1;
      this.price = total;
    }
  }
}
Pizza.prototype.cost = function (toppings, price, size) {
  return "Your total is $" + this.price + " for a " + this.size + " pizza";
}

//UI Logic
$(document).ready(function(){
  $(".form").submit(function(event){
    event.preventDefault();
      var sizeNew = $("#pizza-size").val();
      var toppings = $('input:checkbox[name=toppings]:checked');
      var toppingsArray = [];
      for (var i=0; i< toppings.length; i++) {
          toppingsArray.push($(toppings[i]).val());

      }

      var newPizza = new Pizza (sizeNew, toppingsArray, price);
      var price = newPizza.sizeCost (sizeNew, toppingsArray);
      var output = newPizza.cost (sizeNew, toppingsArray, price);

      $(".results").show();
      $(".form").hide();
      $('#receipt').text(output);
    });
  });
