let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    saluda: function() {
        return "Hola, me llamo " + this.nombre;
    }
}
// console.log(pedro.edad);

pedro.estatura = 1.8;
delete pedro.activo

for (const [key, value] of Object.entries(pedro)) {
    console.log(`${key}: ${value}`);
  }

console.log(pedro.saluda());