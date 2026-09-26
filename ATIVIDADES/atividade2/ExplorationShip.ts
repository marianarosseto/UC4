import { Exploratory } from "./Exploratory";
import { SpaceCraft } from "./SpaceCraft";

export class ExplorationShip extends SpaceCraft implements Exploratory {


    constructor(id: number, name: string, fuel: number, health: number) {
        super(id, name, fuel, health);
    }


    gastarcommbustivel(): void{
        this.setFuel(this.getFuel()- 10)
    }
        explore(location: string): string {
           if(!this.isOperational()){
            return " a nave n esta operando"
           }

           this.gastarcommbustivel()

           return `${this.getName()} iniciou uma exploração em ${location}`;
        }

        collectData(): string {
            return `${this.getName()} coletou dados científicos`;
        }
       
}