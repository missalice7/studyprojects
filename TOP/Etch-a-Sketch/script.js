const container = document.getElementById("container");
const btnrefresh = document.getElementById("refresh")


//QUADRADOS RELOAD
for (let i = 1; i <= 625; i++) {
    let divs = []
    let newBox = divs[i] = document.createElement("div")
    container.appendChild(divs[i]).classList.add("box")
    newBox.style.width = "24px";
    newBox.style.height = "24px";

    colorBlack()
    
}

// COLORS
function colorBlack(){
    let boxesNodes = document.querySelectorAll(".box")
    let boxes = Array.from(boxesNodes)

    boxes.forEach(function(item){
        item.onmouseover = () => item.style.backgroundColor ="black"
    })
}

function colorWhite(){
    let boxesNodes = document.querySelectorAll(".box")
    let boxes = Array.from(boxesNodes)

    boxes.forEach(function(item){
        item.style.backgroundColor ="white"
    })
}

function rainbowColors(){
    let boxesNodes = document.querySelectorAll(".box")
    let boxes = Array.from(boxesNodes)

    boxes.forEach(function(item){
        let randomColor= Math.floor(Math.random()*16777215).toString(16);
        let colorHex= "#" +  
        item.style.backgroundColor ="white"
    })
}




//AGAIN!

btnrefresh.addEventListener("click", function(){
    let numSquares = prompt("How many squares per side?");
    
    removeBoxes()
    let width = 600 / numSquares
    let height = 600 / numSquares;
    let count = numSquares*numSquares
    
    
        for (let i = 1; i <= count; i++) {
            let divs = []
            let newBox = divs[i] = document.createElement("div")
            container.appendChild(divs[i]).classList.add("box")
            newBox.style.width = width.toString() + "px";
            newBox.style.height = height.toString() + "px";
            
        }

        colorBlack()

        
});

//remove boxes
function removeBoxes(){
    let child = container.lastElementChild; 
        while (child) { 
            container.removeChild(child); 
            child = container.lastElementChild; 
        } 
}


// ALL WHITE
let btnclear = document.getElementById("clear")
btnclear.addEventListener("click", colorWhite)

//RAINBOW
let btnrainbow = document.getElementById("rainbow")
btnrainbow.addEventListener("click", rainbowColors)






