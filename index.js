function bumpCounter() {
  var counter = 0
  function addBump() {
    counter++
    return counter
  }
  function getBumps() {
    return counter
  }

  return {addBump,
    getBumps};
}

function createAnimal(animalType) {
    let innerFunction =function weaponized(deadlyDevice) {
    return {"animalType":animalType, "deadlyDevice":deadlyDevice}
  }
  return innerFunction
}


let sharkCreator = createAnimal("Shark")

let sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")

let sharkWithFrickinCannon = sharkCreator("Cannon")
