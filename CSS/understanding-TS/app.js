// const heading=document.getElementByClass("head") as HTMLParagraphElement!;
// heading.value="this is heading";
// const paragraph = document.getElementById('user-input');
// if(paragraph){
//     (paragraph as HTMLInputElement).value = "user.input";
// }
// class Point {
//     x = 0;
//     y = 0;
//   }
//   const pt = new Point();
//   // Prints 0, 0
//   console.log(`${pt.x}, ${pt.y}`);
// class person1{
//     name:string;
//     constructor(name:string){
//         this.name=name;
//     }
// }
// class employee extends person1{
//     empcode1:number;
//     constructor(empcode:number,name:string){
//         super(name);
//         this.empcode1=empcode1;
//     }
//     display(){
//         console.log("Name = " + this.name +  ", Employee Code = " + this.empcode1);
//     }
// }
// let emp = new employee(100,"bill");
// emp.display();
// interface keypair{
//     key:number;
//     value:string;
// }
// let kv:keypair{key:1,value:"steve"};
//generics
// function echo<T>(arg:T):T{
//     return arg;
// }
// var myStr = echo(1);
// class person{
//     firstname:string;
//     lastname:string;
//     constructor(firstname:string, lastname:string){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     getfullname(){
//         return this.firstname+" "+this.lastname;
//     }
// }
// class admin extends person{
// }
// class manager extends person{
// }
//decorators
// function Logger(logString:string){
//    return function(constructor: Function){
//     console.log('LogString');
//     console.log(constructor);
//    };
// }
// @Logger("LOGGING-PERSON")
// class person{
//     name = "sona";
//     constructor(){
//         console.log('creating person object...');
//     }
// }
// const pers= new person();
// console.log(pers);
// @classDecorator
// class Person {
//   @propertyDecorator
//   public name: string;
//   @accessorDecorator
//   get fullName() {
//     // ...
//   }
//   @methodDecorator
//   printName(@parameterDecorator prefix: string) {
//     // ...  
//   }
// }
var ProjectInput = /** @class */ (function () {
    function ProjectInput() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        var importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.attach();
    }
    ProjectInput.prototype.attach = function () {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    };
    return ProjectInput;
}());
var prjInput = new ProjectInput();
