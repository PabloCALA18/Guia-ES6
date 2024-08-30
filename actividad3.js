const rot=(palabra,num)=>{

    let abc="abcdefghijklmnñopqrstuvwxyz"
    let result="";
    
    for (let i=0; i<palabra.length; i++){
    
        let index =abc.indexOf (palabra[i]);
        let index2= (index + num) % abc.length;
    
        if (index2 < 0){
        
        index2+=abc.length;
        
        }
        
        result+=abc[index2];
    }
    
    return result;
    }
    
    console.log(rot("abcdefghijklmnopqrstuvwxyz ",2))