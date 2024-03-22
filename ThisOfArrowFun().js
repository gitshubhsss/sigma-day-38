let student={
    name:"shubham",
    marks:84,
    prop:this,
    getName:function(){
        console.log(this);
        return this.name;
    },

    getMarks: ()=>{
        console.log(this);
        return this.marks;
    }
}