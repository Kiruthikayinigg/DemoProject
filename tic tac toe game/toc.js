var turn = document.getElementById("turn"),
  boxes = document.querySelectorAll(".container-1 div"),
  count = 0;

for (var i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function () {
    if (this.innerHTML !== "X" && this.innerHTML !== "O") {
      if (count % 2 === 0 && count !== 8) {
        console.log(count);
        this.innerHTML = "X";
        turn.innerHTML = "O Turn Now";
        Winner();
        count = count + 1;
      } else if (count % 2 !== 0) {
        console.log(count);
        this.innerHTML = "O";
        turn.innerHTML = "X Turn Now";
        Winner();
        count = count + 1;
      } else if (count === 8) {
        console.log(count);
        this.innerHTML = "X" || "O";
        turn.innerHTML = "Tie";
      }
    }
  };
}

function Winner() {
  var box1 = document.getElementById("box1"),
    box2 = document.getElementById("box2"),
    box3 = document.getElementById("box3"),
    box4 = document.getElementById("box4"),
    box5 = document.getElementById("box5"),
    box6 = document.getElementById("box6"),
    box7 = document.getElementById("box7"),
    box8 = document.getElementById("box8"),
    box9 = document.getElementById("box9");

  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box2.innerHTML &&
    box1.innerHTML === box3.innerHTML
  ) {
    Winner_Boxes(box1, box2, box3);
  }
  if (
    box4.innerHTML !== "" &&
    box4.innerHTML === box5.innerHTML &&
    box4.innerHTML === box6.innerHTML
  ) {
    Winner_Boxes(box4, box5, box6);
  }
  if (
    box7.innerHTML !== "" &&
    box7.innerHTML === box8.innerHTML &&
    box7.innerHTML === box9.innerHTML
  ) {
    Winner_Boxes(box7, box8, box9);
  }
  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box4.innerHTML &&
    box1.innerHTML === box7.innerHTML
  ) {
    Winner_Boxes(box1, box4, box7);
  }
  if (
    box2.innerHTML !== "" &&
    box2.innerHTML === box5.innerHTML &&
    box2.innerHTML === box8.innerHTML
  ) {
    Winner_Boxes(box2, box5, box8);
  }
  if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box6.innerHTML &&
    box3.innerHTML === box9.innerHTML
  ) {
    Winner_Boxes(box3, box6, box9);
  }
  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box5.innerHTML &&
    box1.innerHTML === box9.innerHTML
  ) {
    Winner_Boxes(box1, box5, box9);
  }
  if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box5.innerHTML &&
    box3.innerHTML === box7.innerHTML
  ) {
    Winner_Boxes(box3, box5, box7);
  }
}
function Winner_Boxes(samebox_1, samebox_2, samebox_3) {
  samebox_1.classList.add("win"); // adding style
  samebox_2.classList.add("win");
  samebox_3.classList.add("win");
  turn.innerHTML = samebox_1.innerHTML + " Won";
}

function replay() {
  location.reload();
}

// function printText() {
//    console.log("text");
// }

// printText();
