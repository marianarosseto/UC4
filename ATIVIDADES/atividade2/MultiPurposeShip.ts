import { SpaceCraft } from "./SpaceCraft";
import { CombatCapable } from "./CombatCapable";
import { CargoCarrier } from "./CargoCarrier";
import { Exploratory } from "./Exploratory";

export class MultiPurposeShip extends SpaceCraft implements CombatCapable, CargoCarrier, Exploratory {

    private weaponPower: number;
    private cargoCapacity: number;
    private currentCargo: number;

    constructor(
        id: number,
        name: string,
        fuel: number,
        health: number,
        weaponPower: number,
        cargoCapacity: number,
        currentCargo: number
    ) {
        super(id, name, fuel, health);
        this.weaponPower = weaponPower;
        this.cargoCapacity = cargoCapacity;
        this.currentCargo = currentCargo;
    }

    attack(target: SpaceCraft): number {
        const damage = this.weaponPower;
        target.takedamage(damage);
        return damage;
    }

    loadCargo(amount: number): void {
        if (this.currentCargo + amount > this.cargoCapacity) {
            console.log("A capacidade máxima foi atingida");
            return;
        }

        this.currentCargo += amount;
    }

    unloadCargo(amount: number): void {
        if (this.currentCargo - amount < 0) {
            console.log("A carga não pode ficar abaixo de 0");
            return;
        }

        this.currentCargo -= amount;
    }

    getCargoCapacity(): number {
        return this.cargoCapacity;
    }

    getCurrentCargo(): number {
        return this.currentCargo;
    }

    explore(location: string): string {
        this.refuel(-10);

        return `${this.getName()} iniciou uma exploração em ${location}`;
    }

    collectData(): string {
        return `${this.getName()} coletou dados científicos`;
    }
}