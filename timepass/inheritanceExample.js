const catEcoSystem = {
    type: 'cat',
    legs: 4,
    claws: 'sharp',
    tail: true,
    food:'carnivore'
}
const tiger = Object.create(catEcoSystem);
tiger.canClimb = false;
console.log(tiger.type);