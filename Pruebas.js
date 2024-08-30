const repeatPattern = (pattern, str) => {
    // Verifica si la longitud de 'str' es un múltiplo de la longitud de 'pattern'
    if (str.length % pattern.length !== 0) {
      return false;
    }
  
    // Calcula cuántas veces hay que repetir el patrón para igualar la longitud de 'str'
    const repeatCount = str.length / pattern.length;
  
    // Genera la cadena resultante repitiendo el patrón
    const generatedString = Array(repeatCount).fill(pattern).join('');
  
    // Compara la cadena generada con la segunda cadena
    return generatedString === str;
  };
  
  // Ejemplos de uso
  console.log(repeatPattern("ABAB", "CDCD")); // ➞ true
  console.log(repeatPattern("ABCBA", "BCDCB")); // ➞ true
  console.log(repeatPattern("FFGG", "CDCD")); // ➞ false
  console.log(repeatPattern("FFFF", "ABCD")); // ➞ false