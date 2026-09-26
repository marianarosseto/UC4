import { Character } from "./Character";
import { Spell } from "./Spell";

export class Mage extends Character {
  private mana: number;
  private spell: Spell;

  constructor(name: string, level: number, health: number, mana: number, spell: Spell) {
    super(name, level, health);
    this.mana = mana;
    this.spell = spell;
  }

  public getMana(): number {
    return this.mana;
  }

  public getSpell(): Spell {
    return this.spell;
  }

  public setMana(mana: number): void {
    this.mana = mana;
  }

  public setSpell(spell: Spell): void {
    this.spell = spell;
  }

  public castSpell(): void {
    const manaCost = this.spell.getManaCost();

   
    if (this.mana >= manaCost) {
      this.mana -= manaCost;

      const characterName = this.getName(); 
      
      console.log(`${characterName} casts ${this.spell.getName()}!`);
      console.log(`Damage: ${this.spell.getDamage()}`);
      console.log(`Mana remaining: ${this.mana}`);
    } else {
      const characterName = this.getName();
      console.log(`${characterName} does not have enough mana!`);
    }
  }
}