const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.keys')
const operator = calculator.querySelector('.operator')
const display = document.querySelector('.calculator_output')


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const ki = e.target
        const action = ki.dataset.action
        const kiContent = ki.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType

        
        if (!action) {
            if (displayedNum === '0' ||previousKeyType === 'operator')
            {
                display.textContent = kiContent
            } 
            else {
                display.textContent = displayedNum + kiContent
            }
        }
        if (action === 'deci') {
            display.textContent = displayedNum + '.'
        }
        if (
            action === 'add' ||
            action === 'sub' ||
            action === 'multi' ||
            action === 'divi'
        ) {
            ki.classList.add('is-depressed')

            calculator.dataset.previousKeyType = 'operator'

            calculator.dataset.firstValue = displayedNum

            calculator.dataset.operator = action
        }
        Array.from(ki.parentNode.children).forEach(k =>
            ki.classList.remove('is-depressed'),
        )
        if(action === 'enter'){
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            display.textContent = calculate(firstValue, operator, secondValue)
        }
        if(action === 'Clear')
        {
            display.textContent = '0'
        }
    }
})
const calculate = (n1, operator , n2)=>{
    let result = ''
    if(operator === 'add')
    {
        result = parseFloat(n1) + parseFloat(n2)
    }
    else if(operator === 'sub'){
        result = parseFloat(n1) - parseFloat(n2)
    }
    else if(operator === 'multi')
    {
        result = parseFloat(n1) * parseFloat(n2)
    }
    else if(operator === 'divi'){
        result = parseFloat(n1) / parseFloat(n2)
    }
    return result
}