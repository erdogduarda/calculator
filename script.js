let calcScreen = document.getElementById("screen")
let button0 = document.getElementById("b0")
let button1 = document.getElementById("b1")
let button2 = document.getElementById("b2")
let button3 = document.getElementById("b3")
let button4 = document.getElementById("b4")
let button5 = document.getElementById("b5")
let button6 = document.getElementById("b6")
let button7 = document.getElementById("b7")
let button8 = document.getElementById("b8")
let button9 = document.getElementById("b9")
let bDivide = document.getElementById("b/")
let bMultiply = document.getElementById("b*")
let bSubstract = document.getElementById("b-")
let bAdd = document.getElementById("b+")
let bResult = document.getElementById("b=")
let bClear = document.getElementById("bC")

let operandList = "+-/*"
let operand
let num1
let num2

function addition(){
    num1 = parseInt(calcScreen.innerText)
    operand = operandList[0]
    calcScreen.innerText = operand
}

function substraction(){
    num1 = parseInt(calcScreen.innerText)
    operand = operandList[1]
    calcScreen.innerText = operand 
}

function division(){
    num1 = parseInt(calcScreen.innerText)
    operand = operandList[2]
    calcScreen.innerText = operand 
}

function multiplication(){
    num1 = parseInt(calcScreen.innerText)
    operand = operandList[3]
    calcScreen.innerText = operand
}

function result(){
    num2 = parseInt(calcScreen.innerText)
    switch(operand){
        case '+':
            calcScreen.innerText = num1 + num2
            break;
        case '-':
            calcScreen.innerText = num1 - num2
            break;
        case '/':
            calcScreen.innerText = num1 / num2
            break;
        case '*':
            calcScreen.innerText = num1 * num2
            break;
    }
}

bAdd.addEventListener("click", addition)
bSubstract.addEventListener("click", substraction)
bResult.addEventListener("click", result)
bDivide.addEventListener("click", division)
bMultiply.addEventListener("click", multiplication)


calcScreen.innerText = "0"

bClear.addEventListener("click", function(){
    calcScreen.innerText = "0"
})

button0.addEventListener("click", function(){
    if(calcScreen.innerText == "0" || operandList.includes(calcScreen.innerText)){
        calcScreen.innerText = "0"
    }else {
        calcScreen.innerText += "0"
    }
})

button1.addEventListener("click", function(){
    if(calcScreen.innerText == "0" || operandList.includes(calcScreen.innerText)){
        calcScreen.innerText = "1"
    }else {
        calcScreen.innerText += "1"
    }     
})

button2.addEventListener("click", function(){
    if(calcScreen.innerText == "0" || operandList.includes(calcScreen.innerText)){
        calcScreen.innerText = "2"
    }else {
        calcScreen.innerText += "2"
    }     
})

button3.addEventListener("click", function(){
    if(calcScreen.innerText == "0" || operandList.includes(calcScreen.innerText)){
        calcScreen.innerText = "3"
    }else {
        calcScreen.innerText += "3"
    }     
})

button4.addEventListener("click", function(){
    if(calcScreen.innerText == "0" || operandList.includes(calcScreen.innerText)){
        calcScreen.innerText = "4"
    }else {
        calcScreen.innerText += "4"
    }     
})

button5.addEventListener("click", function(){
    if(calcScreen.innerText == "0" || operandList.includes(calcScreen.innerText)){
        calcScreen.innerText = "5"
    }else {
        calcScreen.innerText += "5"
    }     
})

button6.addEventListener("click", function(){
    if(calcScreen.innerText == "0" || operandList.includes(calcScreen.innerText)){
        calcScreen.innerText = "6"
    }else {
        calcScreen.innerText += "6"
    }     
})

button7.addEventListener("click", function(){
    if(calcScreen.innerText == "0" || operandList.includes(calcScreen.innerText)){
        calcScreen.innerText = "7"
    }else {
        calcScreen.innerText += "7"
    }     
})

button8.addEventListener("click", function(){
    if(calcScreen.innerText == "0" || operandList.includes(calcScreen.innerText)){
        calcScreen.innerText = "8"
    }else {
        calcScreen.innerText += "8"
    }     
})

button9.addEventListener("click", function(){
    if(calcScreen.innerText == "0" || operandList.includes(calcScreen.innerText)){
        calcScreen.innerText = "9"
    }else {
        calcScreen.innerText += "9"
    }     
})