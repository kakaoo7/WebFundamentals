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
const herPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(herPizza);
const deogPizza = pizzaOven("light slice", "BBQ sauce", ["american cheese", "mozzarella"], ["onions", "garlic", "mushrooms", "chicken", "pineapple"]);
console.log(deogPizza);