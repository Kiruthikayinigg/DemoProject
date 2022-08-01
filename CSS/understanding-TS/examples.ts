// function f() {
//   var message = "Hello, world!";
//   return message;
// }


// function f() {
//   var a = 10;
//   return function g() {
//     var b = a + 1;
//     return b;
//   };
// }
// var g = f();
// g();


// function Sum(x: number, y: number) : number {
//   return x + y;
// }

// Sum(2,3);


// let greeting = function(){
//   console.log("hello");
// }
// greeting();


// function Greet(greeting: string, name: string ) : string {
//   return greeting + ' ' + name + '!';
// }

// Greet('Hello','Steve');//OK, returns "Hello Steve!"
// // Greet('Hi'); // Compiler Error: Expected 2 arguments, but got 1.
// // Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.


// function addNum(a:number,b:number){
//   return a+b;
// }
// var sum:number=addNum(10,10);
// console.log("the sum of num is",+sum);



// let num:number = 1; 

// function demo() {
//     let num:number = 2;

//     if(true) { 
//         let num:number = 3;
//         console.log(num); //Output: 3
//     }

//     console.log(num);//Output: 2
// }
// console.log(num); //Output: 1
// demo();






// class Employee {
//   empCode: number;
//   empName: string;

//   constructor(code: number, name: string) {
//           this.empName = name;
//           this.empCode = code;
//   }

//   getSalary() : number {
//       return 10000;
//   }
// }








// abstract class Person {
//   name: string;
  
//   constructor(name: string) {
//       this.name = name;
//   }

//   display(): void{
//       console.log(this.name);
//   }

//   abstract find(string): Person;
// }

// class Employee extends Person { 
//   empCode: number;
  
//   constructor(name: string, code: number) { 
//       super(name); // must call super()
//       this.empCode = code;
//   }

//   find(name:string): Person { 
//       // execute AJAX request to find an employee from a db
//       return new Employee(name, 1);
//   }
// }

// let emp: Person = new Employee("James", 100);
// emp.display(); //James

// let emp2: Person = emp.find('Steve');



/* average_grade.ts
   Jake Rodriguez Pomperada, MAED-IT, MIT
   www.jakerpomperada.com and www.jakerpomperada.blogspot.com
   jakerpomperada@gmail.com
   July 13, 2022  5:57 AM   Wednesday
   Bacolod City, Negros Occidental
*/

// Solving average grade

var average_grade = (87+76+94+85+81)/5; 

// This code rouding off decimal grades
let round_result = average_grade.toFixed(0);

console.log();
console.log("Average Grade Solver in TypeScript\n");
// console.log("The average grade of 87,76,94,85 and 81 is " + round_result + ".\n");
// console.log("End of Program\n");



