let num1 = prompt("ENter the first Number:")
let num2 = prompt("ENter the second Number:")
function Calculator() {

    return (
        <> 
        <h1>sum is {num1} and {num2}:{parseInt(num1) + parseInt(num2)}</h1>
        <h1>Subtraction is {num1} and {num2}:{num1 - num2}</h1>
        <h1>Division is {num1} and {num2}:{num1 / num2}</h1>
        <h1>Multiplication is {num1} and {num2}:{num1 * num2}</h1>
        </>
     );
}

export default Calculator;