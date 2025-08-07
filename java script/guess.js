//I will choose number and system should guess
function Guess()
{
const myguess=6;
const systemguess=Math.floor(Math.random()*10+1);
let count=0;
        if(systemguess!==myguess)
        {
            while(count<=3){
            count++;
            if(count===3)
            {
                console.log("you lose!");
                console.log("my guess:"+myguess+" systemguess:"+systemguess);
            }

        }
    }
    else
    {
        console.log("you won!");
        console.log("my guess:"+myguess+" systemguess:"+systemguess); 
    }
}
Guess();  
