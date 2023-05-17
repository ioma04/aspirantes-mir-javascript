let recipe = {
    name: "sandwich",
    ingredients: [
        {name: "bread", quantity: 2},
        {name: "cheese", quantity: 1},
    ],
}
console.log(recipe.ingredients[0].name)

let quantities = 0
for (let i=0; i < recipe.ingredients.length; i++) {
    quantities += recipe.ingredients[i].quantity;
}

console.log("The sum of the quantities is " + quantities);
