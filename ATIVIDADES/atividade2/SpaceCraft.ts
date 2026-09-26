import { Repairable } from "./Repairable";


export abstract class SpaceCraft implements Repairable {
private id: number
private name: string
private fuel:  number
private health: number

constructor(id: number, name: string, fuel: number, health: number){
    this.id= id
    this.name= name
    this.fuel= fuel
    this.health= health
}
public getId(): number{
    return this.id
}

public getName(): string{
    return this.name
}

     public getFuel(): number{
        return this.fuel
     }  
     public getHealth(): number{
         return this.health
     }

     public setId(id: number): void {
        this.id = id;
    }
    
    public setName(name: string): void {
        this.name = name;
    }
    
    public setFuel(fuel: number): void {
        this.fuel = fuel;
}
    
    public setHealth(health: number): void {
        this.health = health;
    }



        refuel(value: number): void{
            this.fuel += value
        }
        
        repair(value: number): void{
            this.health += value
        }

        takedamage(damage: number): void{
                this.health -= damage
                if (this.health< 0 ){
                    this.health=0
                }
        }




            isOperational(): boolean{
            return this.health> 0 && this.fuel> 0 }
}