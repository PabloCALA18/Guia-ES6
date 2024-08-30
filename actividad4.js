lista =  [[2, 7, 6],
          [9, 5, 1],
          [4, 3, 8]]
 let acum = 0;
 let modulo;
 // FILAS
   for(let indexA = 0; indexA < lista.length; indexA ++){
    let result = lista[indexA].reduce ((v1, v2) => v1 + v2 );

    modulo = result;
    acum   += result;

    if(acum % modulo === 0){
       return true;
    }
    else {
       return false;
    }
   }
  
 
 
   
        

  


 



resultado = lista[0].reduce ((v1, v2) => v1 + v2  );
 
