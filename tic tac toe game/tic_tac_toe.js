var turn = document.getElementById("turn");
const box = document.querySelectorAll(".box");
const cont = document.getElementById("sample");
const text = document.getElementById("text-view");
const img = document.getElementById("image");
let count = 0;

function boxes(x) {
  if (!document.getElementById(`box${x}`).classList.contains("disable")) {
    document.getElementById(`box${x}`).classList.add("disable");
    checking(x);
  }
}
function checking(x) {
  if (count % 2 === 0 && count !== 8) {
    console.log(count);
    var boxID = "box" + x;
    document.getElementById(boxID).innerHTML = "X";
    turn.innerHTML = "O Turn Now";
    Winner();
    count = count + 1;
  } else if (count % 2 !== 0) {
    console.log(count);
    var boxID = "box" + x;
    document.getElementById(boxID).innerHTML = "O";
    turn.innerHTML = "X Turn Now";
    Winner();
    count = count + 1;
  } else if (count === 8) {
    console.log(count);
    var boxID = "box" + x;
    document.getElementById(boxID).innerHTML = "X" || "O";
    turn.innerHTML = "Tie";
    Winner();
  }
}
function Winner() {
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");
  var box5 = document.getElementById("box5");
  var box6 = document.getElementById("box6");
  var box7 = document.getElementById("box7");
  var box8 = document.getElementById("box8");
  var box9 = document.getElementById("box9");
  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box2.innerHTML &&
    box1.innerHTML === box3.innerHTML
  ) {
    Winner_Boxes(box1);
  } else if (
    box4.innerHTML !== "" &&
    box4.innerHTML === box5.innerHTML &&
    box4.innerHTML === box6.innerHTML
  ) {
    Winner_Boxes(box4);
  } else if (
    box7.innerHTML !== "" &&
    box7.innerHTML === box8.innerHTML &&
    box7.innerHTML === box9.innerHTML
  ) {
    Winner_Boxes(box7);
  } else if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box4.innerHTML &&
    box1.innerHTML === box7.innerHTML
  ) {
    Winner_Boxes(box1);
  } else if (
    box2.innerHTML !== "" &&
    box2.innerHTML === box5.innerHTML &&
    box2.innerHTML === box8.innerHTML
  ) {
    Winner_Boxes(box2);
  } else if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box6.innerHTML &&
    box3.innerHTML === box9.innerHTML
  ) {
    Winner_Boxes(box3);
  } else if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box5.innerHTML &&
    box1.innerHTML === box9.innerHTML
  ) {
    Winner_Boxes(box1);
  } else if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box5.innerHTML &&
    box3.innerHTML === box7.innerHTML
  ) {
    Winner_Boxes(box3);
  }
}
function Winner_Boxes(samebox) {
  cont.style.display = "none";
  text.style.display = "block";
  img.style.display="block";
  turn.innerHTML = samebox.innerHTML + " Wins!!!";
}
function replay() {
  location.reload();
}
