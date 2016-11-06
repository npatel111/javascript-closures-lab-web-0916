const app = "I don't do much."
function bumpCounter() {
  var counter = 0

  function addBump() {
    counter += 1
  }
  // debugger;

  function getBumps() {
    return counter;
  }

  return {
   addBump,
   getBumps
 };

}

function createAnimal(animalType) {

  return function device(deadlyDevice) {
    return {animalType: `${animalType}`, deadlyDevice: `${deadlyDevice}`}
  }
}

  var sharkCreator = createAnimal('Shark')
  var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
  var sharkWithFrickinCannon = sharkCreator('Cannon')
