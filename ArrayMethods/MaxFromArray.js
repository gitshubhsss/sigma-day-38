// let arr=[5,6,563,68516,321];
// let max=0;
// for(i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max);

let arr=[1, 2, 3, 4, 1,8];

let max=arr.reduce((res,value)=>{
    //res=0 value =1 0<1; so 1 will be retun
    //res=1 value =2 1<2; so 2 will be return
    //res=2 value =3 2<3; so 3 will be return
    //res=3 value =4 3!<4 so res= 3 will be return
    //res=4 value=1 4!<1 so res 4 will be return
    if(res<value){
        return value;
    }
    else{
        return res;
    }
       
})
console.log(max);
