/*let continent = 'Africa'
let country = 'Kenya'
let population = '40 Million'
console.log(continent, Kenya, population);
*/
/*
const age = 18;
const isOldEnough = age >=18;
 if (isOldEnough){
    console.log("Abas can have driving License")
 }

//String and template literals 
const Name = "Abas"
const job = "Coder"
const birthYear = 1999;
const year = 2023;
const abas = "I'm" +' ' + Name + ' ' +',a' +' ' + + (year-birthYear) + ' ' + 'years old' + ' ' +job
console.log(abas);
//tempelete literals- assemble multiple pieces into one final string uses backticks
const abasNew = `I'm ${Name}, a ${year-birthYear} year old ${job}`
console.log(abasNew)
console.log(`String 
with
multiple
lines`
)
//Taking decisions(if...else)
//Driving license
const age = 21;
if(age>=18){
    console.log(`Abas can have a driving license👍`);
}else{
    const yearsLeft = 18 - age;
    console.log(`Abas can wait for ${yearsLeft} years`);
}
 */

//Centuary which a person was born
const birthYear = 1999;
let centuary;
if(birthYear <= 2000){
    centuary = 20;
}else{
    centuary = 21;
}
console.log(centuary);
//codding challange 2
const johnWeight = 92;
const johnHeight = 1.95;
const markWeight =78;
const markHeight = 1.69;

const  johnBMI = 92/(1.95*1.95);
const  markBMI =  78/(1.69*1.69);
if (johnBMI>markBMI){
console.log(`John's BMI is higher than Mark's!`);
}
else{
    console.log(`Mark's BMI is higher than John's!`);
}
//Type conversion and Coercion
//conversion - manually convert from one type to another
//Coercion-js converts types behind the scenes for us. 
//Conversion
const inputYear = '1999';
console.log(Number(inputYear) +18);

//type coercion
console.log("I'm "  +23 + 'years old');
console.log ('20'+1)