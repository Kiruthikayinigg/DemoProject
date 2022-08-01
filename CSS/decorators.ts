command line to decorators

tsc --target ES5 --experimentalDecorators filename.ts
Types of Decorators
   1. Class Decorator
   2. Property Decorator
   3. Accessor Decorator
   4. Method Decorator
   5.Parameter Decorator


function test_one(){
    console.log("test_one function");
    return function(text: string){
        console.log("first decorator function - returned");
    };
}
function test_two(){
    console.log("test_two function");
    return function(){
        console.log("another decorator from test_two function");
    };
}
class decorators
@Frozen
class IceCream{
}
function Frozen(constructor: Function){
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
console.log(Object.isFrozen(IceCream));
class Froyo extends IceCream{
}
function test_one(){
    console.log("from test_one function");
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log("target function ");
    };
}
class Example {
    @test_one()
    run(){}
}
const e = new Example();
e.run();
Decorator Example
*decorator

function Self(constructorFunction: Function){
    console.log("Invoking decorator function here ");
    constructorFunction.prototype.selfEmp = true;
}
@Self
class Employee{
    private _empName: string;
    constructor(empName: string){
        console.log("Invoking constructor");
        this._empName = empName;
        console.log(empName);
    }
}
let employee: Employee = new Employee("karthick");
Union type
function printId(id: number | string){
    console.log("Your ID is : " + id);
}
printId(22);
printId("karthick");
printId({id: "hello"}); => It gives Error
function sealed(constructor: Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
@sealed
class TestClass{
    type = "report";
    title:string;
    constructor(t: string){
        this.title = t;
    }
}
const test = new TestClass("karthick");
console.log(test);
decorator Example in Ts
const classDecorator = (target: Function) => {
    return console.log("from class Decorator");
}
@classDecorator
class helloEx{
}
const hello_1 = new helloEx();
console.log(hello_1);
Method decorator Example in Ts
function methodDecorator(){
    return function(target: Object, key: string | symbol, descriptor: PropertyDescriptor){
        console.log(key);
        console.log("from method Decorator");
        return descriptor;
    };
}
function methodTwoDecorator(){
    return function(target: Object, key: string | symbol, descriptor: PropertyDescriptor){
        console.log(key);
        console.log("from method two decorator");
        return descriptor;
    };
}
decorator Example in Ts
class Test {
  @methodDecorator()
  testMethod(a: number, b: number) {
    console.log("from testMethod ");
    return a + b;
  }
  @methodTwoDecorator()
  multiplyMethod(a1: number, b1: number) {
    console.log("from multiply method");
    return a1 * b1;
  }
}
const testObj: Test = new Test();
let resultEx = testObj.testMethod(1, 2);
let resultMul = testObj.multiplyMethod(2,2);
console.log("Result is " + resultEx);
console.log("Multiply method is : " + resultMul);
function f(key: string): any {
  console.log("evaluate : ", key);
  return function () {
    console.log("Call : " + key);
  };
}
@f("Class Decorator")
class A{
    @f("static method")
    static prop?: number = 25;
}
decorator Example in Ts
type Constructor = {new (...args: any[]): any[]};
function toString<T extends Constructor>(BaseClass: T){
    return class extends BaseClass{
        toString() {
            return JSON.stringify(this);
        }
    };
}
@toString
class Example_01{
     data_1 = "karthick";
     data_2 = 23;
}
const class_1 = new Example_01();
console.log(class_1.toString());










