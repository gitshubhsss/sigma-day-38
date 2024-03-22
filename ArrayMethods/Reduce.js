//Reduce takes two parameters 1)result 2)element

let arr = [1, 2, 3, 4, 1];

let sum = arr.reduce((res, value) => {
  return res + value; 
  //res=0 and value=1 0+1=1
  // res=1 and value=2 return 1+2=3
  //res=3 and value=3 3+3=6;
  //res=6 and value=4 6+4=10;
  //res=10 and value=1 10+1=11;
});
console.log(sum);
