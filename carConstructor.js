function Car(model, milesPerGallon) {
    this.model = model
    this.milesPerGallon = milesPerGallon
    this.tank = 0
    this.odometer = 0
  
    this.fill = function (galons) {
      return (this.tank += galons)
    }
  
    this.drive = function (distance) {
      const needed = distance / this.milesPerGallon
      if (needed > this.tank) {
        const possibleDistance = this.tank * this.milesPerGallon
        this.odometer += possibleDistance
        this.tank = 0
        return `I ran out of fuel at ${this.odometer} miles!`
      } else {
        this.odometer += distance
        this.tank -= needed
      }
    }
  }
  
  const car = new Car("Mazda", 50)
  
  car.fill(10)
  console.log(car.tank)
  const drive = car.drive(200)
  console.log(car.tank)
  console.log(car.odometer)
  