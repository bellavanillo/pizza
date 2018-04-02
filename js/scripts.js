//business logic
function Pizza (toppings, sizes, sauces){
  this.size = sizes;
  this.topping = toppings;
  this.sauce = sauces;
  this.price;
  this.numberTopping

}

Pizza.prototype.totalTopping = function(){
  this.numberTopping = this.topping.length;
}

Pizza.prototype.pizzaPrice = function(){
  if(this.size === "s"){
    this.price = 5 + this.topping;
  }else if (this.size === "md"){
    this.price =  10 + this.topping;
  } else {
    this.price = 15 + this.topping;
  }
}

//UI Logic
$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=size]:checked").each(function(){
      var sizes = parseInt($(this).val());
    });

    $("input:checkbox[name=sauce]:checked").each(function(){
      var sauces = parseInt($(this).val());
    });

    $("input:checkbox[name=topping]:checked").each(function(){
      var toppings = parseInt($(this).val());

    });
    $("#receipt").show();
  });
});
