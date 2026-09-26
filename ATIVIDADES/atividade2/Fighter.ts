import { SpaceCraft } from "./SpaceCraft";
import { CombatCapable } from "./CombatCapable";

export class Fighter extends SpaceCraft implements CombatCapable {

    private weaponPower: number;

    constructor(id: number, name: string, fuel: number, health: number, weaponPower: number) {
        super(id, name, fuel, health);
        this.weaponPower = weaponPower;
    }

    getWeponPower(): number {
        return this.weaponPower;
    }

    setWeponPower(weaponPower: number): void {
        this.weaponPower = weaponPower;
    }

    attack(target: SpaceCraft): number {
        if (!this.isOperational()) {
            console.log("A nave não está operando");
            return 0;
        }

        const damage = this.weaponPower;

        target.takedamage(damage);

        console.log(`${this.getName()} atacou ${target.getName()} causando ${damage} de dano.`);

        return damage;
    }
}