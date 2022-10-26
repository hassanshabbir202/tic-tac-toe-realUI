// music
var audio = new Audio("ting.mp3")
// Change turn
var turn = "X";
function changeTurn(){
   return turn === "X" ? "O" : "X";
}

function playerTwo(){
    if(turn === "X"){
        document.getElementById("turnPlayer").innerHTML = "Turn for Player One";
    }else{
        document.getElementById("turnPlayer").innerHTML = "Turn for Player Two";
    }
}

// select all buttons
var btns = document.querySelectorAll(".btn");
btns.forEach((element) => {
    element.addEventListener("click",(e)=> {
        audio.play();
       e.target.innerText = turn;
       e.target.disabled = true;
       turn = changeTurn();
       playerTwo()
       gameWin()
    });

});

var Allboxes = {
    bx1 : document.querySelector(".bx1"),
    bx2 : document.querySelector(".bx2"),
    bx3 : document.querySelector(".bx3"),
    bx4 : document.querySelector(".bx4"),
    bx5 : document.querySelector(".bx5"),
    bx6 : document.querySelector(".bx6"),
    bx7 : document.querySelector(".bx7"),
    bx8 : document.querySelector(".bx8"),
    bx9 : document.querySelector(".bx9")
   }

    function disabled(){
    Allboxes.bx1.disabled = true;
    Allboxes.bx2.disabled = true;
    Allboxes.bx3.disabled = true;
    Allboxes.bx4.disabled = true;
    Allboxes.bx5.disabled = true;
    Allboxes.bx6.disabled = true;
    Allboxes.bx7.disabled = true;
    Allboxes.bx8.disabled = true;
    Allboxes.bx9.disabled = true;
    }


    // Display 

    function show(){
        document.querySelector(".mainCont").style.filter = "blur(20px)";
        document.getElementById("reset").style.display = "block";
    }

   function showAnimate(){
      document.querySelector(".animated").style.display = "block";
   }


