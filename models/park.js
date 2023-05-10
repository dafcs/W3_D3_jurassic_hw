const Park = function (name, ticket_price) {
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaurs = []
  }
  
Park.prototype.addDino = function(dino) {
  this.dinosaurs.push(dino)
};

Park.prototype.removeDino = function(dino_remove) {
  index_of_dino = 0
  for (dino of this.dinosaurs) {
    if (dino.name === dino_remove)
      index_of_dino = indexOf(dino)
  }
  this.dinosaurs.splice(index_of_dino,1)
};

Park.prototype.findMostAttrated = function() {
  let dino_high = this.dinosaurs[0]
  for (dino of this.dinosaurs) {
    if (dino.guestsAttractedPerDay > dino_high.guestsAttractedPerDay) {
      dino_high = dino
    }
  }
  return dino_high
}

Park.prototype.findBySpecies = function(spec) {
  let dino_list = []
  for (dino of this.dinosaurs) {
    if (dino.species === spec) {
      dino_list.push(dino)
    }
  }
  return dino_list
}

Park.prototype.calculateVisitors = function() {
  let total = 0
  for (dino of this.dinosaurs) {
    total += dino.guestsAttractedPerDay
  }
  return total
}



module.exports = Park;
