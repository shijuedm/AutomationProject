
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

var num = 2;

if(num<1){
    console.log(num+" is not prime");
}

if(num>1){
    for( var i=2; i<num; i++) {
            if(num % i==0){
                console.log(num + " is not prime");
                break;
            }else{
                console.log(num + " is prime")
                break;
            }
    }      
}

if (num <= 1) return false;

if (num === 2) return true;

if (num % 2 === 0) return false;



number=8;
				var i;
                flag=0;
console.log("Firt "+number/2);

				for(i=2; i <= number/2; i++)
				{
                    
					if(number%i == 0)
					{
						flag = 1;
					}
                    console.log(number+" "+i+" "+number%i);
				}
				if(flag == 0)
				{
					console.log("prime number");
				}
				else
				{
					console.log("not a prime number")
				}
                console.log("flag"+flag)
                console.log(number)
                console.log(number%i)
;	
