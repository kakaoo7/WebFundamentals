const pizzaOven = (crustType, sauceType, cheeses, toppings) => {
    let pizza = {}
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.topping = toppings;
    return pizza;
}

const hisPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

console.log(hisPizza);