//filter method is used when we wants to filterout some elements based on the current array
//it will give us an input in the form of arrays

//write an program to take the even numbers from an array

let arr=[65,86,548,23,568,35,688,96853,6544];

let evenNums=arr.filter((values)=>{
    if(values%2===0){
        return values;
    }
});

console.log(evenNums);
