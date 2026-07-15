export class DnDCharacter {
  public strength:number;
  public dexterity:number;
  public constitution:number;
  public intelligence:number;
  public wisdom:number;
  public charisma:number;
  public hitpoints:number;

  constructor(){
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }
  public static generateAbilityScore(): number {
    let values : number[] = [0,0,0]
    for(let i = 0 ; i<4 ; i++){
      let val = Math.floor(Math.random() * 6) + 1;
      let min = Math.min(...values);
      if (val > min) {
        let index = values.indexOf(min);
        values[index] = val;
      }
    }
    return values.reduce((sum, value) => sum + value, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10 ) / 2);
  }
}
