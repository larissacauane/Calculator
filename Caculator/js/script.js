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
    var input_num = document.getElementById('input')
    switch(operand){
        case '+':
            input_num.value += '+'
            break;
        case '-':
            input_num.value += '-'
            break;
        case 'x':
            input_num.value += '*'
            break;
        case '/':
            input_num.value += '/'
            break;
        case '%':
            input_num.value += '%'
            break;
        default:
            input_num.value += '(-'
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
    var input_num = document.getElementById('input')
    var input_value = input_num.value
    if(input_value.length > 0){
        input_value = input_value.substring(0, input_value.length-1) // remove the last number
        input_num.value = input_value
    }
}

function equals(){
    var input_num = document.getElementById('input')
    var output_answer = Math.abs(eval(input_num.value))
    document.getElementById('answer').value = output_answer
}

//put brackets
function brackets(){
    var input_num = document.getElementById('input')
    if(input_num.value == ""){
        input_num.value += '('
    }else{
        input_num.value += ')'
    }
}

//put dot
function dot(){
    var input_num = document.getElementById('input')
    if(input_num.value >= 0){
        input_num.value += '.'
    }else{
        input_num.value += '.'
    }
}