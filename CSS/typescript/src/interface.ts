interface IEmployee{
    empCode: number;
    empName: string;
    getSalary:(num:number)=>number;
    getManagerName(num:number):string;
}
const emp: IEmployee ={
    empName:"abc",
    empCode: 101,
    getSalary:(n)=>{
        return n;
    },
    getManagerName: function(n){
        return ``;
    }
};