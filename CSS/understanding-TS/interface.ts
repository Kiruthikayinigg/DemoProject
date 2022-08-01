interface person{
    firstName:string;
    lastName:string;
    sayHi:()=>string;
}

var customer:person={
    firstName:"sona",
    lastName:"sathees",
    sayHi:():string=>{return "hi there"}
}
console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi()) 