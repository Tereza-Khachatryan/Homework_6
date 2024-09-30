function Person (name ,age){
    this.name = name
    this.age = age
    this.stomach = []

    this.eat = function (someFood){
        if(this.stomach.length < 10){
            return this.stomach.push(someFood)
        }
    }
    this.poop = function (){
        return this.stomach = []
    }

    this.toString = function(){
        return `"${this.name} , ${this.age}"`
    }
}

const person = new Person("Marry" ,50)

console.log(person.eat("apple"))
console.log(person.stomach)
person.poop()
console.log(person.stomach)
console.log(person.toString())