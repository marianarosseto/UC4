export class Character {
    private name: string
    private level: number
    private health: number

    constructor(name: string, level: number, health: number) {
        this.name = name
        this.level = level
        this.health = health
    }
    public getName(): string {
        return this.name;
    }

    public getLevel(): number {
        return this.level;
    }

    public getHealth(): number {
        return this.health;
    }

    public setName(name: string): void {
        this.name = name
    }

    public setLevel(level: number): void {
        this.level = level
    }

    public setHealth(health: number): void {
        this.health = health
    }

    public ShowInfo(): void {
        console.log(` name: ${this.name}
        level: ${this.level}
        health: ${this.health}`)
    }

    public takeDamage(value: number): void {
        this.health = this.health - value
        if (this.health < 0) {
            this.health = 0
        }
    }
}
