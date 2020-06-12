const numberBtn = document.querySelectorAll(".number")
const operatorBtn = document.querySelectorAll(".operator")
const total = document.getElementById("total")
const clear = document.getElementById("clear")

let calcTotal = 0

numberBtn.forEach(item => {
    item.addEventListener('click', event => {
        let chosenNum = event.target.textContent

        if (calcTotal === 0){
            calcTotal += chosenNum
        }

        return chosenNum;
    })
}) 

operatorBtn.forEach(item => {
    item.addEventListener('click', event => {
        let chosenOperator = event.target.textContent
        switch(chosenOperator) {
            case "+":
              console.log(chosenOperator);
            case "-":
                console.log(chosenOperator);
            case "*":
                console.log(chosenOperator);
            case "/":
                console.log(chosenOperator);
            
          }
        return chosenOperator;
    })
}) 

