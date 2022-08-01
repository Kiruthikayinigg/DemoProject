// let subject:string;
// let data1:boolean= true;
// console.log(data1);


function work(){
    console.log("this is number 5");
}
work();
function cls(){

}










class Department {
    // private readonly id: string;
    // private name: string;
    private employees: string[] = [];
  
    constructor(private readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
    }
  
    describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`);
    }
  
    addEmployee(employee: string) {
      // validation etc
      // this.id = 'd2';
      this.employees.push(employee);
    }
  
    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }
  
  class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
    }
  }
  
  class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
    }
  
    addReport(text: string) {
      this.reports.push(text);
    }
  
    printReports() {
      console.log(this.reports);
    }
  }
  
  const it = new ITDepartment('d1', ['Max']);
  
  it.addEmployee('Max');
  it.addEmployee('Manu');
  
  // it.employees[2] = 'Anna';
  
  it.describe();
  it.name = 'NEW NAME';
  it.printEmployeeInformation();
  
  console.log(it);
  
  const accounting = new AccountingDepartment('d2', []);
  
  accounting.addReport('Something went wrong...');
  
  accounting.printReports();
  
  // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
  
  // accountingCopy.describe();















  // class point{
//     x:number;
//     y:number;
// }
// const pt= new point();
// pt.x=1;
// pt.y=0;
// console.log(`${pt.x},${pt.y}`);

// class goodgreeter{
//     name:string;

//     constructor(){
//         this.name="hello";
//     }
// }

// class createAccount{
//     makeEmail(person)
//     {
//         return `${person}@test.com`
//     }
// }
// class users extends createAccount{ 
//     adduser(user)
//     {
//         return `${user} is added as an user`
//     }
// }
// const u1=new users();
// console.log(u1.adduser("sona"));
// console.log(u1.makeEmail("sona"));

class college{
    professor:string;
    id: number;
    email:string;
    student:string[];
    
    constructor(professor:string,id:number,email:string,student:string[]){
        this.professor=professor;
        this.id= id;
        this.email=email;
        this.student=student;
    }
  }
const clg= new college("sona",101,"sona@gmail.com",['archaha','mano','joe','ramya']);
console.log(clg);

class details extends college{
    department:string;

    constructor(department:string){
        super("sona",101,"sona@gmail.com",['archaha','mano','joe','ramya']);
        this.department=department;
    }
}
const data = new details("computer");
console.log(data);



