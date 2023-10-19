// Iteration 2: Generate 2 random number and display it on the screen

// Iteration 2: Generate 2 random number and display it on the screen
// Math random low 0 high < 1

var num1 = Math.floor(Math.random() * 100);
var num2 = Math.floor(Math.random() * 100);

let num1_box = document.getElementById("number1")
let num2_box = document.getElementById("number2")

num1_box.textContent = num1
num2_box.textContent = num2

function generateRandomNumners() {

    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);

    num1_box.textContent = num1
    num2_box.textContent = num2

}

// Iteration 3: Make the options button functional
let score = 0;
var lesser_than = document.getElementById("lesser-than")
var equal_to = document.getElementById("equal-to")
var greater_than = document.getElementById("greater-than")

greater_than.onclick = () => {
    if (num1 > num2) {
        score++;
        generateRandomNumners()

        console.log(score);
        localStorage.setItem("score",score);
        clearInterval(interval)
        timerStart()
    } else {
        window.open("./gameover.html", "_self")
    }
}

equal_to.onclick = () => {
    if (num1 == num2) {
        score++;
        generateRandomNumners()
        console.log(score);
        localStorage.setItem("score",score);
        clearInterval(interval)
        timerStart()
    } else {
        window.open("./gameover.html", "_self")
    }
}

lesser_than.onclick = () => {
    if (num1 < num2) {
        score++;
        generateRandomNumners()
        console.log(score);
        localStorage.setItem("score",score);
        clearInterval(interval)
        timerStart()
    } else {
        window.open("./gameover.html", "_self")
    }
}
// Iteration 4: Build a timer for the game



let time;
let timer_box = document.getElementById("timer")
timer_box.textContent = time;
let interval;

function timerStart() {
    time = 10;
     interval = setInterval(() => {
        timer_box.textContent = time;
        time--;


        if (time == 0) {
            // clearInterval(interval)
            location.href = "./gameover.html"
        }
    }, 1000)
}

timerStart()

function update(){
    generateRandomNumners()
        console.log(score);
        localStorage.setItem("score",score);
        clearInterval(interval)
        timerStart()
}

localStorage.setItem("score",0)