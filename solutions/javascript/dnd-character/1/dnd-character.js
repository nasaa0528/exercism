export const abilityModifier = (score) => {
  if (score < 3) throw new Error("Ability scores must be at least 3");
  if (score > 18) throw new Error("Ability scores can be at most 18");
  return Math.floor((score - 10) / 2)
};

export class Character {
  strength = Character.rollAbility();
  dexterity = Character.rollAbility();
  constitution = Character.rollAbility();
  intelligence = Character.rollAbility();
  wisdom = Character.rollAbility();
  charisma = Character.rollAbility();
  static rollAbility() {
    let diceRolls = [];
    for (let i = 0; i < 4; i++) diceRolls.push(Math.floor(Math.random() * 6) + 1);
    return diceRolls.reduce((acc, cur) => acc + cur) - Math.min(...diceRolls);
  }

  get strength() {
    return this.strength;
  }

  get dexterity() {
    return this.dexterity;
  }

  get constitution() {
    return this.constitution;
  }

  get intelligence() {
    return this.intelligence;
  }

  get wisdom() {
    return this.wisdom;
  }

  get charisma() {
    return this.charisma;
  }

  get hitpoints() {
    return 10 + Math.floor((this.constitution - 10) / 2);
  }
}
