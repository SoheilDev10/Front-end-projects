function FootBall(firstname,lastname,height,age,foot,club,post)
    {
        this.firstname=firstname,
        this.lastname=lastname,
        this.height=height,
        this.age=age,
        this.foot=foot,
        this.club=club,
        this.post=post
    }
    const player1=new FootBall("Lamine","Yamal","180cm",17,"leftfoot","Barcelona","RW");        
    const player2=new FootBall("Pedri","Gonzales","170cm",22,"rightfoot","Barcelona","CM");
    const player3=new FootBall("Lionel","Mwssi","170cm",38,"leftfoot","Inter Miami","RW");
    var allplayers=[player1,player2,player3];

    function BuyPlayer(a,b)
    {
        if(a<=25 & b=="RW")
        {
            console.log("We Can Buy him");
        }
        else
        {
            console.log("We Can Not Buy him Because He is Old Or He is Not a Right Winger");
            
        }
    }

    //BuyPlayer(player1.age,player1.post);
    //BuyPlayer(player2.age,player2.post);
    //BuyPlayer(player3.age,player3.post);
    //BuyPlayer(allplayers[0].age,allplayers[0].post);
    BuyPlayer(allplayers[1].age,allplayers[1].post);


    
    
