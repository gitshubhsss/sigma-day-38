let num = [1, 2, 3, 4];
let newNums = num.map((values, index) => {
  //hre we can pass (values,index,array)
  return values * index;
});
console.log(newNums);

let arr = [
  {
    name: "shubham",
    marks: 60,
  },
  {
    name: "avantika",
    marks: 36,
  },
  {
    name: "shraddha",
    marks: 60,
  },
];

let gpa=arr.map((value)=>{
    return value.marks/10;
})

console.log(gpa);
