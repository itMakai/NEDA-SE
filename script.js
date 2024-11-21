//if statement
const age = 55;

if (age <= 17){
    console.log("you are still young");

} else if ( age>=18 && age <=50){
    console.log("your eligible");

} else if ( age>=50 && age <=65){
    console.log("early retirement");
} else{
    console.log("ritired");
}

//switch statement

let day = 2;

switch (day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
    
    case 3:
        console.log("Wednesday");
        break;
    
    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("enter a number");

}

//iteration/loop

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let num = 1;

while(num<=10){
    console.log("num: " , num);

    num++;
}

