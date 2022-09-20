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


// var par = <HTMLDivElement>document.getElementById("para");
// console.log(par);

// var par1= <HTMLDivElement>document.querySelector("#para");
// console.log(par1);

// for(let i=0;i<10;i++){
//     var name1= document.createElement("div");
//     par1.appendChild(name1);
// }
// console.log(name1);

















var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("column");
var mine = <HTMLInputElement>document.getElementById("mine");
var mainDiv = <HTMLDivElement>document.getElementById("box");
var bombAr: any[] = [];
var num: any[] = [];
var Rnumbers: any[] = [];
interface number_coordinates {
  x: number;
  y: number;
}
function quantity() {
  var row1 = parseInt(row?.value);
  var column1 = parseInt(column?.value);
  var mine1 = parseInt(mine?.value);
  console.log(row1);
  console.log(column1);
  console.log(mine1);
  let unique = 0;
  for (let i = 0; i < row1; i++) {
    var breakElement = document.createElement("br");
    mainDiv.classList.add("container-1");
    for (let j = 0; j < column1; j++) {
      var Divbox = document.createElement("div");
      var boxID = "cell" + unique;
      console.log(boxID);
      Divbox.classList.add(boxID);
      bombAr.push(boxID);
      Divbox.classList.add("cell");
      mainDiv.appendChild(Divbox);
      let numbers: number_coordinates = {
        x: i,
        y: j,
      };
      
      num.push(numbers);
      unique++;
    }
    mainDiv.appendChild(breakElement);
  }

  let random: any[] = [];
  console.log(num);
  console.log("bombAr")
  console.log(bombAr);
  for (let k = 0; k < mine1; k++) {
    let Rno = Math.floor(Math.random() * bombAr.length);
    console.log(Rno);
    random.push(Rno);
    console.log("random");
    console.log(random)
    var Rbomb = "cell" + Rno;
    console.log(Rbomb);
    document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
    // var check = Rnumbers.includes(Rno);
    // var check = true;
    // if (check === false) {
    //   Rnumbers.push(Rno);
    // } else {
    //   k--;
    // }
  }
  console.log(Rnumbers);
  for (let l = 0; l < bombAr.length; l++) {
    var click1 = document.getElementsByClassName("bombs")[l];
    click1?.addEventListener("click", function () {
      alert("GAME OVER");
    });
  }
  fncomb();
}

function fncomb() {
  var bombcount = 0;
  var row2 = parseInt(row?.value);
  var column2 = parseInt(column?.value);
  for (let m = 0; m < row2; m++) {
    for (let n = 0; n < column2; n++) {
      var combination_check = [];
      if (m + 1 < column2) {
        combination_check.push(m + 1, n);
      }
      if (n + 1 < row2) {
        combination_check.push(m, n + 1);
      }

      if (m + 1 < column2 && n + 1 < row2) {
        combination_check.push(m + 1, n + 1);
      }
      if (m - 1 >= 0) {
        combination_check.push(m - 1, n);
      }
      if (n - 1 >= 0) {
        combination_check.push(m, n - 1);
      }
      if (m - 1 >= 0 && n - 1 >= 0) {
        combination_check.push(m - 1, n - 1);
      }
      if (n - 1 >= 0 && m + 1 < column2) {
        combination_check.push(m + 1, n - 1);
      }
      if (m - 1 >= 0 && m < column2 && n + 1 < row2) {
        combination_check.push(m - 1, n + 1);
      }
      console.log(combination_check);
    }
  }
}

// function example(x, y){
// for(b=0;b=num.length;b++){

// }

// }

function reset() {
  location.reload();
}

// function startGame() {
//     for (let k = 0; k < mine1; k++)
//      var img = document.createElement("img");
//      box1.appendChild(img);
//      img.src="bomb.jpeg";
//      img.setAttribute("class","bomb");
//      mine1 = placeBombs();
// }

// function placeBombs() {
//     var l, rows = [];

//     for (k=0; k<mine1; k++) {
//         placeSingleBomb(row1);
//     }
//     return rows;
// }

// function placeSingleBomb(bombs) {

//     row1 = Math.floor(Math.random() * mine1);
//     column1 = Math.floor(Math.random() * mine1);
//     row1 = bombs[row1];

//     if (!row1) {
//         row1 = [];
//         bombs[row1] = row1;
//     }

// }

// }

//   function getRandom(max:any){
//     for(let k=0;k<mine1;k++){
//         // var img = document.createElement("img");
//         // box1.appendChild(img);
//         // img.src="bomb.jpeg";
//         // img.setAttribute("class","bomb");

//       }
//     return Math.floor(Math.random()*max)
//     }

//   for(let k=0;k<mine1;k++){
//       // function getRandom(max){
// //     return Math.floor(Math.random()*max)
// // }
// // console.log(getRandom());
//   }

//   for(let k=0;k<mine1;k++){
//     var imgElement = document.createElement("img");
//     imgElement.classList.add("cell");
//     image.appendChild(imgElement);
//   }

// const randomNumber = Math.random()
// console.log(randomNumber);

// var nrow, ncol, row, col;
// nrow = Math.floor(Math.random() * components.num_of_rows);
// ncol = Math.floor(Math.random() * components.num_of_cols);
// row = bombs[nrow];

// function shuffle (array) {
//     var i = 0
//       , j = 0
//       , temp = null

//     for (i = array.length - 1; i > 0; i -= 1) {
//       j = Math.floor(Math.random() * (i + 1))
//       temp = array[i]
//       array[i] = array[j]
//       array[j] = temp
//     }
//   }













var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("column");
var mine = <HTMLInputElement>document.getElementById("mine");
var mainDiv = <HTMLDivElement>document.getElementById("box");
var bombAr: any[] = [];
var num: any[] = [];
var Rnumbers=[];
interface number_coordinates {
  x: number;
  y: number;
}
function quantity() {
  var row1 = parseInt(row?.value);
  var column1 = parseInt(column?.value);
  var mine1 = parseInt(mine?.value);
  console.log(row1);
  console.log(column1);
  console.log(mine1);
  let unique = 0;
  for (let i = 0; i < row1; i++) {
    var breakElement = document.createElement("br");
    mainDiv.classList.add("container-1");
    for (let j = 0; j < column1; j++) {
      var Divbox = document.createElement("div");
      var boxID = "cell" + unique;
      console.log(boxID);
      Divbox.classList.add(boxID);
      bombAr.push(boxID);
      Divbox.classList.add("cell");
      mainDiv.appendChild(Divbox);
      let numbers: number_coordinates = {
        x: i,
        y: j,
      };
      num.push(numbers);
      unique++;
    }
    mainDiv.appendChild(breakElement);
  }
  console.log(num);
  console.log(bombAr);
  for (let k = 0; k < mine1; k++) {
    let Rno = Math.floor(Math.random() * bombAr.length);
    console.log(Rno);
    var Rbomb = "cell" + Rno;
    console.log(Rbomb);
    document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
    var check = Rnumbers.includes(Rno);
    if (check === false) {
      Rnumbers.push(Rno);
    } else {
      k--;
    }
  }
  console.log(Rnumbers);
  for (let l = 0; l < bombAr.length; l++) {
    var click1 = document.getElementsByClassName("bombs")[l];
    click1?.addEventListener("click", function () {
      alert("GAME OVER");
    });
  }
  fncomb();
}

function fncomb() {
  // var bombcount = 0;
  var row2 = parseInt(row?.value);
  var column2 = parseInt(column?.value);
  for (let m = 0; m < row2; m++) {
    for (let n = 0; n < column2; n++) {
      var combination_check = [];
      if (m + 1 < column2) {
        combination_check.push(m + 1, n);
      }
      if (n + 1 < row2) {
        combination_check.push(m, n + 1);
      }

      if (m + 1 < column2 && n + 1 < row2) {
        combination_check.push(m + 1, n + 1);
      }
      if (m - 1 >= 0) {
        combination_check.push(m - 1, n);
      }
      if (n - 1 >= 0) {
        combination_check.push(m, n - 1);
      }
      if (m - 1 >= 0 && n - 1 >= 0) {
        combination_check.push(m - 1, n - 1);
      }
      if (n - 1 >= 0 && m + 1 < column2) {
        combination_check.push(m + 1, n - 1);
      }
      if (m - 1 >= 0 && m < column2 && n + 1 < row2) {
        combination_check.push(m - 1, n + 1);
      }
      console.log(combination_check);
    }
  }
}



function reset() {
  location.reload();
}

















var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("column");
var mine = <HTMLInputElement>document.getElementById("mine");
var mainDiv = <HTMLDivElement>document.getElementById("box");
var bombAr: any[] = [];
var num: any[] = [];
var Rnumbers: any[] = [];
interface number_coordinates {
  x: number;
  y: number;
}
function quantity() {
  var row1 = parseInt(row?.value);
  var column1 = parseInt(column?.value);
  var mine1 = parseInt(mine?.value);
  console.log(row1);
  console.log(column1);
  console.log(mine1);
  let unique = 0;
  for (let i = 0; i < row1; i++) {
    var breakElement = document.createElement("br");
    mainDiv.classList.add("container-1");
    for (let j = 0; j < column1; j++) {
      var Divbox = document.createElement("div");
      var boxID = "cell" + unique;
      console.log(boxID);
      Divbox.classList.add(boxID);
      bombAr.push(boxID);
      Divbox.classList.add("cell");
      mainDiv.appendChild(Divbox);
      let numbers: number_coordinates = {
        x: i,
        y: j,
      };
      console.log("numbers")
      num.push(numbers);
      unique++;
    }
    mainDiv.appendChild(breakElement);
  }
  console.log(num);

  let random: any[] = [];
  console.log("bombAr")
  console.log(bombAr);
  for (let k = 0; k < mine1; k++) {
    let Rno = Math.floor(Math.random() * bombAr.length);
    console.log(Rno);
    random.push(Rno);
    console.log("random");
    console.log(random)
    var Rbomb = "cell" + Rno;
    console.log(Rbomb);
    document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
    var check = Rnumbers.includes(Rno);
    if (check === false) {
      Rnumbers.push(Rno);
    } else {
      k--;
    }
  }
  console.log(Rnumbers);
  for (let l = 0; l < bombAr.length; l++) {
    var click1 = document.getElementsByClassName("bombs")[l];
    click1?.addEventListener("click", function () {
      alert("GAME OVER");
    });
  
  }

  // for(let i = 0 ; i < num.length; i++){
  //   for(let j = 0; j < num.length; j++){
  //     console.log(i, j)
  //   }
  // }
  fncomb();
}

function fncomb() {
  var bombcount = 0;
  var row2 = parseInt(row?.value);
  var column2 = parseInt(column?.value);
  for (let m = 0; m < row2; m++) {
    for (let n = 0; n < column2; n++) {
      var combination_check = [];
      if (m + 1 < column2) {
        combination_check.push([m + 1], [n]);
      }
      if (n + 1 < row2) {
        combination_check.push(m, n + 1);
      }

      if (m + 1 < column2 && n + 1 < row2) {
        combination_check.push(m + 1, n + 1);
      }
      if (m - 1 >= 0) {
        combination_check.push(m - 1, n);
      }
      if (n - 1 >= 0) {
        combination_check.push(m, n - 1);
      }
      if (m - 1 >= 0 && n - 1 >= 0) {
        combination_check.push(m - 1, n - 1);
      }
      if (n - 1 >= 0 && m + 1 < column2) {
        combination_check.push(m + 1, n - 1);
      }
      if (m - 1 >= 0 && m < column2 && n + 1 < row2) {
        combination_check.push(m - 1, n + 1);
      }
    }
    console.log(combination_check);
  }
  console.log("surrounding boxes");
}

// function example(x, y){
// for(b=0;b=num.length;b++){

// }

// }

function reset() {
  location.reload();
}






/get input value from User
var mainDivTag = <HTMLDivElement>document.getElementById("mainDiv");
var bodyElement = <HTMLBodyElement>document.getElementById("app");
var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("col");
var formElement = <HTMLFormElement>document.getElementById("form");
var mineInput = <HTMLInputElement>document.getElementById("mines");
var gameStatus = <HTMLDivElement>document.getElementById("game-block");
// for placing mines in random position
const uniqueValues: number[] = [];
interface box {
  identifier: number;
  isBomb: boolean;
  // isBomb: any;
}
//Example Array
var boxes: box[];

//check whether the create function is clicked or not.
let clicked: number = 1;