function gameWin(){
    if ((Allboxes.bx1.innerHTML == 'x' || Allboxes.bx1.innerHTML  == 'X') && (Allboxes.bx2.innerHTML  == 'x' || Allboxes.bx2.innerHTML  == 'X') && (Allboxes.bx3.innerHTML == 'x' || Allboxes.bx3.innerHTML  == 'X')) {
       document.getElementById("wintext").innerHTML = "Congratulations! " + fplayername.value + " Won";
       disabled()
       show()
       showAnimate()
    }else if((Allboxes.bx1.innerHTML == 'O' || Allboxes.bx1.innerHTML  == 'o') && (Allboxes.bx2.innerHTML  == 'O' || Allboxes.bx3.innerHTML  == 'o') && (Allboxes.bx3.innerHTML == 'O' || Allboxes.bx3.innerHTML  == 'o')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + secondplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if((Allboxes.bx4.innerHTML == 'x' || Allboxes.bx4.innerHTML  == 'X') && (Allboxes.bx5.innerHTML  == 'x' || Allboxes.bx5.innerHTML  == 'X') && (Allboxes.bx6.innerHTML == 'x' || Allboxes.bx6.innerHTML  == 'X')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + fplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if((Allboxes.bx4.innerHTML == 'O' || Allboxes.bx4.innerHTML  == 'o') && (Allboxes.bx5.innerHTML  == 'O' || Allboxes.bx5.innerHTML  == 'o') && (Allboxes.bx6.innerHTML == 'O' || Allboxes.bx6.innerHTML  == 'o')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + secondplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if((Allboxes.bx7.innerHTML == 'x' || Allboxes.bx7.innerHTML  == 'X') && (Allboxes.bx8.innerHTML  == 'x' || Allboxes.bx8.innerHTML  == 'X') && (Allboxes.bx9.innerHTML == 'x' || Allboxes.bx9.innerHTML  == 'X')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + fplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if((Allboxes.bx7.innerHTML == 'o' || Allboxes.bx7.innerHTML  == 'O') && (Allboxes.bx8.innerHTML  == 'o' || Allboxes.bx8.innerHTML  == 'O') && (Allboxes.bx9.innerHTML == 'o' || Allboxes.bx9.innerHTML  == 'O')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + secondplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if((Allboxes.bx1.innerHTML == 'x' || Allboxes.bx1.innerHTML  == 'X') && (Allboxes.bx4.innerHTML  == 'x' || Allboxes.bx4.innerHTML  == 'X') && (Allboxes.bx7.innerHTML == 'x' || Allboxes.bx7.innerHTML  == 'X')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + fplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if((Allboxes.bx1.innerHTML == 'o' || Allboxes.bx1.innerHTML  == 'O') && (Allboxes.bx4.innerHTML  == 'o' || Allboxes.bx4.innerHTML  == 'O') && (Allboxes.bx7.innerHTML == 'o' || Allboxes.bx7.innerHTML  == 'O')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + secondplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if((Allboxes.bx2.innerHTML == 'x' || Allboxes.bx2.innerHTML  == 'X') && (Allboxes.bx5.innerHTML  == 'x' || Allboxes.bx5.innerHTML  == 'X') && (Allboxes.bx8.innerHTML == 'x' || Allboxes.bx8.innerHTML  == 'X')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + fplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if((Allboxes.bx2.innerHTML == 'o' || Allboxes.bx2.innerHTML  == 'O') && (Allboxes.bx5.innerHTML  == 'o' || Allboxes.bx5.innerHTML  == 'O') && (Allboxes.bx8.innerHTML == 'o' || Allboxes.bx8.innerHTML  == 'O')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + secondplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if((Allboxes.bx3.innerHTML == 'x' || Allboxes.bx3.innerHTML  == 'X') && (Allboxes.bx6.innerHTML  == 'x' || Allboxes.bx6.innerHTML  == 'X') && (Allboxes.bx9.innerHTML == 'x' || Allboxes.bx9.innerHTML  == 'X')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + fplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if((Allboxes.bx3.innerHTML == 'o' || Allboxes.bx3.innerHTML  == 'O') && (Allboxes.bx6.innerHTML  == 'o' || Allboxes.bx6.innerHTML  == 'O') && (Allboxes.bx9.innerHTML == 'o' || Allboxes.bx9.innerHTML  == 'O')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + secondplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if((Allboxes.bx1.innerHTML == 'x' || Allboxes.bx1.innerHTML  == 'X') && (Allboxes.bx5.innerHTML  == 'x' || Allboxes.bx5.innerHTML  == 'X') && (Allboxes.bx9.innerHTML == 'x' || Allboxes.bx9.innerHTML  == 'X')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + fplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if((Allboxes.bx1.innerHTML == 'o' || Allboxes.bx1.innerHTML  == 'O') && (Allboxes.bx5.innerHTML  == 'o' || Allboxes.bx5.innerHTML  == 'O') && (Allboxes.bx9.innerHTML == 'o' || Allboxes.bx9.innerHTML  == 'O')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + secondplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if((Allboxes.bx3.innerHTML == 'x' || Allboxes.bx3.innerHTML  == 'X') && (Allboxes.bx5.innerHTML  == 'x' || Allboxes.bx5.innerHTML  == 'X') && (Allboxes.bx7.innerHTML == 'x' || Allboxes.bx7.innerHTML  == 'X')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + fplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if((Allboxes.bx3.innerHTML == 'o' || Allboxes.bx3.innerHTML  == 'O') && (Allboxes.bx5.innerHTML  == 'o' || Allboxes.bx5.innerHTML  == 'O') && (Allboxes.bx7.innerHTML == 'o' || Allboxes.bx7.innerHTML  == 'O')){
        document.getElementById("wintext").innerHTML = "Congratulations! " + secondplayername.value + " Won";
        disabled()
        show()
        showAnimate()
    }else if ((Allboxes.bx1.innerHTML == "X" ||  Allboxes.bx1.innerHTML == "O") && (Allboxes.bx2.innerHTML == "X" ||  Allboxes.bx2.innerHTML == "O") && (Allboxes.bx3.innerHTML == "X" ||  Allboxes.bx3.innerHTML == "O") && (Allboxes.bx4.innerHTML == "X" ||  Allboxes.bx4.innerHTML == "O") && (Allboxes.bx5.innerHTML == "X" ||  Allboxes.bx5.innerHTML == "O") && (Allboxes.bx6.innerHTML == "X" ||  Allboxes.bx6.innerHTML == "O") && (Allboxes.bx7.innerHTML == "X" ||  Allboxes.bx7.innerHTML == "O") && (Allboxes.bx8.innerHTML == "X" ||  Allboxes.bx8.innerHTML == "O") && (Allboxes.bx9.innerHTML == "X" ||  Allboxes.bx9.innerHTML == "O")){
        document.getElementById("wintext").innerHTML = "Draw";
        show()
        showAnimate()
    }

}

// Reset Game 
document.getElementById("reset").addEventListener("click" , ()=> {
    window.location.reload();
});

// yes button logic

document.getElementById("yes").addEventListener("click", ()=> {
    alert("Okay, Click on the Play button button and let's started");
    document.getElementById("play_btn").disabled = false;
});


// no button logic
document.getElementById("no").addEventListener("click", ()=> {
    alert("Okay")
});

function playGame(){
    document.querySelector(".first_of_all_div").style.display = "none";
    document.querySelector(".player_one_details").style.display = "block";
}


// Move 1st player to second player
let fplayername = document.getElementById("fplayername");
let firstplayerinput = document.getElementById("firstplayerinput");
function movePlayerTwo(){

       if((fplayername.value === "") && (firstplayerinput.files.length == 0)){
          alert("Enter Details");
       }else if((fplayername.value !== "") && (firstplayerinput.files.length == 0)){
        alert("Plz Select Picture");
    }else if((fplayername.value === "") && (firstplayerinput.files.length != 0)){
        alert("Enter username");

    }else if((fplayername.value !== "") && (firstplayerinput.files.length !== 0)){
        document.querySelector(".player_one_details").style.display = "none";
        document.querySelector(".player_two_details").style.display = "block";
    }


}


// Finally Start Game
var secondplayername = document.getElementById("secondplayername");
var secondplayerinput = document.getElementById("secondplayerinput");
function startGame(){

    
    if((secondplayername.value === "") && (secondplayerinput.files.length == 0)){
        alert("Enter Details");
     }else if((secondplayername.value !== "") && (secondplayerinput.files.length == 0)){
      alert("Plz Select Picture");
  }else if((secondplayername.value === "") && (secondplayerinput.files.length != 0)){
      alert("Enter username");

  }else if((secondplayername.value !== "") && (secondplayerinput.files.length !== 0)){
    document.querySelector(".container").style.display = "block";
    document.querySelector(".player_two_details").style.display = "none";
  }
  showTime()

}


function preview_image(event) 
{
 var reader = new FileReader();
 reader.onload = function()
 {
  var output = document.getElementById('output_image');
  output.src = reader.result;
 }
 reader.readAsDataURL(event.target.files[0]);
}

function previe_image(event) 
{
 var reader = new FileReader();
 reader.onload = function()
 {
  var output = document.getElementById('outpu_image');
  output.src = reader.result;
 }
 reader.readAsDataURL(event.target.files[0]);
}

// Show Time 
setInterval(showTime,1000)
function showTime(){
let time = document.getElementById("time");
let date = new Date();
let curtime = date.toLocaleTimeString();
time.innerHTML = curtime;
}

