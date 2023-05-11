const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
    /**
     * @type Park
     */
  let park
  beforeEach(function () {
    park = new Park('Dandy Teeth',35)

  })

  it('should have a name' , function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Dandy Teeth')
  });
  it('should have a ticket price' , function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 35)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual,[])
  });

  it('should be able to add a dinosaur to its collection',function(){
    stego = new Dinosaur('Stegossaurus', 'herbivore',40)
    park.addDino(stego)
    actual = park.dinosaurs
    assert.deepStrictEqual(actual,[stego])
  });

  it('should be able to remove a dinosaur from its collection', function() {
    trex = new Dinosaur('t-rex', 'carnivore', 50)
    stego = new Dinosaur('Stegossaurus', 'herbivore',40)
    rapto = new Dinosaur('raptor', 'carnivore',90)
    park.addDino(trex)
    park.addDino(stego)
    park.addDino(rapto)
    park.removeDino(stego)
    actual = park.dinosaurs
    assert.deepStrictEqual(actual,[trex,rapto])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    trex = new Dinosaur('t-rex', 'carnivore', 50)
    stego = new Dinosaur('Stegossaurus', 'herbivore',40)
    rapto = new Dinosaur('raptor', 'carnivore',90)
    park.addDino(trex)
    park.addDino(stego)
    park.addDino(rapto)
    actual = park.findMostAttrated()
    assert.strictEqual(actual,rapto)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    trex = new Dinosaur('t-rex', 'carnivore', 50)
    stego = new Dinosaur('stegossaurus', 'herbivore',40)
    rapto = new Dinosaur('raptor', 'carnivore',90)
    raptok = new Dinosaur('raptor', 'carnivore',89)
    park.addDino(trex)
    park.addDino(stego)
    park.addDino(rapto)
    park.addDino(raptok)
    dino_list = park.findBySpecies('raptor')
    assert.deepStrictEqual(dino_list,[rapto,raptok])
  });

  it('should be able to calculate the total number of visitors per day', function() {
    trex = new Dinosaur('t-rex', 'carnivore', 50)
    stego = new Dinosaur('stegossaurus', 'herbivore',40)
    rapto = new Dinosaur('raptor', 'carnivore',90)
    raptok = new Dinosaur('raptor', 'carnivore',89)
    park.addDino(trex)
    park.addDino(stego)
    park.addDino(rapto)
    park.addDino(raptok)
    actual = park.calculateVisitors()
    assert.strictEqual(actual,269)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    trex = new Dinosaur('t-rex', 'carnivore', 50)
    stego = new Dinosaur('stegossaurus', 'herbivore',40)
    rapto = new Dinosaur('raptor', 'carnivore',90)
    raptok = new Dinosaur('raptor', 'carnivore',89)
    park.addDino(trex)
    park.addDino(stego)
    park.addDino(rapto)
    park.addDino(raptok)    
    actual = park.calculateVisitors()*365
    assert.strictEqual(actual,98185)
    });

  it('should be able to calculate total revenue for one year',function() {
  trex = new Dinosaur('t-rex', 'carnivore', 50)
  stego = new Dinosaur('stegossaurus', 'herbivore',40)
  rapto = new Dinosaur('raptor', 'carnivore',90)
  raptok = new Dinosaur('raptor', 'carnivore',89)
  park.addDino(trex)
  park.addDino(stego)
  park.addDino(rapto)
  park.addDino(raptok)    
  actual = (park.ticket_price * park.calculateVisitors())*365
  assert.strictEqual(actual,3436475)  
  });

  it('should be able to remove all dinosaurs of a particular species', function (){
    trex = new Dinosaur('t-rex', 'carnivore', 50)
    stego = new Dinosaur('stegossaurus', 'herbivore',40)
    rapto = new Dinosaur('raptor', 'carnivore',90)
    raptok = new Dinosaur('raptor', 'carnivore',89)
    park.addDino(trex)
    park.addDino(stego)
    park.addDino(rapto)
    park.addDino(raptok) 
    park.removeDinosOfSpecie('raptor')
    actual = park.dinosaurs.length
    assert.deepStrictEqual(actual,2)
  })

  it('should be able to show number of dinos per diet', function (){
    trex = new Dinosaur('t-rex', 'carnivore', 50)
    stego = new Dinosaur('stegossaurus', 'herbivore',40)
    rapto = new Dinosaur('raptor', 'carnivore',90)
    raptok = new Dinosaur('raptor', 'carnivore',89)
    park.addDino(trex)
    park.addDino(stego)
    park.addDino(rapto)
    park.addDino(raptok)
    compare = park.getDinosPerDiet()
    actual = {'carnivore':3,'herbivore':1}
    assert.deepStrictEqual(actual,compare)
  })


});