function create() {
  if (clicked === 1) {
    let count = 0;

    let rowValue: number = parseInt(row?.value);

    let colValue: number = parseInt(column?.value);
    //getting mine value from user
    let mineValue: number = parseInt(mineInput?.value);

    if (rowValue <= 0 || rowValue === null) {
      console.log("condition working");
    }
    //for loops for creating div elements.
    for (let i = 0; i < rowValue; i++) {
      //create break tag
      var br = document.createElement("br");

      for (let j = 0; j < colValue; j++) {
        //create a div Element
        const divElement = document.createElement("div");
        // divElement.innerHTML = `${boxValue++}`

        if (rowValue <= 10 || colValue <= 10) {
          //adding style to created div element
          divElement.classList.add("divStyle");

        } else if (
          (rowValue >= 11 || colValue >= 11) &&
          (rowValue <= 14 || colValue <= 14)
        ) {
          divElement.classList.add("divStyle2");
        } else if (
          (rowValue >= 15 || colValue >= 15) &&
          (rowValue <= 22 || colValue <= 22)
        ) {
          divElement.classList.add("divStyle3");
        } else if (rowValue > 22 || colValue > 22) {
          console.log("max level reached");
        }

        //set id to div
        divElement.setAttribute("id", `divId${count++}`);

        //add the created div element to another div(parent div)
        bodyElement.append(divElement);
        //add styles to parent div
        bodyElement.classList.add("appStyle");
        console.log(divElement);
      }
      //adding break tag for forming the correct matrix pattern.
      bodyElement.appendChild(br);
    }

    const totalDivs = rowValue * colValue;
    console.log("total Divs " + totalDivs);

    placeMines(mineValue, totalDivs);
    clicked++;
  } //End of if condition
} //End of Create Function

//function for placing mines
function placeMines(mineInputValue: number, totalDivs: any): void {
  var anotherDiv = document.querySelectorAll(".divStyle");

  let rowValues = parseInt(row?.value);
  let colValues = parseInt(column?.value);

  //place the random number in Divs
  var randomValue = getRandomMines(
    mineInputValue,
    totalDivs,
    rowValues,
    colValues
  );
} //End of placeMines function

//get Random number for mines
//this function for getting non-repeating random Numbers.
function getRandomMines(
  mineValue: any,
  totalDivs: any,
  row: number,
  column: number
): void {
  if (mineValue.length == 0) {
    console.log("No More Random Numbers");
  }

  if (row >= 1 && column >= 1) {
    while (uniqueValues.length < mineValue) {
      var randomNumbers = Math.floor(Math.random() * totalDivs);

      if (!uniqueValues.includes(randomNumbers)) {
        uniqueValues.push(randomNumbers);
      }
    }

    for (let i = 0; i < uniqueValues.length; i++) {
      const id = uniqueValues[i];
      console.log(document.getElementById(`divId${id}`));
      // const divs = document
      //   .getElementById(`divId${id}`)
      //   ?.classList.add("random"); 

        // const anotherDiv = document.getElementById(`divId${id}`)?.classList.remove("divStyle");

      let Divs = document
        .getElementById(`divId${id}`)
        ?.addEventListener("click", function (event) {
          console.log("Mine clicked");
          gameStatus.style.display = "block";
        });
    }
  } else if (row === 0 || column === 0) {
    console.log("Cannot create table with zero values");
    console.log("row value or column value must be Greater than zero");
  } else {
    console.log("row and column fields must be filled!!!");
  }

  var divTags = addClickEvent(totalDivs, uniqueValues);

  var checkResult = checking(uniqueValues);
} //End of getRandomMines Function.

//reset Function
function reset() {
  clicked = 1;

  formElement.reset();

  bodyElement.classList.remove("appStyle");
  //deleting div elements in HTML using while loop
  while (bodyElement.firstChild) {
    bodyElement.removeChild(bodyElement.firstChild);
  }
  gameStatus.style.display = "none";
} //End of reset Function.

function addClickEvent(totalDivs, uniqueValues) {
  let unique = uniqueValues;
  for (let i = 0; i < totalDivs; i++) {
    const divs = document.getElementById(`divId${i}`);
    if (divs !== null) {
      divs.addEventListener("click", function (event) {
        console.log("clicked function");
      });
    } else {
      console.log("div value is null");
      console.log("else condition satisfied");
    }
  }
}

//checking function

function checking(uniqueValues: any) {
  var someEx: any[] = [];
  let someVar: any[] = [];

  let bombCount = 0;

  let MainRow = parseInt(row?.value);
  let MainCol = parseInt(column?.value);
  let count = -1;
  for (let i = 0; i < MainRow; i++) {
    someEx[i] = [];
    for (let j = 0; j < MainCol; j++) {
      someEx[i][j] = {
        identifier: ++count,
        isBomb: uniqueValues.includes(count),
      };
    }
  }

  //someEx Value
  console.log("some Ex value");
  console.log(someEx);
  for (let i = 0; i < MainRow; i++) {
    for (let j = 0; j < MainCol; j++) {
      if (!someEx[i][j].isBomb) {
        var localVar = getSurroudingBoxes(i, j);

        let bombCount = 0;
        for (let item of localVar) {
          let data = someEx[item[0]][item[1]];
          if (data.isBomb) {
            bombCount++;
          }
        }
        if (bombCount > 0) {
          let text = document.createTextNode(bombCount.toString());
          let element = document.getElementById(
            `divId${someEx[i][j].identifier}`
          );
          if (element) {
            // element.innerText = bombCount.toString();
            element.appendChild(text);
            // element.classList.remove("divStyle");
          }
        }
      }
    }
  }

  // console.log("someEx Values");
  // for(let i = 0; i < someEx.length; i++){
  //   if(someEx[i].isBomb === true){
  //     bombCount++;
  //     someEx[i].xValue
  //   }
  // }

  // console.log("No of Bombs : " + bombCount);
}

function getNumberOfBombs(
  xValue: number,
  yValue: number,
  isBomb: boolean
): number[] {
  var neighbourBoxes: any;
  // if (
  //   document.getElementById(`divId${identifier}`)?.classList.contains("random")
  // ) {
  neighbourBoxes = getSurroudingBoxes(xValue, yValue);
  console.log("from neighbour boxes");
  console.log(neighbourBoxes);

  for (let i = 0; i < neighbourBoxes.length; i++) {
    console.log(neighbourBoxes[i]);
  }
  // }
  return neighbourBoxes;
}

function getSurroudingBoxes(xValue: number, yValue: number): number[] {
  var rowLength = parseInt(row?.value);
  var columnLength = parseInt(column?.value);
  //conditions for getting neighbouring nodes of Mine.
  let totalValues = rowLength * columnLength;

  let a: any[] = [];
  //top left
  if (xValue - 1 >= 0 && yValue - 1 >= 0) {
    a.push([xValue - 1, yValue - 1]);
  }

  //top
  if (xValue - 1 >= 0) {
    a.push([xValue - 1, yValue]);
  }

  //top right
  // if (xValue - 1 >= 0 && yValue + 1 < rowLength) {
  //   a.push([xValue - 1, yValue + 1]);
  // }
  if (xValue - 1 >= 0 && xValue < columnLength && yValue + 1 < rowLength) {
    a.push([xValue - 1, yValue + 1]);
  }

  //left
  if (yValue - 1 >= 0) {
    a.push([xValue, yValue - 1]);
  }

  //right
  if (yValue + 1 < rowLength) {
    a.push([xValue, yValue + 1]);
  }

  //bottom left
  if (xValue + 1 < columnLength && yValue - 1 >= 0) {
    a.push([xValue + 1, yValue - 1]);
  }

  //bottom
  if (xValue + 1 < columnLength) {
    a.push([xValue + 1, yValue]);
  }

  //bottom right
  if (xValue + 1 < columnLength && yValue + 1 < rowLength) {
    a.push([xValue + 1, yValue + 1]);
  }

  console.log("get surrounding boxes function called");

  return a;
}

// function arrayLooping(array) {
//   let rowValue = parseInt(row.value);
//   let columnValue = parseInt(column.value);

//   var allNeighbourBoxes: any[] = [];

//   for (let a = 0; a < rowValue; a++) {
//     for (let b = 0; b < columnValue; b++) {
//       let localVar = getSurroudingBoxes(a, b);
//     }
//   }

//   console.log("another array");
//   console.log(allNeighbourBoxes);

//   console.log("its working");

//   checkBomb(allNeighbourBoxes);
// }

function checkBomb(neighbourArray) {
  var divHasMine = document.querySelector(".random");
  let x, y;
  var mainArray: any[] = [];

  for (let i = 0; i < neighbourArray.length; i++) {
    console.log(neighbourArray[i]);
    console.log("-------------------------");
  }

  console.log("from checkBomb function");
}

// console.log(mainArray);





























