import { Character } from "./Character";
import { weapon } from "./Weapon";


export class Warrior extends Character {

  private strength: number
  private weapon: weapon

  constructor(name: string, level: number, health: number, strength: number, weapon: weapon) {
    super(name, level, health);
    this.strength = strength
    this.weapon = weapon
  }

  public getStrenght() {
    return this.strength
  }

  public getWeapon() {
    return this.weapon
  }

  public setStrenght(strength: number): void {
    this.strength = strength
  }

  public setWeapon(weapon: weapon): void {
    this.weapon = weapon
  }

  public attack(): void {
    const damage = this.strength + this.weapon.getDamage();
    console.log(`${this.getName()} attacks with ${this.weapon.getName()}! Damage: ${damage}`);
  }
}