function Person(name ,age){
    this.name = name
    this.age = age
}

function Baby (name , age , favouriteToy){
    Person.call(this ,name ,age)
    this.favouriteToy = favouriteToy
}

Baby.prototype = Object.create(Person.prototype)
Baby.prototype.constructor = Baby

Baby.prototype.play = function(){
    return `Playing with ${this.favouriteToy}`
}

const baby = new Baby("Mila" , 2 ,"Barbi")
console.log(baby.play())