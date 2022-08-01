class college_details{
  clg_name:string;
  clg_place:string;
  clg_principle:string;
  constructor(clg_name:string,clg_place:string,clg_principle:string) {
      this.clg_name=clg_name;
      this.clg_place=clg_place;
      this.clg_principle=clg_principle;   
  }
}
const clg1= new college_details("K.L.N college","Madurai","k.l.nagaswamy");
console.log(clg1);

class pro_details extends college_details{
  professor_name:string;
  p_id: number;
  p_email:string;
  constructor(professor:string,p_id:number,p_email:string){
      super("K.L.N college","Madurai","k.l.nagaswamy");
      this.professor_name=professor;
      this.p_id= p_id;
      this.p_email=p_email;
  }
}
const clg2 = new pro_details("sona",101,"sona@gmail.com");
console.log(clg2);
class stu_detail extends pro_details{
  stu_first_name:string;
  last_name:string;
  department:string;
  marks:number[];
  age:number;
  gender:string;

  constructor(stu_first_name:string,last_name:string,department:string,marks:number[],age:number,gender:string,){
      super("sona",101,"sona@gmail.com");
      this.stu_first_name =stu_first_name;
      this.last_name=last_name;
      this.department=department;
      this.marks=marks;
      this.age=age;
      this.gender=gender;

  }

}


const stud1 = new stu_detail('priya',"karthik", "computer science",[80,96,78,67,88],20,"female");
const stud2 = new stu_detail('mano',"Nagarajan", "computer science",[77,86,98,57,48],20,"male");
const stud3 = new stu_detail('joe',"sathees", "computer science",[99,96,35,55,28],20,"female");
console.log(stud1,stud2,stud3);

const arr= [stud1.marks,stud2.marks,stud3.marks]
console.log(arr);
    for(var i=0;i<3;i++)
    {
      var avg=0;
      for(let j=0;j<3;j++)
      {
        avg+=arr[i][j];
      }
      console.log(avg/3);
    }











// class coll{
//     professor:string;
//     p_id: number;
//     p_email:string;
//     constructor(professor:string,p_id:number,p_email:string){
//         this.professor=professor;
//         this.p_id= p_id;
//         this.p_email=p_email;
//     }
//   }
//   const clg1 = new coll("sona",101,"sona@gmail.com");
//   console.log(clg1);
//   class detail extends coll{
//     stu_name:string;
//     department:string;
//     marks:number[];
//     age:number;
//     gender:string;
  
//     constructor(stu_name:string,department:string,marks:number[],age:number,gender:string){
//         super("sona",101,"sona@gmail.com");
//         this.stu_name =stu_name;
//         this.department=department;
//         this.marks=marks;
//         this.age=age;
//         this.gender=gender;
//     }
//   }
//   const stud1 = new detail('priya', "computer science",[80,96,78,67,88],20,"female");
//   const stud2 = new detail('mano', "computer science",[77,86,98,57,48],20,"male");
//   const stud3 = new detail('joe', "computer science",[99,96,35,55,28],20,"female");
//   console.log(stud1,stud2,stud3);