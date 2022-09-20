var txt= <HTMLInputElement>document.getElementById("myText");
function empDetails(){
  let emp=false;
  let employee: { emp_id: number, emp_name: string, emp_desg: string,age:number}[] = [
    { emp_id: 0, emp_name: "Sona",  age:25, emp_desg: "Tech Lead" },
    { emp_id: 1, emp_name: "Divya", age:46, emp_desg: "Manager" },
    { emp_id: 2, emp_name: "Kiran", age:27, emp_desg: "Software Developer" },
    { emp_id: 3, emp_name: "Mano",  age:34, emp_desg: "Data Analyst" },
    { emp_id: 4, emp_name: "Balaji",age:32, emp_desg: "System Engineer" },
    ];
      for(let i=0;i<employee.length;i++){
        if(txt.value===employee[i].emp_name){
          emp= true;
          console.log(employee[i]);
          }
   }
   if(emp==false){
    alert ("Not Found");
  }
}




// for(let i=0;i<employee.length;i++){
//   if(txt.value===employee[i].emp_name){
//   console.log(employee[i]);
//   }
// }

















// for(let i=0;i<employee.length;i++){
//   if(txt.value===employee[i].emp_name){
//   console.log(employee[i]);
//   }
// }

// while(i>0){
//   if(txt.value===employee[i].emp_name){
//   console.log(employee[i]);
//   i++;
//   }
//   else{
//       console.log("no data")
//   }

// }



// function myfunction(emp_name){
//   if(txt.value===emp_name){
//      console.log(emp_name)
//   }