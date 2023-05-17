let person = {
name: "Rui",
age: 20,
city: "Medellin",
profession: "Student",
}

console.log(person)

function presentation(_person) {
    return "Mi nombre es " + person.name + " , tengo " + person.age + " años y vivo en " + person.city + "."
}

var variable = presentation()
console.log(variable)

person.hobbies = ["painting", "crochet", "gardening"]

console.log(person.hobbies)

for (let i = 0; i < person.hobbies.length; i++) {
    console.log(person.hobbies[i]);
}