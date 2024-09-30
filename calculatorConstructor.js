function Calculator (){
    this.add = function (num1 ,num2){
        return num1 + num2
    }
    this.multiply = function (num1 ,num2){
        return num1 * num2
    }
    this.divide = function (num1 ,num2) {
        return num1/num2
    }
    this.subtract = function (num1 ,num2) {
        return num1 - num2
    }
}

const calculator = new Calculator

console.log(calculator.add(1,2))
console.log(calculator.multiply(1,2))
console.log(calculator.divide(4,2))
console.log(calculator.subtract(4,2))