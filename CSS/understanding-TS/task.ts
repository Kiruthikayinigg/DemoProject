class college{
  professor:string;
  id: number;
  email:string;
  
  constructor(professor:string,id:number,email:string){
      this.professor=professor;
      this.id= id;
      this.email=email;
   
  }
}
const clg= new college("sona",101,"sona@gmail.com");
console.log(clg);

class details extends college{
  department:string;
  marks:number[];

  constructor(department:string,marks:number[]){
      super("sona",101,"sona@gmail.com");
      this.department=department;
      this.marks=marks;
  }
}
const data = new details("computer",[80,96,78,67,88]);
console.log(data);


