function Players(firstname,lastname,height,foot,age,club)
{
    this.firstname=firstname,
    this.lastname=lastname,
    this.height=height,
    this.foot=foot,
    this.age=age,
    this.club=club
}
var player1=new Players("Lionel","Messi","170cm","Leftfoot","38 years old","InterMiami");
console.log(player1);
var player2=new Players("Lamine","Yamal","180cm","Leftfoot","17 years old","Barcelona");
console.log(player2.club+" | "+player2.age);

