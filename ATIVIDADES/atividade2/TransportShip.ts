import { SpaceCraft } from "./SpaceCraft";
import { CargoCarrier } from "./CargoCarrier";

export class TransportShip extends SpaceCraft implements CargoCarrier{

    private cargoCapacity: number;
    private currentCargo: number;

    constructor(id: number, name: string, fuel: number, health: number,currentCargo: number, cargoCapacity: number) {
        super(id, name, fuel, health);
        this.cargoCapacity = cargoCapacity;
        this.currentCargo= currentCargo
    }

    getCargoCapacity(): number {
        return this.cargoCapacity;
    }

    getCurrentCargo(): number {
        return this.currentCargo;
    }

    loadCargo(amount: number): void{
        if(this.currentCargo + amount > this.cargoCapacity){
            console.log("a capacidade maxima foi atingida")
                return;
        }
    }
        unloadCargo(amount: number): void {
            if (this.currentCargo - amount < 0) {
                console.log("A carga não pode ficar abaixo de 0.");
                return;
            }

    }
}
