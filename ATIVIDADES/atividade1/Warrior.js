"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const Character_1 = require("./Character");
class Warrior extends Character_1.Character {
    constructor(name, level, health, strength, weapon) {
        super(name, level, health);
        this.strength = strength;
        this.weapon = weapon;
    }
    getStrenght() {
        return this.strength;
    }
    getWeapon() {
        return this.weapon;
    }
    setStrenght(strength) {
        this.strength = strength;
    }
    setWeapon(weapon) {
        this.weapon = weapon;
    }
    attack() {
        const damage = this.strength + this.weapon.getDamage();
        console.log(`${this.getName()} attacks with ${this.weapon.getName()}! Damage: ${damage}`);
    }
}
exports.Warrior = Warrior;
