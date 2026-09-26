"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weapon = void 0;
class weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    /// GETTERS
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    //SETTERS
    setName(name) {
        this.name = name;
    }
    setDammage(damege) {
        this.damage = damege;
    }
    ShowInfo() {
        console.log(` name: ${this.name}
           Damage: ${this.damage}
           `);
    }
}
exports.weapon = weapon;
