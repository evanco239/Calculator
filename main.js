var numberPress = document.getElementById("numberPad");
var clearButton = document.getElementById('clearButton');
var displayNum = document.getElementById('displayNum');
var equals = document.getElementById('equals');
var operator;
var num1Array = [];
var num2Array = [];



numberPress.addEventListener('click', buttonClicked);
clearButton.addEventListener('click', clearClicked);
//equals.addEventListener('click', submit);

function buttonClicked(e){
        if(e.target.textContent.length > 1){
            return '';
        }
        if(e.target.textContent == '='){
            var arr1 = num1Array.map(num => parseInt(num))
                                .join('');
            var arr2 = num2Array.map(num1 => parseInt(num1))
                                .join('');
            displayNum.textContent = submit(parseInt(arr1), parseInt(arr2), operator);
            return '';
        }
        if (isNaN(e.target.textContent) && e.target.textContent != '=') {
            operator = e.target.textContent;
            displayNum.textContent = '';
            return '';
        }
        else{
            if(!operator == ''){
                num2Array.push(e.target.textContent);
                displayNum.textContent = num2Array.join('');
            }
            else{
                num1Array.push(e.target.textContent);
                displayNum.textContent = num1Array.join('');
            }
        }
}

function clearClicked(e){
    num1Array = [];
    num2Array = [];
    operator='';
    displayNum.textContent = '0';
}

function submit(a, b, operator){

    if(operator == '*'){
        var ans = a*b;
    }
    if(operator == '/'){
        var ans =  a/b;
    }
    if(operator == '+'){
        var ans = a+b;
    }
    if(operator == '-'){
        var ans = a-b;
    }

    num1Array = [ans];
    
    num2Array=[];
    operator='';
    return ans;


}