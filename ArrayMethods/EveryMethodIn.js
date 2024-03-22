//Every method will return two values eighter true or false 

let arr=[1,2,3,5,8,8,62,52,5526,6567,3560];

let isTrueOrNot=arr.every((value)=>{
    if(value>0){
        return value;
    }
})

console.log(isTrueOrNot);