function checking(uniqueValues: any) {
  var someEx: any[] = [];
  let someVar: any[] = [];

  let bombCount = 0;

  let MainRow = parseInt(row?.value);
  let MainCol = parseInt(column?.value);
  let count = -1;
  for (let i = 0; i < MainRow; i++) {
    someEx[i] = [];
    for (let j = 0; j < MainCol; j++) {
      someEx[i][j] = {
        identifier: ++count,
        isBomb: uniqueValues.includes(count),
      };
    }
  }

  //someEx Value
  console.log("some Ex value");
  console.log(someEx);
  for (let i = 0; i < MainRow; i++) {
    for (let j = 0; j < MainCol; j++) {
      if (!someEx[i][j].isBomb) {
        var localVar = getSurroudingBoxes(i, j);

        let bombCount = 0;
        for (let item of localVar) {
          let data = someEx[item[0]][item[1]];
          if (data.isBomb) {
            bombCount++;
          }
        }
        if (bombCount > 0) {
          let text = document.createTextNode(bombCount.toString());
          let element = document.getElementById(
            `divId${someEx[i][j].identifier}`
          );
          if (element) {
            // element.innerText = bombCount.toString();
            element.appendChild(text);
            // element.classList.remove("divStyle");
          }
        }
      }
    }
  }















  //get input value from User
var mainDivTag = <HTMLDivElement>document.getElementById("mainDiv");
var bodyElement = <HTMLBodyElement>document.getElementById("app");
var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("col");
var formElement = <HTMLFormElement>document.getElementById("form");
var mineInput = <HTMLInputElement>document.getElementById("mines");
var gameStatus = <HTMLDivElement>document.getElementById("game-block");
// for placing mines in random position
const uniqueValues: number[] = [];
interface box {
  identifier: number;
  isBomb: boolean;
  // isBomb: any;
}
//Example Array
var boxes: box[];

//check whether the create function is clicked or not.
let clicked: number = 1;

function create() {
  if (clicked === 1) {
    let count = 0;
    var trTag, tdTag, tableTag, overlayElement;

    let rowValue: number = parseInt(row?.value);

    let colValue: number = parseInt(column?.value);
    //getting mine value from user
    let mineValue: number = parseInt(mineInput?.value);

    if (rowValue <= 0 || rowValue === null) {
      console.log("condition working");
    }
    //for loops for creating div elements.
    for (let i = 0; i < rowValue; i++) {
      //create break tag

      var br = document.createElement("br");
      tableTag = document.createElement("table");

      trTag = document.createElement("tr");

      for (let j = 0; j < colValue; j++) {
        //create a div Element
        // const divElement = document.createElement("div");
        tdTag = document.createElement("td");
        overlayElement = document.createElement("div");
        let innerElement = document.createElement("td");
        // divElement.innerHTML = `${boxValue++}`
        // divElement.classList.add("divStyle");

        // if (rowValue <= 10 || colValue <= 10) {
        //   //adding style to created div element

        // } else if (
        //   (rowValue >= 11 || colValue >= 11) &&
        //   (rowValue <= 14 || colValue <= 14)
        // ) {
        //   divElement.classList.add("divStyle2");
        // } else if (
          //   (rowValue >= 15 || colValue >= 15) &&
          //   (rowValue <= 22 || colValue <= 22)
          // ) {
          //   divElement.classList.add("divStyle3");
        // } else if (rowValue > 22 || colValue > 22) {
        //   console.log("max level reached");
        // }

        //set id to div
        tdTag.setAttribute("id", `divId${count++}`);
        tdTag.classList.add("divStyle");
        trTag.append(tdTag);

        trTag.appendChild(overlayElement);
        tableTag.append(trTag);
        overlayElement.appendChild(innerElement);
        //add the created div element to another div(parent div)
        bodyElement.append(tableTag);
        overlayElement.classList.add("box");
        
        console.log("its working");
        //add styles to parent div
        bodyElement.classList.add("appStyle");
        console.log(bodyElement);
      }
      //adding break tag for forming the correct matrix pattern.
      // bodyElement.appendChild(br);
    }

    const totalDivs = rowValue * colValue;
    console.log("total Divs " + totalDivs);

    placeMines(mineValue, totalDivs);
    clicked++;
  } //End of if condition
} //End of Create Function

//function for placing mines
function placeMines(mineInputValue: number, totalDivs: any): void {
  //alignment changes in div tag
  for (let i = 0; i < totalDivs; i++) {
    const divs = document.getElementById(`divId${i}`);
    (<HTMLDivElement>divs).style.cursor = "pointer";
  }

  let rowValues = parseInt(row?.value);
  let colValues = parseInt(column?.value);

  //place the random number in Divs
  var randomValue = getRandomMines(
    mineInputValue,
    totalDivs,
    rowValues,
    colValues
  );
} //End of placeMines function

//get Random number for mines
//this function for getting non-repeating random Numbers.
function getRandomMines(
  mineValue: any,
  totalDivs: any,
  row: number,
  column: number
): void {
  if (mineValue.length == 0) {
    console.log("No More Random Numbers");
  }

  if (row >= 1 && column >= 1) {
    while (uniqueValues.length < mineValue) {
      var randomNumbers = Math.floor(Math.random() * totalDivs);

      if (!uniqueValues.includes(randomNumbers)) {
        uniqueValues.push(randomNumbers);
      }
    }

    for (let i = 0; i < uniqueValues.length; i++) {
      const id = uniqueValues[i];
      console.log(document.getElementById(`divId${id}`));
      (<HTMLElement>document.getElementById(`divId${id}`)).innerHTML = "&#128163";

      // const anotherDiv = document.getElementById(`divId${id}`)?.classList.remove("divStyle");

      let Divs = document
        .getElementById(`divId${id}`)
        ?.addEventListener("click", function (event) {
          console.log("Mine clicked");
          gameStatus.style.display = "block";
        });
    }
  } else if (row === 0 || column === 0) {
    console.log("Cannot create table with zero values");
    console.log("row value or column value must be Greater than zero");
  } else {
    console.log("row and column fields must be filled!!!");
  }

  var divTags = addClickEvent(totalDivs, uniqueValues);

  var checkResult = checking(uniqueValues);
} //End of getRandomMines Function.

//reset Function
function reset() {
  clicked = 1;

  formElement.reset();

  bodyElement.classList.remove("appStyle");
  //deleting div elements in HTML using while loop
  while (bodyElement.firstChild) {
    bodyElement.removeChild(bodyElement.firstChild);
  }
  gameStatus.style.display = "none";
} //End of reset Function.

function addClickEvent(totalDivs, uniqueValues) {
  let unique = uniqueValues;

  for (let i = 0; i < totalDivs; i++) {
    const divs = document.getElementById(`divId${i}`);
    if (divs !== null) {
      divs.addEventListener("contextmenu", function (event) {
        ///flag code  => 	&#128681
        event.preventDefault();
        let countFlag = false;
        if(countFlag === false){
          console.log("flag if condition works");
        (<HTMLDivElement>document.getElementById(`divId${i}`)).innerHTML = "&#128681";
        }
       else{
        (<HTMLDivElement>document.getElementById(`divId${i}`)).innerHTML = "";
       }
        console.log("clicked function");
      });
    } else {
      console.log("div value is null");
      console.log("else condition satisfied");
    }
  }
}

//checking function

function checking(uniqueValues: any) {
  var someEx: any[] = [];
  let someVar: any[] = [];

  let bombCount = 0;

  let MainRow = parseInt(row?.value);
  let MainCol = parseInt(column?.value);
  let count = -1;
  for (let i = 0; i < MainRow; i++) {
    someEx[i] = [];
    for (let j = 0; j < MainCol; j++) {
      someEx[i][j] = {
        identifier: ++count,
        isBomb: uniqueValues.includes(count),
      };
    }
  }

  //someEx Value
  console.log("some Ex value");
  console.log(someEx);
  for (let i = 0; i < MainRow; i++) {
    for (let j = 0; j < MainCol; j++) {
      if (!someEx[i][j].isBomb) {
        var localVar = getSurroudingBoxes(i, j);

        let bombCount = 0;
        for (let item of localVar) {
          let data = someEx[item[0]][item[1]];
          if (data.isBomb) {
            bombCount++;
          }
        }
        if (bombCount > 0) {
          let text = document.createTextNode(bombCount.toString());
          let element = document.getElementById(
            `divId${someEx[i][j].identifier}`
          );
          if (element) {
            // element.innerText = bombCount.toString();
            element.appendChild(text);
            // element.classList.remove("divStyle");
          }
        }
      }
    }
  }

  // console.log("someEx Values");
  // for(let i = 0; i < someEx.length; i++){
  //   if(someEx[i].isBomb === true){
  //     bombCount++;
  //     someEx[i].xValue
  //   }
  // }

  // console.log("No of Bombs : " + bombCount);
}

function getNumberOfBombs(
  xValue: number,
  yValue: number,
  isBomb: boolean
): number[] {
  var neighbourBoxes: any;
  // if (
  //   document.getElementById(`divId${identifier}`)?.classList.contains("random")
  // ) {
  neighbourBoxes = getSurroudingBoxes(xValue, yValue);
  console.log("from neighbour boxes");
  console.log(neighbourBoxes);

  for (let i = 0; i < neighbourBoxes.length; i++) {
    console.log(neighbourBoxes[i]);
  }
  // }
  return neighbourBoxes;
}

function getSurroudingBoxes(xValue: number, yValue: number): number[] {
  var rowLength = parseInt(row?.value);
  var columnLength = parseInt(column?.value);
  //conditions for getting neighbouring nodes of Mine.
  let totalValues = rowLength * columnLength;

  let a: any[] = [];
  //top left
  if (xValue - 1 >= 0 && yValue - 1 >= 0) {
    a.push([xValue - 1, yValue - 1]);
  }

  //top
  if (xValue - 1 >= 0) {
    a.push([xValue - 1, yValue]);
  }

  //top right
  // if (xValue - 1 >= 0 && yValue + 1 < rowLength) {
  //   a.push([xValue - 1, yValue + 1]);
  // }
  if (xValue - 1 >= 0 && xValue < columnLength && yValue + 1 < rowLength) {
    a.push([xValue - 1, yValue + 1]);
  }

  //left
  if (yValue - 1 >= 0) {
    a.push([xValue, yValue - 1]);
  }

  //right
  if (yValue + 1 < rowLength) {
    a.push([xValue, yValue + 1]);
  }

  //bottom left
  if (xValue + 1 < columnLength && yValue - 1 >= 0) {
    a.push([xValue + 1, yValue - 1]);
  }

  //bottom
  if (xValue + 1 < columnLength) {
    a.push([xValue + 1, yValue]);
  }

  //bottom right
  if (xValue + 1 < columnLength && yValue + 1 < rowLength) {
    a.push([xValue + 1, yValue + 1]);
  }

  console.log("get surrounding boxes function called");

  return a;
}

// function arrayLooping(array) {
//   let rowValue = parseInt(row.value);
//   let columnValue = parseInt(column.value);

//   var allNeighbourBoxes: any[] = [];

//   for (let a = 0; a < rowValue; a++) {
//     for (let b = 0; b < columnValue; b++) {
//       let localVar = getSurroudingBoxes(a, b);
//     }
//   }

//   console.log("another array");
//   console.log(allNeighbourBoxes);

//   console.log("its working");

//   checkBomb(allNeighbourBoxes);
// }

function checkBomb(neighbourArray) {
  var divHasMine = document.querySelector(".random");
  let x, y;
  var mainArray: any[] = [];

  for (let i = 0; i < neighbourArray.length; i++) {
    console.log(neighbourArray[i]);
    console.log("-------------------------");
  }

  console.log("from checkBomb function");
}

// console.log(mainArray);























var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("column");
var mine = <HTMLInputElement>document.getElementById("mine");
var mainDiv = <HTMLDivElement>document.getElementById("box");
var bombAr: any[] = [];
var num: any[] = [];
var Rnumbers = [];

interface number_coordinates {
  x: number;
  y: number;
}
function quantity() {
  var row1 = parseInt(row?.value);
  var column1 = parseInt(column?.value);
  var mine1 = parseInt(mine?.value);
  console.log(row1);
  console.log(column1);
  console.log(mine1);

  rowcol(row1, column1); // pass rowval & col value
  random_mine(mine1, row1, column1); // pass mine val
  fncomb(row1, column1); // pass rowval & col value
}

function rowcol(rowValue: number, columnValue: number) {
  let unique = 0; // for get cell id
  for (let i = 0; i < rowValue; i++) {
    var breakElement = document.createElement("br");
    mainDiv.classList.add("container-1");
    for (let j = 0; j < columnValue; j++) {
      var Divbox = document.createElement("div");
      var boxID = "cell" + unique;
      console.log(boxID);
      Divbox.classList.add(boxID);
      bombAr.push(boxID);
      Divbox.classList.add("cell");
      mainDiv.appendChild(Divbox);
      let numbers: number_coordinates = {
        x: i,
        y: j,
      };
      num.push(numbers);
      unique++;
    }
    mainDiv.appendChild(breakElement);
  }
  console.log(num);
  console.log(bombAr);
}




function random_mine(mineValue: number, x: number, y: number) {
  let randomArray: any[] = [];
  let randomNumbers
    if (x >= 1 && y >= 1) {
     randomNumbers = Math.floor(Math.random() * bombAr.length);
      // randomArray.push(randomNumbers);

      // let randomBombs = document.querySelectorAll(".Rbomb");
      // console.log("random Bombs");
      // console.log(randomBombs);
      // //random Numbers
      // let randomNumbers = Math.floor(Math.random() * bombAr.length);
      // console.log(randomNumbers);
      // var Rbomb = "cell" + randomNumbers;
      // console.log(Rbomb)
      // console.log(Rbomb);
      // // document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
      // console.log("bombs placed");
      // randomBombs[k].classList.add("bombs");
      // console.log(document.getElementsByClassName("Rbomb")[0].classList.add("bombs"));
      // // var check = Rnumbers.includes(Rno);
      // // if (check === false) {
      // //   Rnumbers.push(Rno);
      // // } else {
      // //   k--;
      // // }
     
      }
      while (randomArray.length < mineValue) {
        if (!randomArray.includes(randomNumbers)) {
          randomArray.push(randomNumbers);
        }
    
  } //end of for loop

  console.log("random values");

  console.log(randomArray);

  console.log(Rnumbers);
  for (let l = 0; l < bombAr.length; l++) {
    var click1 = document.getElementsByClassName("bombs")[l];
    click1?.addEventListener("click", function () {
      alert("GAME OVER");
    });
  }
}

function fncomb(getrow: number, getcol: number) {
  for (let xVal = 0; xVal < getrow; xVal++) {
    for (let yVal = 0; yVal < getcol; yVal++) {
      var combinationcheck = [];
      let bc = 0;
      if (xVal - 1 >= 0 && yVal - 1 >= 0) {
        if (passvalue(xVal, yVal)) {
          bc++;
        }
        combinationcheck.push([xVal - 1, yVal - 1]);
      }
      if (xVal - 1 >= 0) {
        combinationcheck.push([xVal - 1, yVal]);
      }

      if (xVal - 1 >= 0 && xVal < getcol && yVal + 1 < getrow) {
        combinationcheck.push([xVal - 1, yVal + 1]);
      }

      if (yVal - 1 >= 0) {
        combinationcheck.push([xVal, yVal - 1]);
      }

      if (yVal + 1 < getrow) {
        combinationcheck.push([xVal, yVal + 1]);
      }

      if (xVal + 1 < getcol && yVal - 1 >= 0) {
        combinationcheck.push([xVal + 1, yVal - 1]);
      }

      if (xVal + 1 < getcol) {
        combinationcheck.push([xVal + 1, yVal]);
      }

      if (xVal + 1 < getcol && yVal + 1 < getrow) {
        combinationcheck.push([xVal + 1, yVal + 1]);
      }

      console.log(combinationcheck);
    }
  }
}
function passvalue(x: number, y: number) {
  /* */

  console.log(x, y);

  return true;
}

function numcheck(combinationcheck: any) {
  for (let b = 0; b < combinationcheck.length; b++) {
    console.log(combinationcheck[b]);
  }
}

function reset() {
  location.reload();
}






































var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("column");
var mine = <HTMLInputElement>document.getElementById("mine");
var mainDiv = <HTMLDivElement>document.getElementById("box");
var bombAr: any[] = [];
var num: any[] = [];
var Rnumbers=[];

interface number_coordinates {
  x: number;
  y: number;
}
function quantity() {
  var row1 = parseInt(row?.value);        
  var column1 = parseInt(column?.value);
  var mine1 = parseInt(mine?.value);
  console.log(row1);
  console.log(column1);
  console.log(mine1);

  rowcol(row1,column1); // pass rowval & col value
  random_mine(mine1);   // pass mine val
  fncomb(row1,column1); // pass rowval & col value
}

function rowcol (rowValue:number,columnValue:number){ 
  let unique = 0;   // for get cell id 
  for (let i = 0; i < rowValue; i++) {
    var breakElement = document.createElement("br");
    mainDiv.classList.add("container-1");
    for (let j = 0; j < columnValue; j++) {
      var Divbox = document.createElement("div");
      var boxID = "cell" + unique;
      console.log(boxID);
      Divbox.classList.add(boxID);
      bombAr.push(boxID);
      Divbox.classList.add("cell");
      mainDiv.appendChild(Divbox);
      let numbers: number_coordinates = {
        x: i,
        y: j,
      };
      num.push(numbers);
      unique++;
    }
    mainDiv.appendChild(breakElement);
  }
  console.log(num);
  console.log(bombAr);
}

function random_mine(mineValue:number){
  for (let k = 0; k < mineValue; k++) {
    let Rno = Math.floor(Math.random() * bombAr.length);
    console.log(Rno);
    var Rbomb = "cell" + Rno;
    console.log(Rbomb);
    document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
    var check = Rnumbers.includes(Rno);
    if (check === false) {
      Rnumbers.push(Rno);
    } else {
      k--;
    }
  }
  console.log(Rnumbers);
  for (let l = 0; l < bombAr.length; l++) {
    var click1 = document.getElementsByClassName("bombs")[l];
    click1?.addEventListener("click", function () {
      alert("GAME OVER");
    });
  }
}

function fncomb(getrow:number,getcol:number) {
  for (let xVal = 0; xVal < getrow; xVal++) {
    for (let yVal = 0; yVal < getcol; yVal++) {
      var combinationcheck = [];
      let bc = 0;
      if (xVal - 1 >= 0 && yVal - 1 >= 0) {
        if( passvalue(xVal,yVal) ){
          bc++;
        }
        combinationcheck.push([xVal - 1, yVal - 1]);   
      }
      
      if (xVal - 1 >= 0) {
        combinationcheck.push([xVal - 1, yVal]);
      }
    
      if (xVal - 1 >= 0 && xVal < getcol && yVal + 1 < getrow) {
        combinationcheck.push([xVal - 1, yVal + 1]);
      }
    
     
      if (yVal - 1 >= 0) {
        combinationcheck.push([xVal, yVal - 1]);
      }
    
    
      if (yVal + 1 < getrow) {
        combinationcheck.push([xVal, yVal + 1]);
      }
    
   
      if (xVal + 1 < getcol && yVal - 1 >= 0) {
        combinationcheck.push([xVal + 1, yVal - 1]);
      }
    
    
      if (xVal + 1 < getcol) {
        combinationcheck.push([xVal + 1, yVal]);
      }
  
      if (xVal + 1 < getcol && yVal + 1 < getrow) {
        combinationcheck.push([xVal + 1, yVal + 1]);
      }

      console.log(combinationcheck);
      
    }
  }
}
function passvalue(x, y){
  //
  return true;
}

function numcheck(combinationcheck:any){
  for(let b=0;b<combinationcheck.length;b++){
      console.log(combinationcheck[b]);
  }
}
















function reset() {
  location.reload();
}




var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("column");
var mine = <HTMLInputElement>document.getElementById("mine");
var mainDiv = <HTMLDivElement>document.getElementById("box");
var bombAr: any[] = [];
var num: any[] = [];
var Rnumbers=[];

interface number_coordinates {
  x: number;
  y: number;
}
function quantity() {
  var row1 = parseInt(row?.value);        
  var column1 = parseInt(column?.value);
  var mine1 = parseInt(mine?.value);
  console.log(row1);
  console.log(column1);
  console.log(mine1);

  rowcol(row1,column1); // pass rowval & col value
  random_mine(mine1);   // pass mine val
  fncomb(row1,column1); // pass rowval & col value
}

function rowcol (rowValue:number,columnValue:number){ 
  let unique = 0;   // for get cell id 
  for (let i = 0; i < rowValue; i++) {
    var breakElement = document.createElement("br");
    mainDiv.classList.add("container-1");
    for (let j = 0; j < columnValue; j++) {
      var Divbox = document.createElement("div");
      var boxID = "cell" + unique;
      console.log(boxID);
      Divbox.classList.add(boxID);
      bombAr.push(boxID);
      Divbox.classList.add("cell");
      mainDiv.appendChild(Divbox);
      let numbers: number_coordinates = {
        x: i,
        y: j,
      };
      num.push(numbers);
      unique++;
    }
    mainDiv.appendChild(breakElement);
  }
  console.log(num);
  console.log(bombAr);
}

function random_mine(mineValue:number){
  for (let k = 0; k < mineValue; k++) {
    let Rno = Math.floor(Math.random() * bombAr.length);
    console.log(Rno);
    var Rbomb = "cell" + Rno;
    console.log(Rbomb);
    document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
    var check = Rnumbers.includes(Rno);
    if (check === false) {
      Rnumbers.push(Rno);
    } else {
      k--;
    }
  }
  console.log(Rnumbers);
  for (let l = 0; l < bombAr.length; l++) {
    var click1 = document.getElementsByClassName("bombs")[l];
    click1?.addEventListener("click", function () {
      alert("GAME OVER");
    });
  }
}

function fncomb(getrow:number,getcol:number) {
  for (let xVal = 0; xVal < getrow; xVal++) {
    for (let yVal = 0; yVal < getcol; yVal++) {
      //var combinationcheck = [];
      let bc = 0;
      if (xVal - 1 >= 0 && yVal - 1 >= 0) {
        if( passvalue(xVal,yVal) ){
          bc++;
        }
      }
      
      if (xVal - 1 >= 0) {
        if( passvalue(xVal,yVal) ){
          bc++;
        }
      }
    
      if (xVal - 1 >= 0 && xVal < getcol && yVal + 1 < getrow) {
        if( passvalue(xVal,yVal) ){
          bc++;
        }
      }
    
     
      if (yVal - 1 >= 0) {
        if( passvalue(xVal,yVal) ){
          bc++;
        }
      }
    
    
      if (yVal + 1 < getrow) {
        if( passvalue(xVal,yVal) ){
          bc++;
        }
      }
    
   
      if (xVal + 1 < getcol && yVal - 1 >= 0) {
        if( passvalue(xVal,yVal) ){
          bc++;
        }
      }
    
    
      if (xVal + 1 < getcol) {
        if( passvalue(xVal,yVal) ){
          bc++;
        }
      }
  
      if (xVal + 1 < getcol && yVal + 1 < getrow) {
        if( passvalue(xVal,yVal) ){
          bc++;
        }
      }
      
    }
  }
}
function passvalue(x,y){
  for(let i=0;i<num.length;i++){
    if(){
      return true;
    }
   
}
}




// function numcheck(combinationcheck:any){
//   for(let b=0;b<combinationcheck.length;b++){
//       console.log(combinationcheck[b]);
//   }
// }
















function reset() {
  location.reload();
}




import { clearLine } from "readline";

var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("column");
var mine = <HTMLInputElement>document.getElementById("mine");
var mainDiv = <HTMLDivElement>document.getElementById("box");
var bombAr: any[] = [];
var num: any[] = [];
var Rnumbers=[];

interface number_coordinates {
  x: number;
  y: number;
}
function quantity() {
  var row1 = parseInt(row?.value);        
  var column1 = parseInt(column?.value);
  var mine1 = parseInt(mine?.value);
  console.log(row1);
  console.log(column1);
  console.log(mine1);

  rowcol(row1,column1); // pass rowval & col value
  random_mine(mine1);   // pass mine val
  fncomb(row1,column1); // pass rowval & col value
}

function rowcol(rowValue:number,columnValue:number){ 
  let unique = 0;   // for get cell id 
  for (let i = 0; i < rowValue; i++) {
    var breakElement = document.createElement("br");
    mainDiv.classList.add("container-1");
    for (let j = 0; j < columnValue; j++) {
      var Divbox = document.createElement("div");
      // var Divbox2 = document.createElement("div");
      var boxID = "cell" + unique;
      console.log(boxID);
      Divbox.classList.add(boxID);
      bombAr.push(boxID);
      Divbox.classList.add("cell");
      mainDiv.appendChild(Divbox);
      // Divbox.appendChild(Divbox2);
      
      let numbers: number_coordinates = {
        x: i,
        y: j,
      };
      num.push(numbers);
      unique++;
    }
    mainDiv.appendChild(breakElement);
  }
  console.log(num);
  console.log(bombAr);
}

function random_mine(mineValue:number){
  for (let k = 0; k < mineValue; k++) {
    let Rno = Math.floor(Math.random() * bombAr.length);
    console.log(Rno);
    // Rno = 4;
    var Rbomb = "cell" + Rno;
    console.log(Rbomb);
    document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
    // document.getElementsByClassName('cell3')[0].classList.add("bombs");
    var check = Rnumbers.includes(Rno);
    if (check === false) {
      Rnumbers.push(Rno);
    } else {
      k--;
    }
  }
  console.log(Rnumbers);
  for (let l = 0; l < bombAr.length; l++) {
    var click1 = document.getElementsByClassName("bombs")[l];
    click1?.addEventListener("click", function () {
      alert("GAME OVER");
    });
  }
}


function fncomb(getrow:number,getcol:number) {
  // var bombcount = 0;
  //
  let index = 0;

  for (let xVal = 0; xVal < getrow; xVal++) {
    for (let yVal = 0; yVal < getcol; yVal++) {
      console.log('finding for box: ', index );
      var combinationcheck = [];
      let bc=0
      if (xVal - 1 >= 0 && yVal - 1 >= 0) {
       if(ddd(xVal - 1, yVal - 1)){
        bc++;
       }
      }
      
      if (xVal - 1 >= 0) {
        if(ddd(xVal-1,yVal)){
          bc++;
        }
      }
    
      if (xVal - 1 >= 0 && xVal < getcol && yVal + 1 < getrow) {
        if(ddd(xVal - 1,yVal + 1)){
          bc++;
        }
      }
    
     
      if (yVal - 1 >= 0) {
        if(ddd(xVal,yVal-1)){
          bc++;
        }
      }
    
    
      if (yVal + 1 < getrow) {
        if(ddd(xVal,yVal+1)){
          bc++;
        }
      }
    
   
      if (xVal + 1 < getcol && yVal - 1 >= 0) {
        if(ddd(xVal+1,yVal-1)){
          bc++;
        }
      }
    
    
      if (xVal + 1 < getcol) {
        if(ddd(xVal+1,yVal)){
          bc++;
        }
      }
  
      if (xVal + 1 < getcol && yVal + 1 < getrow) {
        if(ddd(xVal+1,yVal+1)){
          bc++;
        }
      }

      console.log("bc for index: "+index +" is "+bc);
      let box = document.getElementsByClassName('cell'+index);
      if( box ){
        box[0].innerHTML = bc+'';
      }
      index++;
      
    }
  }
}



function ddd(x, y){
  //x = 0;
  let index = -1;
  for(let i=0;i<num.length;i++){
      //console.log(num[i].x);
      if( num[i].x === x && num[i].y === y )
        index = i;
  }
  if( index > -1){
    let idValue = 'cell'+ index;
    console.log('neighbour box ', index );
    let elem = document.getElementsByClassName(idValue);

    // console.log('test',idValue, elem);
    // console.log( 1/x );
    if( elem.length > 0 ){

      return elem[0].classList.contains('bombs');
    }
    return false;
  }
  return false;
}


















function reset() {
  location.reload();
}









var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("column");
var mine = <HTMLInputElement>document.getElementById("mine");
var mainDiv = <HTMLDivElement>document.getElementById("box");
// var mainDiv1 =<HTMLDivElement>document.getElementsByClassName("box")[0];
var bombAr: any[] = [];
var num: any[] = [];
var Rnumbers=[];

interface number_coordinates {
  x: number;
  y: number;
}
function quantity() {
  var row1 = parseInt(row?.value);        
  var column1 = parseInt(column?.value);
  var mine1 = parseInt(mine?.value);
  console.log(row1);
  console.log(column1);
  console.log(mine1);

  rowcol(row1,column1); // pass rowval & col value
  random_mine(mine1);   // pass mine val
  fncomb(row1,column1); // pass rowval & col value
}

function rowcol (rowValue:number,columnValue:number){ 
  let unique = 0;   // for get cell id 
  for (let i = 0; i < rowValue; i++) {
    var breakElement = document.createElement("br");
    mainDiv.classList.add("container-1");
    for (let j = 0; j < columnValue; j++) {
      var Divbox = document.createElement("div");
      var childDiv = document.createElement("div");
      // mainDiv.className= 'box';
      // document.getElementsByTagName('body')[0].appendChild('mainDiv');
      var boxID = "cell" + unique;
      // hide(Divbox);
      console.log(boxID);
      Divbox.classList.add(boxID);
      bombAr.push(boxID);
      Divbox.classList.add("cell");
      Divbox.appendChild(childDiv);
      mainDiv.appendChild(Divbox);
      // var Divbox1 = document.createElement("div");
      // Divbox.appendChild(Divbox1);
      let numbers: number_coordinates = {
        x: i,
        y: j,
      };
      num.push(numbers);
      unique++;
    }
    mainDiv.appendChild(breakElement);
  }
  console.log(num);
  console.log(bombAr);
  console.log("main div tag");
  console.log(mainDiv);
}
// function hide(Divbox){
//   var Divbox1 = document.createElement("div");
//   Divbox.appendChild(Divbox1);
// }

function random_mine(mineValue:number){
  for (let k = 0; k < mineValue; k++) {
    let Rno = Math.floor(Math.random() * bombAr.length);
    console.log(Rno);
    // Rno = 4;
    var Rbomb = "cell" + Rno;
    console.log(Rbomb);
    document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
    // document.getElementsByClassName('cell3')[0].classList.add("bombs");
    var check = Rnumbers.includes(Rno);
    if (check === false) {
      Rnumbers.push(Rno);
    } else {
      k--;
    }
  }
  console.log(Rnumbers);
  for (let l = 0; l < bombAr.length; l++) {
    var click1 = document.getElementsByClassName("bombs")[l];
    click1?.addEventListener("click", function () {
      alert("GAME OVER");
    });
  }
}


function fncomb(getrow:number,getcol:number) {
  // var bombcount = 0;
  //
  let index = 0;

  for (let xVal = 0; xVal < getrow; xVal++) {
    for (let yVal = 0; yVal < getcol; yVal++) {
      console.log('finding for box: ', index );
      var combinationcheck = [];
      let bc=0
      if (xVal - 1 >= 0 && yVal - 1 >= 0) {
       if(ddd(xVal - 1, yVal - 1)){
        bc++;
       }
      }
      
      if (xVal - 1 >= 0) {
        if(ddd(xVal-1,yVal)){
          bc++;
        }
      }
    
      if (xVal - 1 >= 0 && xVal < getcol && yVal + 1 < getrow) {
        if(ddd(xVal - 1,yVal + 1)){
          bc++;
        }
      }
    
     
      if (yVal - 1 >= 0) {
        if(ddd(xVal,yVal-1)){
          bc++;
        }
      }
    
    
      if (yVal + 1 < getrow) {
        if(ddd(xVal,yVal+1)){
          bc++;
        }
      }
    
   
      if (xVal + 1 < getcol && yVal - 1 >= 0) {
        if(ddd(xVal+1,yVal-1)){
          bc++;
        }
      }
    
    
      if (xVal + 1 < getcol) {
        if(ddd(xVal+1,yVal)){
          bc++;
        }
      }
  
      if (xVal + 1 < getcol && yVal + 1 < getrow) {
        if(ddd(xVal+1,yVal+1)){
          bc++;
        }
      }

      console.log("bc for index: "+index +" is "+bc);
      let box = document.getElementsByClassName('cell'+index);
      if( box ){
        box[0].innerHTML = bc+'';
      }
      index++;
      
    }
  }
}



function ddd(x, y){
  //x = 0;
  let index = -1;
  for(let i=0;i<num.length;i++){
      //console.log(num[i].x);
      if( num[i].x === x && num[i].y === y )
        index = i;
  }
  if( index > -1){
    let idValue = 'cell'+ index;
    console.log('neighbour box ', index );
    let elem = document.getElementsByClassName(idValue);

    // console.log('test',idValue, elem);
    // console.log( 1/x );
    if( elem.length > 0 ){

      return elem[0].classList.contains('bombs');
    }
    // return false;
  }
  return false;
}




















function reset() {
  location.reload();
}








var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("column");
var mine = <HTMLInputElement>document.getElementById("mine");
var mainDiv = <HTMLDivElement>document.getElementById("box");
var bombAr: any[] = [];
var num: any[] = [];
var Rnumbers=[];

interface number_coordinates {
  x: number;
  y: number;
}
function quantity() {
  var row1 = parseInt(row?.value);        
  var column1 = parseInt(column?.value);
  var mine1 = parseInt(mine?.value);
  console.log(row1);
  console.log(column1);
  console.log(mine1);

  Clicking(row1, column1);
  rowcol(row1,column1); // pass rowval & col value
  random_mine(mine1);   // pass mine val
  fncomb(row1,column1); // pass rowval & col value
}

function rowcol (rowValue:number,columnValue:number){ 
  let unique = 0;   // for get cell id 
  for (let i = 0; i < rowValue; i++) {
    var breakElement = document.createElement("br");
    mainDiv.classList.add("container-1");
    for (let j = 0; j < columnValue; j++) {
      var Divbox = document.createElement("div");
      var cellID = "cell" + unique;
      var boxID = "boxes" + unique;
      console.log(boxID);
      Divbox.classList.add(boxID);
      bombAr.push(boxID);
      Divbox.classList.add("cell");
      Divbox.setAttribute('id',cellID)
      mainDiv.appendChild(Divbox);
      // var Divbox1 = document.createElement("div");
      // Divbox.appendChild(Divbox1);
      let numbers: number_coordinates = {
        x: i,
        y: j,
      };
      num.push(numbers);
      unique++;
    }
    mainDiv.appendChild(breakElement);
  }
  console.log(num);
  console.log(bombAr);
}
// function hide(Divbox){
//   var Divbox1 = document.createElement("div");
//   Divbox.appendChild(Divbox1);
// }

function random_mine(mineValue:number){
  for (let k = 0; k < mineValue; k++) {
    let Rno = Math.floor(Math.random() * bombAr.length);
    console.log(Rno);
    // Rno = 4;
    var Rbomb = "cell" + Rno;
    console.log(Rbomb);
    document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
    // document.getElementsByClassName('cell3')[0].classList.add("bombs");
    var check = Rnumbers.includes(Rno);
    if (check === false) {
      Rnumbers.push(Rno);
    } else {
      k--;
    }
  }
  console.log(Rnumbers);
  for (let l = 0; l < bombAr.length; l++) {
    var click1 = document.getElementsByClassName("bombs")[l];
    click1?.addEventListener("click", function () {
      alert("GAME OVER");
    });
  }
}


function fncomb(getrow:number,getcol:number) {
  // var bombcount = 0;
  //
  let index = 0;

  for (let xVal = 0; xVal < getrow; xVal++) {
    for (let yVal = 0; yVal < getcol; yVal++) {
      console.log('finding for box: ', index );
      let bc=0
      if (xVal - 1 >= 0 && yVal - 1 >= 0) {
       if(ddd(xVal - 1, yVal - 1)){
        bc++;
       }
      }
      
      if (xVal - 1 >= 0) {
        if(ddd(xVal-1,yVal)){
          bc++;
        }
      }
    
      if (xVal - 1 >= 0 && xVal < getcol && yVal + 1 < getrow) {
        if(ddd(xVal - 1,yVal + 1)){
          bc++;
        }
      }
    
     
      if (yVal - 1 >= 0) {
        if(ddd(xVal,yVal-1)){
          bc++;
        }
      }
    
    
      if (yVal + 1 < getrow) {
        if(ddd(xVal,yVal+1)){
          bc++;
        }
      }
    
   
      if (xVal + 1 < getcol && yVal - 1 >= 0) {
        if(ddd(xVal+1,yVal-1)){
          bc++;
        }
      }
    
    
      if (xVal + 1 < getcol) {
        if(ddd(xVal+1,yVal)){
          bc++;
        }
      }
  
      if (xVal + 1 < getcol && yVal + 1 < getrow) {
        if(ddd(xVal+1,yVal+1)){
          bc++;
        }
      }

      console.log("bc for index: "+index +" is "+bc);
      let box = document.getElementsByClassName('cell'+index);
      if( box ){
        box[0].innerHTML = bc+'';
      }
      index++;
      
    }
  }
}



function ddd(x, y){
  //x = 0;
  let index = -1;
  for(let i=0;i<num.length;i++){
      //console.log(num[i].x);
      if( num[i].x === x && num[i].y === y )
        index = i;
  }
  if( index > -1){
    let idValue = 'cell'+ index;
    console.log('neighbour box', index );
    let elem = document.getElementsByClassName(idValue);

    // console.log('test',idValue, elem);
    // console.log( 1/x );
    if( elem.length > 0 ){
      return elem[0].classList.contains('bombs');
    }
  }
  return false;
}



function Clicking(rows:number, cols:number) {
  let total = rows * cols;
  console.log(total)
 
  for(let i = 0; i < total; i++){
    let divs = <HTMLDivElement>document.getElementById("boxs"+i);
     console.log("div is "+ divs);
  }
  }










function reset() {
  location.reload();
}














var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("column");
var mine = <HTMLInputElement>document.getElementById("mine");
var mainDiv = <HTMLDivElement>document.getElementById("box");
var text =<HTMLDivElement>document.getElementById("text-view");
var bombAr: any[] = [];
var num: any[] = [];
var Rnumbers=[];
interface number_coordinates {
  x: number;
  y: number;
}
function quantity() {
  var row1 = parseInt(row?.value);        
  var column1 = parseInt(column?.value);
  var mine1 = parseInt(mine?.value);
  console.log(row1);
  console.log(column1);
  console.log(mine1);
  rowcol(row1,column1); // pass rowval & col value
  random_mine(mine1);   // pass mine val
  fncomb(row1,column1); // pass rowval & col value
  Clicking(row1, column1);
}

function rowcol (rowValue:number,columnValue:number){ 
  let unique = 0;   // for get cell id 
  for (let i = 0; i < rowValue; i++) {
    var breakElement = document.createElement("br");
    mainDiv.classList.add("container-1");
    for (let j = 0; j < columnValue; j++) {
      var Divbox = document.createElement("div");
      var boxID = "cell" + unique;
      console.log(boxID);
      Divbox.classList.add(boxID);
      bombAr.push(boxID);
      Divbox.classList.add("cell");
      mainDiv.appendChild(Divbox);
      let numbers: number_coordinates = {
        x: i,
        y: j,
      };
      num.push(numbers);
      unique++;
    }
    mainDiv.appendChild(breakElement);
  }
  console.log(num);
  console.log(bombAr);
}

function random_mine(mineValue:number){
  for (let k = 0; k < mineValue; k++) {
    let Rno = Math.floor(Math.random() * bombAr.length);
    console.log(Rno);
    // Rno = 4;
    var Rbomb = "cell" + Rno;
    console.log(Rbomb);
    document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
    // (<HTMLDivElement>document.getElementsByClassName(Rbomb)[0]).style.backgroundImage = "none";
    // document.getElementsByClassName('cell3')[0].classList.add("bombs");
    var check = Rnumbers.includes(Rno);
    if (check === false) {
      Rnumbers.push(Rno);
    } else {
      k--;
    }
  }
  console.log(Rnumbers);
  for (let l = 0; l < bombAr.length; l++) {
    var click1 = document.getElementsByClassName("bombs")[l];
    click1?.addEventListener("click", function () {
      // alert("GAME OVER");
      // console.log(RbombAr);
      for( let h=0; h<Rnumbers.length; h++){
        let hId = "cell"+Rnumbers[h];
        (<HTMLDivElement>document.getElementsByClassName(hId)[0]).style.backgroundColor= "white";
      }
      setTimeout(() => {
        // (<HTMLDivElement>document.getElementsByClassName("cell")[0]).style.backgroundColor = "white";
        text.style.display="block";
        mainDiv.style.display="none";
      }, 1000);
      
    });
  }
}


function fncomb(getrow:number,getcol:number) {
  // var bombcount = 0;
  //
  let index = 0;

  for (let xVal = 0; xVal < getrow; xVal++) {
    for (let yVal = 0; yVal < getcol; yVal++) {
      console.log('finding for box: ', index );
      let bc=0
      if (xVal - 1 >= 0 && yVal - 1 >= 0) {
       if(ddd(xVal - 1, yVal - 1)){
        bc++;
       }
      }
      
      if (xVal - 1 >= 0) {
        if(ddd(xVal-1,yVal)){
          bc++;
        }
      }
    
      if (xVal - 1 >= 0 && xVal < getcol && yVal + 1 < getrow) {
        if(ddd(xVal - 1,yVal + 1)){
          bc++;
        }
      }
    
     
      if (yVal - 1 >= 0) {
        if(ddd(xVal,yVal-1)){
          bc++;
        }
      }
    
    
      if (yVal + 1 < getrow) {
        if(ddd(xVal,yVal+1)){
          bc++;
        }
      }
    
   
      if (xVal + 1 < getcol && yVal - 1 >= 0) {
        if(ddd(xVal+1,yVal-1)){
          bc++;
        }
      }
    
    
      if (xVal + 1 < getcol) {
        if(ddd(xVal+1,yVal)){
          bc++;
        }
      }
  
      if (xVal + 1 < getcol && yVal + 1 < getrow) {
        if(ddd(xVal+1,yVal+1)){
          bc++;
        }
      }

      console.log("bc for index: "+index +" is "+bc);
      let box = document.getElementsByClassName('cell'+index);
      if( box ){
        box[0].innerHTML = bc+'';
      }
      index++;
      
    }
  }
}



function ddd(x, y){
  //x = 0;
  let index = -1;
  for(let i=0;i<num.length;i++){
      //console.log(num[i].x);
      if( num[i].x === x && num[i].y === y )
        index = i;
  }
  if( index > -1){
    let idValue = 'cell'+ index;
    console.log('neighbour box', index );
    let elem = document.getElementsByClassName(idValue);

    // console.log('test',idValue, elem);
    // console.log( 1/x );
    if( elem.length > 0 ){
      return elem[0].classList.contains('bombs');
    }
  }
  return false;
}



function Clicking(rows:number, cols:number) {
  let total = rows * cols;
  console.log("total",total);
  for(let i = 0; i < total; i++){
    var divs = document.querySelector(`.cell${i}`);
    console.log( divs );
    if( divs){
      divs.addEventListener('click', function() {
        var opencell= 'cell' + i;
        console.log('Index ', i );
        document.getElementsByClassName(opencell)[0].classList.add("open");
        if(document.getElementsByClassName(opencell)[0].classList.contains("bombs")){
         
          // (<HTMLDivElement>document.getElementsByClassName(opencell)[0]).style.backgroundImage = "url(./bomb.jpg)" ;
          (<HTMLDivElement>document.getElementsByClassName(opencell)[0]).innerHTML = "💣";
          
        }
      });
    }else{
      console.log('cell', i,'not found');
    }
  
  }

 


  }

  










function reset() {
  location.reload();
}




















































































var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("column");
var mine = <HTMLInputElement>document.getElementById("mine");
var mainDiv = <HTMLDivElement>document.getElementById("box");
var text =<HTMLDivElement>document.getElementById("text-view");
var bombAr: any[] = [];
var num: any[] = [];
var Rnumbers=[];
interface number_coordinates {
  x: number;
  y: number;
}
function quantity() {
  var row1 = parseInt(row?.value);        
  var column1 = parseInt(column?.value);
  var mine1 = parseInt(mine?.value);
  console.log(row1);
  console.log(column1);
  console.log(mine1);
  rowcol(row1,column1); // pass rowval & col value
  random_mine(mine1);   // pass mine val
  fncomb(row1,column1); // pass rowval & col value
  Clicking(row1, column1);
}

function rowcol (rowValue:number,columnValue:number){ 
  let unique = 0;   // for get cell id 
  for (let i = 0; i < rowValue; i++) {
    var breakElement = document.createElement("br");
    mainDiv.classList.add("container-1");
    for (let j = 0; j < columnValue; j++) {
      var Divbox = document.createElement("div");
      var boxID = "cell" + unique;
      console.log(boxID);
      Divbox.classList.add(boxID);
      bombAr.push(boxID);
      Divbox.classList.add("cell");
      mainDiv.appendChild(Divbox);
      let numbers: number_coordinates = {
        x: i,
        y: j,
      };
      num.push(numbers);
      unique++;
    }
    mainDiv.appendChild(breakElement);
  }
  console.log(num);
  console.log(bombAr);
}

function random_mine(mineValue:number){
  for (let k = 0; k < mineValue; k++) {
    let Rno = Math.floor(Math.random() * bombAr.length);
    console.log(Rno);
    // Rno = 4;
    var Rbomb = "cell" + Rno;
    console.log(Rbomb);
    document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
    // (<HTMLDivElement>document.getElementsByClassName(Rbomb)[0]).style.backgroundImage = "none";
    // document.getElementsByClassName('cell3')[0].classList.add("bombs");
    var check = Rnumbers.includes(Rno);
    if (check === false) {
      Rnumbers.push(Rno);
    } else {
      k--;
    }
  }
  console.log(Rnumbers);
  for (let l = 0; l < bombAr.length; l++) {
    var click1 = document.getElementsByClassName("bombs")[l];
    click1?.addEventListener("click", function () {
      // alert("GAME OVER");
      
      // (<HTMLDivElement>document.getElementsByClassName("bombs")[l]).classList.add("open");

      setTimeout(() => {
      
        text.style.display="block";
        mainDiv.style.display="none";
      }, 500);
      
    });

  }
}


function fncomb(getrow:number,getcol:number) {
  // var bombcount = 0;
  //
  let index = 0;

  for (let xVal = 0; xVal < getrow; xVal++) {
    for (let yVal = 0; yVal < getcol; yVal++) {
      console.log('finding for box: ', index );
      let bc=0
      if (xVal - 1 >= 0 && yVal - 1 >= 0) {
       if(ddd(xVal - 1, yVal - 1)){
        bc++;
       }
      }
      
      if (xVal - 1 >= 0) {
        if(ddd(xVal-1,yVal)){
          bc++;
        }
      }
    
      if (xVal - 1 >= 0 && xVal < getcol && yVal + 1 < getrow) {
        if(ddd(xVal - 1,yVal + 1)){
          bc++;
        }
      }
    
     
      if (yVal - 1 >= 0) {
        if(ddd(xVal,yVal-1)){
          bc++;
        }
      }
    
    
      if (yVal + 1 < getrow) {
        if(ddd(xVal,yVal+1)){
          bc++;
        }
      }
    
   
      if (xVal + 1 < getcol && yVal - 1 >= 0) {
        if(ddd(xVal+1,yVal-1)){
          bc++;
        }
      }
    
    
      if (xVal + 1 < getcol) {
        if(ddd(xVal+1,yVal)){
          bc++;
        }
      }
  
      if (xVal + 1 < getcol && yVal + 1 < getrow) {
        if(ddd(xVal+1,yVal+1)){
          bc++;
        }
      }

      console.log("bc for index: "+index +" is "+bc);
      let box = document.getElementsByClassName('cell'+index);
      if( box ){
        box[0].innerHTML = bc+'';
      }
      index++;
      
    }
  }
}



function ddd(x, y){
  //x = 0;
  let index = -1;
  for(let i=0;i<num.length;i++){
      //console.log(num[i].x);
      if( num[i].x === x && num[i].y === y )
        index = i;
  }
  if( index > -1){
    let idValue = 'cell'+ index;
    console.log('neighbour box', index );
    let elem = document.getElementsByClassName(idValue);

    // console.log('test',idValue, elem);
    // console.log( 1/x );
    if( elem.length > 0 ){
      return elem[0].classList.contains('bombs');
    }
  }
  return false;
}



function Clicking(rows:number, cols:number) {
  let total = rows * cols;
  console.log("total",total);
  for(let i = 0; i < total; i++){
    var divs = document.querySelector(`.cell${i}`);
    
    console.log( divs );
    if( divs){
      divs.addEventListener('click', function() {
        var opencell= 'cell' + i;
        console.log('Index ', i );
        document.getElementsByClassName(opencell)[0].classList.add("open");
        if(document.getElementsByClassName(opencell)[0].classList.contains("bombs")){
         
          (<HTMLDivElement>document.getElementsByClassName(opencell)[0]).style.backgroundImage = "url(./bomb.jpg)" ;
          // (<HTMLDivElement>document.getElementsByClassName(opencell)[0]).innerHTML = "💣";
        }
      });


    }
      
    // }else{
    //   console.log('cell', i,'not found');
    //   }
    
      
        divs.addEventListener('contextmenu', function me (e) {
        var opencell= 'cell' + i;
        console.log(opencell);
        e.preventDefault();
        const flagHTML = document.getElementsByClassName(opencell)[0].innerHTML;
        if( flagHTML != "🚩"){
          console.log("text");
          document.getElementsByClassName(opencell)[0].innerHTML = "🚩";
        }
        else{
          //divs.removeEventListener("contextmenu",me);
          document.getElementsByClassName(opencell)[0].innerHTML = "";
        }
        });
      }
    }       
  
  
  



 
  

  










function reset() {
  location.reload();
}

























var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("column");
var mine = <HTMLInputElement>document.getElementById("mine");
var mainDiv = <HTMLDivElement>document.getElementById("box");
var text =<HTMLDivElement>document.getElementById("text-view");
var bombAr: any[] = [];
var num: any[] = [];
var Rnumbers=[];
var bombs:any;
interface number_coordinates {
  x: number;
  y: number;
}
function quantity() {
  var row1 = parseInt(row?.value);        
  var column1 = parseInt(column?.value);
  var mine1 = parseInt(mine?.value);
  console.log(row1);
  console.log(column1);
  console.log(mine1);
  rowcol(row1,column1); // pass rowval & col value
  random_mine(mine1);   // pass mine val
  fncomb(row1,column1); // pass rowval & col value
  Clicking(row1, column1);
}

function rowcol (rowValue:number,columnValue:number){ 
  let unique = 0;   // for get cell id 
  for (let i = 0; i < rowValue; i++) {
    var breakElement = document.createElement("br");
    mainDiv.classList.add("container-1");
    for (let j = 0; j < columnValue; j++) {
      var Divbox = document.createElement("div");
      var boxID = "cell" + unique;
      console.log(boxID);
      Divbox.classList.add(boxID);
      bombAr.push(boxID);
      Divbox.classList.add("cell");
      mainDiv.appendChild(Divbox);
      let numbers: number_coordinates = {
        x: i,
        y: j,
      };
      num.push(numbers);
      unique++;
    }
    mainDiv.appendChild(breakElement);
  }
  console.log(num);
  console.log(bombAr);
}

function random_mine(mineValue:number){
  for (let k = 0; k < mineValue; k++) {
    let Rno = Math.floor(Math.random() * bombAr.length);
    console.log(Rno);
    // Rno = 4;
    var Rbomb = "cell" + Rno;
    console.log(Rbomb);
    document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
   document.getElementsByClassName(Rbomb)[0].classList.add("d");
  bombs =  document.querySelectorAll(".d");
    console.log("bombs");
    console.log(bombs);

    // (<HTMLDivElement>document.getElementsByClassName(Rbomb)[0]).style.backgroundImage = "none";
    // document.getElementsByClassName('cell3')[0].classList.add("bombs");
    var check = Rnumbers.includes(Rno);
    if (check === false) {
      Rnumbers.push(Rno);
    } else {
      k--;
    }
  }
  console.log(Rnumbers);
  for (let l = 0; l < bombAr.length; l++) {
    var click1 = document.getElementsByClassName("bombs")[l];
    click1?.addEventListener('click', (event)=>{
      console.log( event.target );
      if( !(event.target as any).classList.contains('flag') ){
        console.log('not flagged');
        setTimeout(() => {
  
          text.style.display="block";
          mainDiv.style.display="none";
        }, 500);
      }
      // if( event.target.classList.contains() )
      // console.log(click1);
      // if(!click1.classList.contains("flag")){
      //   setTimeout(() => {
      
      //     text.style.display="block";
      //     mainDiv.style.display="none";
      //   }, 500);
      // }
      
    }); 
    // function gameOver() {
    //   if(click1.classList.contains("flag")){
        
    //   }
    //   setTimeout(() => {
      
    //     text.style.display="block";
    //     mainDiv.style.display="none";
    //   }, 500);
    //   for(let i=0;i<bombs.length;i++){
    //     // if(bombs[i].classList.contains("flag")){
    //     //   bombs[i].removeEventListener('click',gameOver);
    //     //   console.log("bombss");
    //     // }
    //   }
    // }

  }
}


function fncomb(getrow:number,getcol:number) {
  // var bombcount = 0;
  //
  let index = 0;

  for (let xVal = 0; xVal < getrow; xVal++) {
    for (let yVal = 0; yVal < getcol; yVal++) {
      console.log('finding for box: ', index );
      let bc=0
      if (xVal - 1 >= 0 && yVal - 1 >= 0) {
       if(ddd(xVal - 1, yVal - 1)){
        bc++;
       }
      }
      
      if (xVal - 1 >= 0) {
        if(ddd(xVal-1,yVal)){
          bc++;
        }
      }
    
      if (xVal - 1 >= 0 && xVal < getcol && yVal + 1 < getrow) {
        if(ddd(xVal - 1,yVal + 1)){
          bc++;
        }
      }
    
     
      if (yVal - 1 >= 0) {
        if(ddd(xVal,yVal-1)){
          bc++;
        }
      }
    
    
      if (yVal + 1 < getrow) {
        if(ddd(xVal,yVal+1)){
          bc++;
        }
      }
    
   
      if (xVal + 1 < getcol && yVal - 1 >= 0) {
        if(ddd(xVal+1,yVal-1)){
          bc++;
        }
      }
    
    
      if (xVal + 1 < getcol) {
        if(ddd(xVal+1,yVal)){
          bc++;
        }
      }
  
      if (xVal + 1 < getcol && yVal + 1 < getrow) {
        if(ddd(xVal+1,yVal+1)){
          bc++;
        }
      }

      console.log("bc for index: "+index +" is "+bc);
      let box = document.getElementsByClassName('cell'+index);
      if( box ){
        box[0].innerHTML = bc+'';
      }
      index++;
      
    }
  }
}



function ddd(x, y){
  //x = 0;
  let index = -1;
  for(let i=0;i<num.length;i++){
      //console.log(num[i].x);
      if( num[i].x === x && num[i].y === y )
        index = i;
  }
  if( index > -1){
    let idValue = 'cell'+ index;
    console.log('neighbour box', index );
    let elem = document.getElementsByClassName(idValue);

    // console.log('test',idValue, elem);
    // console.log( 1/x );
    if( elem.length > 0 ){
      return elem[0].classList.contains('bombs');
    }
  }
  return false;
}



function Clicking(rows:number, cols:number) {
  let total = rows * cols;
  console.log("total",total);
  for(let i = 0; i < total; i++){
    var divs = document.querySelector(`.cell${i}`);
    console.log( divs );
    if( divs){
      divs.addEventListener('click', me);
      function me() {
        var opencell= 'cell' + i;
        console.log('Index ', i );
        let clickedCell = document.getElementsByClassName(opencell)[0];
        clickedCell.classList.add("open");
        if(clickedCell.classList.contains("bombs")){
         
          (<HTMLDivElement>document.getElementsByClassName(opencell)[0]).style.backgroundImage = "url(./bomb.jpg)" ;

          // (<HTMLDivElement>document.getElementsByClassName(opencell)[0]).innerHTML = "💣";

        }
       
      }


    }
      
    // }else{
    //   console.log('cell', i,'not found');
    //   }
    
      
        divs.addEventListener('contextmenu', function(e) {
        var opencell= 'cell' + i;
        console.log(opencell);
        e.preventDefault();
        const flagHTML = document.getElementsByClassName(opencell)[0];
        if( !flagHTML.classList.contains("flag") && !flagHTML.classList.contains("open")){
          // console.log("text");
          flagHTML.classList.add("flag");
          if(flagHTML.classList.contains("flag")){
            console.log("text");
            flagHTML.removeEventListener('click', me);
            // flagHTML.removeEventListener('click', \);
          }
         
        }
        else{
          //divs.removeEventListener("contextmenu",me);
          flagHTML.classList.remove("flag");
        }
        });
      }
    }       
  
  
  



 
        // document.getElementsByClassName(opencell)[0].classList.remove("flag");
      //     document.getElementsByClassName(opencell)[0].removeEventListener('click',(e) => {
      //       e.preventDefault();

  










function reset() {
  location.reload();
}























var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("column");
var mine = <HTMLInputElement>document.getElementById("mine");
var mainDiv = <HTMLDivElement>document.getElementById("box");
var text =<HTMLDivElement>document.getElementById("text-view");
var bombAr: any[] = [];
var num: any[] = [];
var Rnumbers=[];
var bombs:any;
interface number_coordinates {
  x: number;
  y: number;
}
function quantity() {
  var row1 = parseInt(row?.value);        
  var column1 = parseInt(column?.value);
  var mine1 = parseInt(mine?.value);
  console.log(row1);
  console.log(column1);
  console.log(mine1);
  rowcol(row1,column1); // pass rowval & col value
  random_mine(mine1);   // pass mine val
  fncomb(row1,column1); // pass rowval & col value
  Clicking(row1, column1);
}

function rowcol (rowValue:number,columnValue:number){ 
  let unique = 0;   // for get cell id 
  for (let i = 0; i < rowValue; i++) {
    var breakElement = document.createElement("br");
    mainDiv.classList.add("container-1");
    for (let j = 0; j < columnValue; j++) {
      var Divbox = document.createElement("div");
      var boxID = "cell" + unique;
      console.log(boxID);
      Divbox.classList.add(boxID);
      bombAr.push(boxID);
      Divbox.classList.add("cell");
      mainDiv.appendChild(Divbox);
      let numbers: number_coordinates = {
        x: i,
        y: j,
      };
      num.push(numbers);
      unique++;
    }
    mainDiv.appendChild(breakElement);
  }
  console.log(num);
  console.log(bombAr);
}

function random_mine(mineValue:number){
  for (let k = 0; k < mineValue; k++) {
    let Rno = Math.floor(Math.random() * bombAr.length);
    console.log(Rno);
    // Rno = 4;
    var Rbomb = "cell" + Rno;
    console.log(Rbomb);
    document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
   document.getElementsByClassName(Rbomb)[0].classList.add("d");
  b document.querySelectorAll(".d");
    console.log("bombs");
    console.log(bombs);

    // (<HTMLDivElement>document.getElementsByClassName(Rbomb)[0]).style.backgroundImage = "none";
    // document.getElementsByClassName('cell3')[0].classList.add("bombs");
    var check = Rnumbers.includes(Rno);
    if (check === false) {
      Rnumbers.push(Rno);
    } else {
      k--;
    }
  }
  console.log(Rnumbers);
  for (let l = 0; l < bombAr.length; l++) {
    var click1 = document.getElementsByClassName("bombs")[l];
    click1?.addEventListener('click', gameOver); 
    function gameOver() {
      setTimeout(() => {
        text.style.display="block";
        mainDiv.style.display="none";
      }, 500);
      
      for(let i=0;i<bombs.length;i++){
        if(bombs[i].classList.contains("flag")){
          bombs[i].removeEventListener('click',gameOver);
          console.log("bombss");
        }
      }
    }
    }

  }



function fncomb(getrow:number,getcol:number) {
  // var bombcount = 0;
  //
  let index = 0;

  for (let xVal = 0; xVal < getrow; xVal++) {
    for (let yVal = 0; yVal < getcol; yVal++) {
      console.log('finding for box: ', index );
      let bc=0
      if (xVal - 1 >= 0 && yVal - 1 >= 0) {
       if(ddd(xVal - 1, yVal - 1)){
        bc++;
       }
      }
      
      if (xVal - 1 >= 0) {
        if(ddd(xVal-1,yVal)){
          bc++;
        }
      }
    
      if (xVal - 1 >= 0 && xVal < getcol && yVal + 1 < getrow) {
        if(ddd(xVal - 1,yVal + 1)){
          bc++;
        }
      }
    
     
      if (yVal - 1 >= 0) {
        if(ddd(xVal,yVal-1)){
          bc++;
        }
      }
    
    
      if (yVal + 1 < getrow) {
        if(ddd(xVal,yVal+1)){
          bc++;
        }
      }
    
   
      if (xVal + 1 < getcol && yVal - 1 >= 0) {
        if(ddd(xVal+1,yVal-1)){
          bc++;
        }
      }
    
    
      if (xVal + 1 < getcol) {
        if(ddd(xVal+1,yVal)){
          bc++;
        }
      }
  
      if (xVal + 1 < getcol && yVal + 1 < getrow) {
        if(ddd(xVal+1,yVal+1)){
          bc++;
        }
      }

      console.log("bc for index: "+index +" is "+bc);
      let box = document.getElementsByClassName('cell'+index);
      if( box ){
        box[0].innerHTML = bc+'';
      }
      index++;
      
    }
  }
}



function ddd(x, y){
  //x = 0;
  let index = -1;
  for(let i=0;i<num.length;i++){
      //console.log(num[i].x);
      if( num[i].x === x && num[i].y === y )
        index = i;
  }
  if( index > -1){
    let idValue = 'cell'+ index;
    console.log('neighbour box', index );
    let elem = document.getElementsByClassName(idValue);

    // console.log('test',idValue, elem);
    // console.log( 1/x );
    if( elem.length > 0 ){
      return elem[0].classList.contains('bombs');
    }
  }
  return false;
}



function Clicking(rows:number, cols:number) {
  let total = rows * cols;
  console.log("total",total);
  for(let i = 0; i < total; i++){
    var divs = document.querySelector(`.cell${i}`);
    console.log( divs );
    if( divs){
      divs.addEventListener('click', me);
      function me() {
        var opencell= 'cell' + i;
        console.log('Index ', i );
        let clickedCell = document.getElementsByClassName(opencell)[0];
        clickedCell.classList.add("open");
        if(clickedCell.classList.contains("bombs")){
         
          (<HTMLDivElement>document.getElementsByClassName(opencell)[0]).style.backgroundImage = "url(./bomb.jpg)" ;

          // (<HTMLDivElement>document.getElementsByClassName(opencell)[0]).innerHTML = "💣";

        }
       
      }


    }
      
    // }else{
    //   console.log('cell', i,'not found');
    //   }
    
      
        divs.addEventListener('contextmenu', function(e) {
        var opencell= 'cell' + i;
        console.log(opencell);
        e.preventDefault();
        const flagHTML = document.getElementsByClassName(opencell)[0];
        if( !flagHTML.classList.contains("flag") && !flagHTML.classList.contains("open")){
          // console.log("text");
          flagHTML.classList.add("flag");
          if(flagHTML.classList.contains("flag")){
            console.log("text");
            flagHTML.removeEventListener('click', me);
            // flagHTML.removeEventListener('click', \);
          }
         
        }
        else{
          //divs.removeEventListener("contextmenu",me);
          flagHTML.classList.remove("flag");
        }
        });
      }
    }       
  
  
  



 
        // document.getElementsByClassName(opencell)[0].classList.remove("flag");
      //     document.getElementsByClassName(opencell)[0].removeEventListener('click',(e) => {
      //       e.preventDefault();

  










function reset() {
  location.reload();
}












var row = <HTMLInputElement>document.getElementById("row");
var column = <HTMLInputElement>document.getElementById("column");
var mine = <HTMLInputElement>document.getElementById("mine");
var mainDiv = <HTMLDivElement>document.getElementById("box");
var text =<HTMLDivElement>document.getElementById("text-view");
var bombAr: any[] = [];
var num: any[] = [];
var Rnumbers=[];
interface number_coordinates {
  x: number;
  y: number;
}
function quantity() {
  var row1 = parseInt(row?.value);        
  var column1 = parseInt(column?.value);
  var mine1 = parseInt(mine?.value);
  console.log(row1);
  console.log(column1);
  console.log(mine1);
  rowcol(row1,column1); // pass rowval & col value
  random_mine(mine1);   // pass mine val
  fncomb(row1,column1); // pass rowval & col value
  Clicking(row1, column1);
}

function rowcol (rowValue:number,columnValue:number){ 
  let unique = 0;   // for get cell id 
  for (let i = 0; i < rowValue; i++) {
    var breakElement = document.createElement("br");
    mainDiv.classList.add("container-1");
    for (let j = 0; j < columnValue; j++) {
      var Divbox = document.createElement("div");
      var boxID = "cell" + unique;
      console.log(boxID);
      Divbox.classList.add(boxID);
      bombAr.push(boxID);
      Divbox.classList.add("cell");
      mainDiv.appendChild(Divbox);
      let numbers: number_coordinates = {
        x: i,
        y: j,
      };
      num.push(numbers);
      unique++;
    }
    mainDiv.appendChild(breakElement);
  }
  console.log(num);
  console.log(bombAr);
}

function random_mine(mineValue:number){
  for (let k = 0; k < mineValue; k++) {
    let Rno = Math.floor(Math.random() * bombAr.length);
    console.log(Rno);
    // Rno = 4;
    var Rbomb = "cell" + Rno;
    console.log(Rbomb);
    document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
    // (<HTMLDivElement>document.getElementsByClassName(Rbomb)[0]).style.backgroundImage = "none";
    // document.getElementsByClassName('cell3')[0].classList.add("bombs");
    var check = Rnumbers.includes(Rno);
    if (check === false) {
      Rnumbers.push(Rno);
    } else {
      k--;
    }
  }
  console.log(Rnumbers);
  for (let l = 0; l < bombAr.length; l++) {
    var click1 = document.getElementsByClassName("bombs")[l];
    click1?.addEventListener('click', (event)=>{
      console.log( event.target );
      if( !(event.target as any).classList.contains('flag') ){
        console.log('not flagged');
        setTimeout(() => {
  
          text.style.display="block";
          mainDiv.style.display="none";
        }, 500);
      }
    });
  }
  
}

function fncomb(getrow:number,getcol:number) {
  // var bombcount = 0;
  //
  let index = 0;

  for (let xVal = 0; xVal < getrow; xVal++) {
    for (let yVal = 0; yVal < getcol; yVal++) {
      console.log('finding for box: ', index );
      let bc=0
      if (xVal - 1 >= 0 && yVal - 1 >= 0) {
       if(ddd(xVal - 1, yVal - 1)){
        bc++;
       }
      }
      
      if (xVal - 1 >= 0) {
        if(ddd(xVal-1,yVal)){
          bc++;
        }
      }
    
      if (xVal - 1 >= 0 && xVal < getcol && yVal + 1 < getrow) {
        if(ddd(xVal - 1,yVal + 1)){
          bc++;
        }
      }
    
     
      if (yVal - 1 >= 0) {
        if(ddd(xVal,yVal-1)){
          bc++;
        }
      }
    
    
      if (yVal + 1 < getrow) {
        if(ddd(xVal,yVal+1)){
          bc++;
        }
      }
    
   
      if (xVal + 1 < getcol && yVal - 1 >= 0) {
        if(ddd(xVal+1,yVal-1)){
          bc++;
        }
      }
    
    
      if (xVal + 1 < getcol) {
        if(ddd(xVal+1,yVal)){
          bc++;
        }
      }
  
      if (xVal + 1 < getcol && yVal + 1 < getrow) {
        if(ddd(xVal+1,yVal+1)){
          bc++;
        }
      }

      console.log("bc for index: "+index +" is "+bc);
      let box = document.getElementsByClassName('cell'+index);
      if( box ){
        box[0].innerHTML = bc+'';
      }
      index++;
      
    }
  }
}



function ddd(x, y){
  //x = 0;
  let index = -1;
  for(let i=0;i<num.length;i++){
      //console.log(num[i].x);
      if( num[i].x === x && num[i].y === y )
        index = i;
  }
  if( index > -1){
    let idValue = 'cell'+ index;
    console.log('neighbour box', index );
    let elem = document.getElementsByClassName(idValue);

    // console.log('test',idValue, elem);
    // console.log( 1/x );
    if( elem.length > 0 ){
      return elem[0].classList.contains('bombs');
    }
  }
  return false;
}



function Clicking(rows:number, cols:number) {
  let total = rows * cols;
  console.log("total",total);
  for(let i = 0; i < total; i++){
    var divs = document.querySelector(`.cell${i}`);
    console.log( divs );
    if( divs){
      divs.addEventListener('click', me);
      function me() {
        var opencell= 'cell' + i;
        console.log('Index ', i );
        let clickedCell = document.getElementsByClassName(opencell)[0];
        clickedCell.classList.add("open");
        if(clickedCell.classList.contains("bombs")){
         
          (<HTMLDivElement>document.getElementsByClassName(opencell)[0]).style.backgroundImage = "url(./bomb.jpg)" ;

          // (<HTMLDivElement>document.getElementsByClassName(opencell)[0]).innerHTML = "💣";

          // if(clickedCell.classList.contains("flag")){
          //     divs.removeEventListener
          // }
        }
       
      }


    }
      
    // }else{
    //   console.log('cell', i,'not found');
    //   }
    
      
        divs.addEventListener('contextmenu', function(e) {
        var opencell= 'cell' + i;
        console.log(opencell);
        e.preventDefault();
        const flagHTML = document.getElementsByClassName(opencell)[0];
        if( !flagHTML.classList.contains("flag") && !flagHTML.classList.contains("open")){
          // console.log("text");
          flagHTML.classList.add("flag");
          // if(flagHTML.classList.contains("flag")){
          //   console.log("text");
          //   flagHTML.removeEventListener('click', me);
          //   flagHTML.removeEventListener('click', gameOver);
          // }
         
        }
        else{
          //divs.removeEventListener("contextmenu",me);
          flagHTML.classList.remove("flag");
          if(flagHTML.classList.contains("bombs")){
            flagHTML?.addEventListener('click', (event)=>{
              setTimeout(() => {
  
                text.style.display="block";
                mainDiv.style.display="none";
              }, 500);
            });
          }
        }
        });
      }
    }       
  
  
  



 
        // document.getElementsByClassName(opencell)[0].classList.remove("flag");
      //     document.getElementsByClassName(opencell)[0].removeEventListener('click',(e) => {
      //       e.preventDefault();

  










function reset() {
  location.reload();
}












function getSurroudingBoxes(xValue: number, yValue: number): number[] {
  var rowLength = parseInt(row?.value);
  var columnLength = parseInt(column?.value);
  //conditions for getting neighbouring nodes of Mine.
  let totalValues = rowLength * columnLength;

  let a: any[] = [];
  //top left
  if (xValue - 1 >= 0 && yValue - 1 >= 0) {
    a.push([xValue - 1, yValue - 1]);
  }

  //top
  if (xValue - 1 >= 0) {
    a.push([xValue - 1, yValue]);
  }

  //top right
  // if (xValue - 1 >= 0 && yValue + 1 < rowLength) {
  //   a.push([xValue - 1, yValue + 1]);
  // }
  if (xValue - 1 >= 0 && xValue < columnLength && yValue + 1 < rowLength) {
    a.push([xValue - 1, yValue + 1]);
  }

  //left
  if (yValue - 1 >= 0) {
    a.push([xValue, yValue - 1]);
  }

  //right
  if (yValue + 1 < rowLength) {
    a.push([xValue, yValue + 1]);
  }

  //bottom left
  if (xValue + 1 < columnLength && yValue - 1 >= 0) {
    a.push([xValue + 1, yValue - 1]);
  }

  //bottom
  if (xValue + 1 < columnLength) {
    a.push([xValue + 1, yValue]);
  }

  //bottom right
  if (xValue + 1 < columnLength && yValue + 1 < rowLength) {
    a.push([xValue + 1, yValue + 1]);
  }

  return a;
}

function someExFunction(currentIndex: number, tdTags) {
  console.log("current Index Value is : " + currentIndex);
  let Example: any[] = [];

  console.log("array value : ");
  console.log(Example);

  var childDiv = document.querySelectorAll(".divTag");
  let bombEl = document.querySelectorAll(".bomb");

  let rowValue = parseInt(row?.value);
  let columnValue = parseInt(column?.value);

  let totalDivs = rowValue * columnValue;

  console.log("from someExFunction");

  var resultArray: any[][] = [];
  // let currentIndex = ;
  let index = 0;
  for (let i = 0; i < rowValue; i++) {
    resultArray[i] = [];
    for (let j = 0; j < columnValue; j++) {
      // resultArray[i][j] = getSurroudingBoxes(i, j);

      if (currentIndex === index) {
        let array: any[] = [];
        var bCounts = document.querySelectorAll(".bcounts");
        let countElement = document.getElementById(`divId${currentIndex}`);
        let el = "#divId" + currentIndex + " .divTag";
        console.log(countElement);

        if (uniqueValues.includes(currentIndex)) {
          for (let i = 0; i < tdTags.length; i++) {
            if (tdTags[i].classList.contains("demo")) {
              tdTags[i].classList.add("divStyleText");
              if (childDiv[i].classList.contains("bomb")) {
                childDiv[i].classList.add("hide");
              }
            }
          }
        }

        if (
          !countElement.classList.contains("bcounts") &&
          !uniqueValues.includes(currentIndex)
        ) {
          demoFunction(currentIndex);
        }
      }
      index++;
      // emptyArray.push(resultArray[i][j]);
      // console.log(resultArray);
    }
  }
}

function LoopingFunction(surroundBoxes: number[]) {
  // console.log("td tags in Loop function");
  let selector;

  console.log("surrounding boxes");
  console.log(surroundBoxes.length);

  // console.log("Looping function called");
  for (let i = 0; i < surroundBoxes.length; i++) {
    // if (uniqueValues.includes(surroundBoxes[i])) {
    //   const [x, y] = surroundBoxes[i] as any;
    //   const id = someEx[x][y].identifier;
    //   const idValue = someEx[x][y];

    //   var bombs = document.querySelectorAll("bomb");

    //   for (let i = 0; i < bombs.length; i++) {
    //     bombs[i].classList.add("hide");
    //   }
    // }

    if (!uniqueValues.includes(surroundBoxes[i])) {
      const [x, y] = surroundBoxes[i] as any;
      const id = someEx[x][y].identifier;
      const idValue = someEx[x][y];
      // console.log("idValue is : ");
      // console.log(idValue);

      // console.log("id is : " + id);

      const elem = document.getElementById(`divId${id}`);

      if (elem && elem.classList.contains("bcounts")) {
        selector = "#divId" + id + " .divTag";
        const anotherSelector = "#divId" + id;

        document.querySelector(selector).classList.add("hide");
        document.querySelector(anotherSelector).classList.add("divStyleText");

        let mineValue = parseInt(mineInput?.value);
        if (mineValue === 1) {
          recursiveIds.push(selector);
          // return;
        }
        // return;

        console.log("recursive Array");
        console.log(recursiveIds);
        // return;
      } else {
        const bCounts = document.querySelectorAll(".bcounts");
        console.log("bcOunts values");
        console.log(bCounts);

        const elseSelector = "#divId" + id + " .divTag";
        const elseId = id;
        console.log("from else Selector");
        console.log(id);

        if (!uniqueValues.includes(elseId)) {
          if (!recursiveIds.includes(elseSelector)) {
            document.querySelector(elseSelector).classList.add("hide");

            // return;
            recursiveIds.push(elseSelector);
            return;
            // if(!recursiveIds.includes(selector)){

            // }
            // return;
          }
        }
      }
    } else {
      const [x, y] = surroundBoxes[i] as any;
      const id = someEx[x][y].identifier;
      const elseSelectorDiv = "#divId" + id + " .divTag";

      const mineValue = parseInt(mineInput?.value);
      if (mineValue > 1) {
        document.querySelector(elseSelectorDiv).classList.add("hide");
        recursiveIds.push(elseSelectorDiv);
      }
    }
  }

  console.log("recursive Array : ");
  console.log(recursiveIds);
}

function demoFunction(currentIndex) {
  var indexArray: any[] = [];

  // console.log("demo Function called");
  const newRowValue = parseInt(row?.value);
  const newColValue = parseInt(column?.value);

  // indexArray.push(currentIndex);
  // console.log(indexArray);
  //nested for loop
  // console.log("current index for loop called");

  const array: any[] = [];

  for (let i = 0; i < newRowValue; i++) {
    for (let j = 0; j < newColValue; j++) {
      const surroundingBoxes = getSurroudingBoxes(i, j);
      console.log("surrounding boxes values");
      // console.log(surroundingBoxes);
      // array.push(surroundingBoxes);
      LoopingFunction(surroundingBoxes);
    }
  }

}