let marksWeight = 78;
let marksHeight = 1.69;

let johnWeight =92;
let johnHeight =1.95;


let bmiMark = marksWeight / marksHeight**2;
let bmiJohn = johnWeight/johnHeight**2;

console.log(bmiJohn, bmiMark)

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

if (bmiMark>bmiJohn){
                    console.log("Mark's BMI is higher than John's 👌" )
}else{
                    console.log("John's BMI is higher than Mark's! 😊")
}


//2nd situation


marksWeight = 95;
marksHeight = 1.88;

johnWeight =85;
johnHeight =1.76;


bmiMark = marksWeight / marksHeight**2;
bmiJohn = johnWeight/johnHeight**2;

console.log(bmiJohn, bmiMark)

markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

if (bmiMark>bmiJohn){
                    console.log("Mark's BMI is higher than John's 👌" )
}else{
                    console.log("John's BMI is higher than Mark's! 😊")
}


