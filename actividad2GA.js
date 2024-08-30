const personas = [

    { nombre: 'Juan', apellido: 'Pérez', edad: 28 },
    { nombre: 'María', apellido: 'García', edad: 22 },
    { nombre: 'Luis', apellido: 'Fernández', edad: 35 }
    ];
delete personas.edad;
nuevo  = personas.map((name) => name.nombre + " " + name.apellido )
listaF = nuevo.map((lista) => "nombreCompleto :" + lista)
console.log(listaF);


