var name_1:string;
var emp_str='';
function revers(name_1:string){
    for(let i=name_1.length-1;i>0;i--){
    emp_str= emp_str + name_1[i];
    }
}
if (name_1 == emp_str){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}
revers("12345");
