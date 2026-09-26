export class Spell{
  private  name: string
 private damage: number
 private manaCost: number

 
 public constructor(name: string, damage: number, manaCost: number) {
    this.name = name
    this.damage = damage
    this.manaCost = manaCost
}
public getName() {
    return this.name
}

public getDamage() {
    return this.damage
}

public getManaCost() {
    return this.manaCost
}

public setName(name: string): void {
    this.name = name
}

public setDemage(damage: number): void{
    this.damage= damage
}
public setManaCost(damage:number): void{
        this.manaCost= this.manaCost
}

        public showInfo():void{
            console.log (`name: ${this.name}
            damage: ${this.damage}
            mana cost: ${this.manaCost}`)
        }
}