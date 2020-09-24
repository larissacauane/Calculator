//get the numbers
function getNumber(num){
    var input_num = document.getElementById('input')
    switch(num){
        case 1:
            input_num.value += 1
            break
        case 2:
            input_num.value += 2
            break
        case 3:
            input_num.value += 3
            break
        case 4:
            input_num.value += 4
            break
        case 5:
            input_num.value += 5
            break
        case 6:
            input_num.value += 6
            break
        case 7:
            input_num.value += 7
            break
        case 8:
            input_num.value += 8
            break
        case 9:
            input_num.value += 9
            break
        default:
            input_num.value += 0    
    }
}

//takes mathematical operators
function getOperant(operand){
    var input_operand = document.getElementById('input')
    switch(operand){
        case '+':
            input_operand.value += '+'
            break;
        case '-':
            input_operand.value += '-'
            break;
        case 'x':
            input_operand.value += '*'
            break;
        case '/':
            input_operand.value += '/'
            break;
        case '%':
            input_operand.value += '%'
            break;
        default:
            input_operand.value += '(-'
            break;
    }
}

//clean the screen
function clearScreen(){
    document.getElementById('input').value = ""
    document.getElementById('answer').value = ""
}

// eraser a number
function eraser(){
    var btn_eraser = document.getElementById('input')
    var btn_eraserNumber = btn_eraser.value
    if(btn_eraserNumber.length > 0){
        btn_eraserNumber = btn_eraserNumber.substring(0, btn_eraserNumber.length-1) // remove the last number
        btn_eraser.value = btn_eraserNumber
    }
}

// returns the result
function equals(){
    var btn_equals = document.getElementById('input')
    var output_answer = Math.abs(eval(btn_equals.value))
    document.getElementById('answer').value = output_answer
}

//put dot
function dot(){
    var input_dot = document.getElementById('input')
    if(input_dot.value <= 0){
        input_dot.value += '0.'
    }else{
        input_dot.value += '.'
    }
}