export class weapon {

    private name: string
    private damage: number

    constructor(name: string, damage: number) {

        this.name = name
        this.damage = damage
    }


    public getName(): string {
        return this.name;
    }

    public getDamage(): number {
        return this.damage;
    }

    public setName(name: string): void {
        this.name = name
    }

    public setDammage(damege: number): void {
        this.damage = damege
    }

    public ShowInfo() {
        console.log(` name: ${this.name}
           Damage: ${this.damage}
           `)
    }
}
