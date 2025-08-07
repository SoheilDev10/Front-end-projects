function GIFT(score1,score2,score3,score4,score5,score6,score7)
{
    const students=[score1,score2,score3,score4,score5,score6,score7];
        for (const value of students)
        {
             if(value>=18)
             {
               console.log(value + " gift");
             }
               
        }
}
let score1=15,score2=18,score3=16,score4=14,score5=19,score6=12,score7=20;
GIFT(score1,score2,score3,score4,score5,score6,score7);