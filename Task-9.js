function reverseThisString(string){
    var str = string.split("");
    var output = str.reverse();
    var final = output.join("");
    return final;
}

function swapCase(string){
    var str = string.split("");
    var ary = [];

    for(i=0; i < str.length; i++){
        if(str[i] == str[i].toLowerCase()){
            ary.push(str[i].toUpperCase());
        }
        else if(str[i] == str[i].toUpperCase()){
            ary.push(str[i].toLowerCase());
        }
        else{
            ary.push(str[i]);
        }
    }

    var final = ary.join("");
}

const Fal = [23, 32, 41, 50, 59];
const newarr =  Fal.map(toCelcius)

function toCelcius(array){
    return ((array-32)*5)/9
}

const test = [20, 30, 50, 80, 90, 100];
const newtest = test.map(passOrFail)

function passOrFail(array){
    if(array >= 75){
        return true;
    }
    else{
        return false;
    }
}

function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    germanNumbers.forEach(final)
    let text = "";

    function final(item){
        for(i=0; i < cardinalNumbers.length; i++){
            text += cardinalNumbers[i] + "is" + item + "<br>";
        }
    }
}

function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 
    const odds = numbers.filter();
    
    function primenum(num){
        for(i=2; i < num; i++){
            if(num % i == 0){
                break;
            }
            else{
                return num;
            }
        }
    }
}

function css225(){
    for(i=0; i<100; i++){
        if(i % 3 == 0 && i % 5 ==0){
            console.log("CSC225 RULES I LOVE JAVASCRIPT");
        }
        else if(i % 5 == 0){
            console.log("I LOVE JAVASCRIPT");
        }
        else if(i % 3 == 0){
            console.log("CSC225 RULES");
        }
        else{
            console.log(i);
        }
    }
}