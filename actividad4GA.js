const empleados = [
    { nombre: 'Laura', salario: 3500 },
    { nombre: 'Pedro', salario: 4000 },
    { nombre: 'Ana', salario: 2800 }
    ];
const max = empleados.filter((ele) => ele.salario > 3000 ? ele.salario * 12 : delete ele )
                     .map((max) =>{
                      max
                      max.salario = salario*12  
                     } )

console.log(max);
