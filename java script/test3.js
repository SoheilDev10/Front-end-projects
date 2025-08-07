var today=["saturday","sunday","monday","teusday","wednesday","thursday","friday"];
var date=today[2];
var day;
switch(today)
{
    case 0:
        day="saturday";
        break;
    case 1:
        day="sunday";
        break;
    case 2:
        day="monday";
        break;
    case 3:
        day="teusday";
        break;
    case 4:
        day="wednesday";
        break;
    case 5:
        day="thursday";
        break;
    case 6:
        day="friday";

}
window.alert("today is "+day);