const nombres = ['Ana', 'Juan', 'Ana', 'Pedro', 'Juan', 'Ana'];

 contAna  =   nombres.reduce((acum,person) => person == 'Ana' ? acum +1 : acum +0,0)
 contJuan  =   nombres.reduce((acum,person) => person == 'Juan' ? acum +1 : acum +0,0)
 contPedro  =   nombres.reduce((acum,person) => person == 'Pedro' ? acum +1 : acum +0,0)
 
 const newList = {'Ana': contAna, 'Juan': contJuan, 'Pedro': contPedro }

 console.log(newList);
 
 
