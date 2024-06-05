
// Checking Prime Number Function

var Prime = (num)=> {
    var i;
    var flag = true;
      
        if (num <=1) {flag = false;} 
        else
        {
        for(i = 2; i < num-1; i++) 
            {
            //console.log(num-1 + " "+"Modulus "+ i +" " +flag);
                if (num % i == 0){flag = false;} 
           }
    
        if(flag == true) 
            {
                return(num + " is a Prime Number");
            }
             else 
             {
                return num + " not a  Prime Number";
             }
        } 
        }
    console.log(Prime(8));