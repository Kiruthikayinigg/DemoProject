// // var row=(<HTMLInputElement>document.getElementById("row")).value;
// // var column=(<HTMLInputElement>document.getElementById("column")).value;
// // var box = document.createElement('div');
// //     box.className = 'grid';
// //     for (var i = 0; i < column; ++i) {
// //         var column = document.createElement('div');
// //         column.className = 'column';
// //         for (var j = 0; j < rows; ++j) {
// //             var row = document.createElement('div');
// //             row.className = 'row';
// //             row.textContent = i + '-' +j; 
// //             column.appendChild(row); 
// //         }
// //         box.appendChild(column); 
// //     }
// //     document.body.appendChild(box);
// var inputTag = <HTMLInputElement>document.getElementById("row");
// var inputTag1 = <HTMLInputElement>document.getElementById("column");
// function box(){
//     var inputValue = parseInt(inputTag?.value);
//     var inputValue1 = parseInt(inputTag1?.value);
//     console.log(inputValue);
//     console.log(inputValue1);
// }   
// var columns = 3;
//     var rows = 4;
//     var grid = document.createElement('div');
//     grid.className = 'grid';
//     for (var i = 0; i < columns; ++i) {
//         var column = document.createElement('div'); // create column
//         column.className = 'column';
//         for (var j = 0; j < rows; ++j) {
//             var row = document.createElement('div'); // create row
//             row.className = 'row';
//             row.textContent = i + '-' +j; // set text
//             column.appendChild(row); // append row in column
//         }
//         grid.appendChild(column); // append column inside grid
//     }
//     document.body.appendChild(grid);
// <button onclick="myFunction()">Click Here</button>
// <p id="did"></p>
// <script>
// function myFunction() {
// var text = "";
// var i;
// var j;
// for (i = 0; i < 5; i++) {
// for (j = 0; j < 2; j++) {
// text += "The number is i = " + i + " and j = " + j + "<br>";
// }
// }
// document.getElementById("did").innerHTML = text;
// }
// </script>
// </body>
// </html>
var par = document.getElementById("para");
console.log(par);
var par1 = document.querySelector("#para");
console.log(par1);
for (var i = 0; i < 10; i++) {
    var name1 = document.createElement("div");
    par1.appendChild(name1);
}
console.log(name1);
