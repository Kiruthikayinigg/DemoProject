var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var college_details = /** @class */ (function () {
    function college_details(clg_name, clg_place, clg_principle) {
        this.clg_name = clg_name;
        this.clg_place = clg_place;
        this.clg_principle = clg_principle;
    }
    return college_details;
}());
var clg1 = new college_details("K.L.N college", "Madurai", "k.l.nagaswamy");
console.log(clg1);
var pro_details = /** @class */ (function (_super) {
    __extends(pro_details, _super);
    function pro_details(professor, p_id, p_email) {
        var _this = _super.call(this, "K.L.N college", "Madurai", "k.l.nagaswamy") || this;
        _this.professor_name = professor;
        _this.p_id = p_id;
        _this.p_email = p_email;
        return _this;
    }
    return pro_details;
}(college_details));
var clg2 = new pro_details("sona", 101, "sona@gmail.com");
console.log(clg2);
var stu_detail = /** @class */ (function (_super) {
    __extends(stu_detail, _super);
    function stu_detail(stu_first_name, last_name, department, marks, age, gender) {
        var _this = _super.call(this, "sona", 101, "sona@gmail.com") || this;
        _this.stu_first_name = stu_first_name;
        _this.last_name = last_name;
        _this.department = department;
        _this.marks = marks;
        _this.age = age;
        _this.gender = gender;
        return _this;
    }
    stu_detail.prototype.getfullname = function () {
        console.log("First Name = " + this.stu_first_name + ", Last Name = " + this.last_name);
    };
    return stu_detail;
}(pro_details));
var stud1 = new stu_detail('priya', "karthik", "computer science", [80, 96, 78, 67, 88], 20, "female");
var stud2 = new stu_detail('mano', "Nagarajan", "computer science", [77, 86, 98, 57, 48], 20, "male");
var stud3 = new stu_detail('joe', "sathees", "computer science", [99, 96, 35, 55, 28], 20, "female");
console.log(stud1, stud2, stud3);
var arr = [stud1.marks, stud2.marks, stud3.marks];
console.log(arr);
for (var i = 0; i < 3; i++) {
    var avg = 0;
    for (var j = 0; j < 3; j++) {
        avg += arr[i][j];
    }
    console.log(avg / 3);
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
