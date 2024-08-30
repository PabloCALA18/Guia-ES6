const personas = [ { nombre: 'Juan', edad: 30 }, { nombre: 'María',edad: 25 }, { nombre: 'Pedro', edad: 35 } ];
nuevo = personas.map((elem) => elem.nombre);
n     = nuevo.map((ele) => ele.toUpperCase())
console.log(n)