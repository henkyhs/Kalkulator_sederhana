const numbers= document.querySelectorAll(".number")

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) =>{
	calculatorScreen.value = number
}

numbers.forEach((number)=> {
	number.addEventListener("click",(event)=>{
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) =>{
	if(currentNumber ==='0')
	{
		currentNumber = number
	}
	else
	{
		currentNumber += number
	}
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) =>{
	operator.addEventListener("click", (event) =>{
		inputOperator(event.target.value)
	})
})

const inputOperator = (operator) =>{
	if(calculationOperator === ''){
		prevNumber = currentNumber
	}
	
	calculationOperator = operator
	currentNumber = '0'
}

const equal = document.querySelector('.equal')

equal.addEventListener('click',() =>{
	console.log(event.target.value)
})

const calculate = () => {
	let result = ''
	switch(calculationOperator){
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case "-":
			result = parseFloat(prevNumber) - parseFloat(currentNumber)
			break
		case "*":
			result = parseFloat(prevNumber) * parseFloat(currentNumber)
			break
		case "/":
			result = parseFloat(prevNumber) / parseFloat(currentNumber)
			break
		default:
			break
	}
	currentNumber = result
	calculationOperator = ''
}

equal.addEventListener('click', ()=>{
	calculate()
	updateScreen(currentNumber)
})

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', ()=>{
	clearAll()
	updateScreen(currentNumber)
})

const clearAll = () =>{
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click',(event) =>{
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

inputDecimal = (dot) =>{
	if (currentNumber.includes('.')) {
		return
	}
	currentNumber += dot
}
const percentCount = () =>{
	let result =''
	result = currentNumber / 100
	currentNumber = result
}
const percent = document.querySelector('.percent')

percent.addEventListener('click', ()=>{
	percentCount()
	updateScreen(currentNumber)
})
