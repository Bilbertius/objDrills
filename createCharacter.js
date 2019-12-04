'use strict';

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe() {
      return `${this.name} is a ${this.race} from ${this.origin}`;
    },
    evaluateFight(character) {
      let x, y;
      x = this.attack - character.defense;
      y = character.attack - this.defense;

      return `Your opponent takes ${x < 0 ? 0 : x} damage and you take 
        ${y < 0 ? 0 : y} damage`;
    }
  };
}

const characters = [
  createCharacter(
    'Gandalf the White',
    'gandalf',
    'Wizard',
    'middle earth',
    10,
    6
  ),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter(
    'Aragorn son of Arathorn',
    'aragorn',
    'Man',
    'Dunnedain',
    6,
    8
  ),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland realm', 8, 5)
];

const [gandalf, biblo, frodo, aragorn, legolas] = characters;

function addArwen() {
  let Arwen = createCharacter(
    'Arwen Undomiel',
    'arwen',
    'Elf',
    'Rivendell',
    7,
    9
  );
  characters.push(Arwen);
  return Arwen;
}
addArwen();
console.log(gandalf.describe());
console.log(Arwen.evaluateFight(gandalf));
