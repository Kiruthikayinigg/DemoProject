var row = document.getElementById("row");
var column = document.getElementById("column");
var mine = document.getElementById("mine");
var mainDiv = document.getElementById("box");
var text = document.getElementById("text-view");
var bombAr = [];
var num = [];
var noAr = [];
var s;
var Rnumbers = [];
var xx, yy;
var nos = [xx, yy];
var idIndex = {};
var rows;
var cols;
function quantity() {
    var row1 = parseInt(row === null || row === void 0 ? void 0 : row.value);
    var column1 = parseInt(column === null || column === void 0 ? void 0 : column.value);
    var mine1 = parseInt(mine === null || mine === void 0 ? void 0 : mine.value);
    rows = row1;
    cols = column1;
    console.log(row1);
    console.log(column1);
    console.log(mine1);
    rowcol(row1, column1); // pass rowval & col value
    random_mine(mine1); // pass mine val
    fncomb(row1, column1); // pass rowval & col value
    Clicking(row1, column1);
}
function rowcol(rowValue, columnValue) {
    var unique = 0; // for get cell id
    for (var i = 0; i < rowValue; i++) {
        var breakElement = document.createElement("br");
        mainDiv.classList.add("container-1");
        for (var j = 0; j < columnValue; j++) {
            var Divbox = document.createElement("div");
            var boxID = "cell" + unique;
            console.log(boxID);
            Divbox.classList.add(boxID);
            bombAr.push(boxID);
            Divbox.classList.add("cell");
            mainDiv.appendChild(Divbox);
            var numbers = {
                x: i,
                y: j
            };
            // xx = i;
            // yy = j;
            nos = [(xx = i), (yy = j)];
            noAr.push(nos);
            num.push(numbers);
            unique++;
        }
        mainDiv.appendChild(breakElement);
    }
    console.log(num);
    console.log(noAr);
    console.log(bombAr);
    noAr.forEach(function (element, index) {
        idIndex[element] = bombAr[index];
    });
    console.log("idindex", idIndex);
}
function random_mine(mineValue) {
    for (var k = 0; k < mineValue; k++) {
        var Rno = Math.floor(Math.random() * bombAr.length);
        console.log(Rno);
        // Rno = 4;
        var Rbomb = "cell" + Rno;
        console.log(Rbomb);
        document.getElementsByClassName(Rbomb)[0].classList.add("bombs");
        var check = Rnumbers.includes(Rno);
        if (check === false) {
            Rnumbers.push(Rno);
        }
        else {
            k--;
        }
    }
    console.log(Rnumbers);
    for (var l = 0; l < bombAr.length; l++) {
        var click1 = document.getElementsByClassName("bombs")[l];
        click1 === null || click1 === void 0 ? void 0 : click1.addEventListener("click", function (event) {
            console.log(event.target);
            if (!event.target.classList.contains("flag")) {
                console.log("not flagged");
                setTimeout(function () {
                    text.style.display = "block";
                    mainDiv.style.display = "none";
                }, 500);
            }
        });
    }
}
function fncomb(getrow, getcol) {
    var index = 0;
    for (var xVal = 0; xVal < getrow; xVal++) {
        for (var yVal = 0; yVal < getcol; yVal++) {
            console.log("finding for box: ", index);
            var bc = 0;
            if (xVal - 1 >= 0 && yVal - 1 >= 0) {
                if (ddd(xVal - 1, yVal - 1)) {
                    bc++;
                }
            }
            if (xVal - 1 >= 0) {
                if (ddd(xVal - 1, yVal)) {
                    bc++;
                }
            }
            if (xVal - 1 >= 0 && xVal < getcol && yVal + 1 < getrow) {
                if (ddd(xVal - 1, yVal + 1)) {
                    bc++;
                }
            }
            if (yVal - 1 >= 0) {
                if (ddd(xVal, yVal - 1)) {
                    bc++;
                }
            }
            if (yVal + 1 < getrow) {
                if (ddd(xVal, yVal + 1)) {
                    bc++;
                }
            }
            if (xVal + 1 < getcol && yVal - 1 >= 0) {
                if (ddd(xVal + 1, yVal - 1)) {
                    bc++;
                }
            }
            if (xVal + 1 < getcol) {
                if (ddd(xVal + 1, yVal)) {
                    bc++;
                }
            }
            if (xVal + 1 < getcol && yVal + 1 < getrow) {
                if (ddd(xVal + 1, yVal + 1)) {
                    bc++;
                }
            }
            console.log("bc for index: " + index + " is " + bc);
            var box = document.getElementsByClassName("cell" + index);
            if (box) {
                box[0].innerHTML = bc + "";
                if (box[0].innerHTML !== "0") {
                    box[0].classList.add("ncell");
                }
                else if (box[0].innerHTML === "0") {
                    box[0].classList.add("Ecell");
                }
            }
            // if(box[0].classList.contains("bombs")){
            //   box[0].innerHTML = "";
            // }
            index++;
        }
    }
}
function ddd(x, y) {
    var index = -1;
    for (var i = 0; i < num.length; i++) {
        if (num[i].x === x && num[i].y === y)
            index = i;
    }
    if (index > -1) {
        var idValue = "cell" + index;
        console.log("neighbour box", index);
        var elem = document.getElementsByClassName(idValue);
        if (elem.length > 0) {
            return elem[0].classList.contains("bombs");
        }
    }
    return false;
}
function Clicking(rows, cols) {
    var total = rows * cols;
    console.log("total", total);
    var _loop_1 = function (i) {
        divs = document.querySelector(".cell".concat(i));
        console.log(divs);
        if (divs) {
            divs.addEventListener("click", function me() {
                var opencell = "cell" + i;
                console.log("Index ", i);
                var clickedCell = document.getElementsByClassName(opencell)[0];
                if (clickedCell.classList.contains("bombs") &&
                    !clickedCell.classList.contains("flag")) {
                    clickedCell.classList.add("open");
                    (document.getElementsByClassName(opencell)[0]).style.backgroundImage = "url(./bomb.jpg)";
                }
                if (clickedCell.classList.contains("ncell")) {
                    clickedCell.classList.add("open");
                }
                if (clickedCell.classList.contains("Ecell")) {
                    s = [];
                    s.push(opencell);
                    var index = 0;
                    console.log(opencell);
                    for (var xVal = 0; xVal < rows; xVal++) {
                        for (var yVal = 0; yVal < cols; yVal++) {
                            var box = "cell" + index;
                            if (opencell == box) {
                                expand(xVal, yVal);
                            }
                            index++;
                        }
                    }
                    // console.log(xValue);
                    // console.log(yValue);
                    //top left
                }
            });
            divs.addEventListener("contextmenu", function (e) {
                var opencell = "cell" + i;
                console.log(opencell);
                e.preventDefault();
                var flagHTML = document.getElementsByClassName(opencell)[0];
                if (!flagHTML.classList.contains("flag") &&
                    !flagHTML.classList.contains("open")) {
                    flagHTML.classList.add("flag");
                }
                else {
                    flagHTML.classList.remove("flag");
                }
            });
        }
    };
    var divs;
    for (var i = 0; i < total; i++) {
        _loop_1(i);
    }
}
function expand(xValue, yValue) {
    if (xValue - 1 >= 0 && yValue - 1 >= 0) {
        var temp = idIndex[xValue - 1 + "," + (yValue - 1)];
        if (document.getElementsByClassName(temp)[0].classList.contains("ncell")) {
            if (!s.includes(temp)) {
                s.push(temp);
            }
        }
        else {
            if (!s.includes(temp)) {
                s.push(temp);
                expand(xValue - 1, yValue - 1);
            }
        }
    }
    //top
    if (xValue - 1 >= 0) {
        var temp = idIndex[xValue - 1 + "," + yValue];
        if (document.getElementsByClassName(temp)[0].classList.contains("ncell")) {
            if (!s.includes(temp)) {
                s.push(temp);
            }
        }
        else {
            if (!s.includes(temp)) {
                s.push(temp);
                expand(xValue - 1, yValue);
            }
        }
    }
    if (xValue - 1 >= 0 && xValue < cols && yValue + 1 < rows) {
        var temp = idIndex[xValue - 1 + "," + (yValue + 1)];
        if (document.getElementsByClassName(temp)[0].classList.contains("ncell")) {
            if (!s.includes(temp)) {
                s.push(temp);
            }
        }
        else {
            if (!s.includes(temp)) {
                s.push(temp);
                expand(xValue - 1, yValue + 1);
            }
        }
    }
    //left
    if (yValue - 1 >= 0) {
        var temp = idIndex[xValue + "," + (yValue - 1)];
        if (document.getElementsByClassName(temp)[0].classList.contains("ncell")) {
            if (!s.includes(temp)) {
                s.push(temp);
            }
        }
        else {
            if (!s.includes(temp)) {
                s.push(temp);
                expand(xValue, yValue - 1);
            }
        }
    }
    //right
    if (yValue + 1 < rows) {
        var temp = idIndex[xValue + "," + (yValue + 1)];
        if (document.getElementsByClassName(temp)[0].classList.contains("ncell")) {
            if (!s.includes(temp)) {
                s.push(temp);
            }
        }
        else {
            if (!s.includes(temp)) {
                s.push(temp);
                expand(xValue, yValue + 1);
            }
        }
    }
    //bottom left
    if (xValue + 1 < cols && yValue - 1 >= 0) {
        var temp = idIndex[xValue + 1 + "," + (yValue - 1)];
        if (document.getElementsByClassName(temp)[0].classList.contains("ncell")) {
            if (!s.includes(temp)) {
                s.push(temp);
            }
        }
        else {
            if (!s.includes(temp)) {
                s.push(temp);
                expand(xValue + 1, yValue - 1);
            }
        }
    }
    //bottom
    if (xValue + 1 < cols) {
        var temp = idIndex[xValue + 1 + "," + yValue];
        if (document.getElementsByClassName(temp)[0].classList.contains("ncell")) {
            if (!s.includes(temp)) {
                s.push(temp);
            }
        }
        else {
            if (!s.includes(temp)) {
                s.push(temp);
                expand(xValue + 1, yValue);
            }
        }
    }
    //bottom right
    if (xValue + 1 < cols && yValue + 1 < cols) {
        var temp = idIndex[xValue + 1 + "," + (yValue + 1)];
        if (document.getElementsByClassName(temp)[0].classList.contains("ncell")) {
            if (!s.includes(temp)) {
                s.push(temp);
            }
        }
        else {
            if (!s.includes(temp)) {
                s.push(temp);
                expand(xValue + 1, yValue + 1);
            }
        }
    }
    for (var z = 0; z < s.length; z++) {
        document.getElementsByClassName(s[z])[0].classList.add("open");
    }
    console.log(s);
}
function reset() {
    location.reload();
}
