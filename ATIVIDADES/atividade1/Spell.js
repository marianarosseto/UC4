"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spell = void 0;
class Spell {
    constructor(name, damage, manaCost) {
        this.name = name;
        this.damage = damage;
        this.manaCost = manaCost;
    }
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getManaCost() {
        return this.manaCost;
    }
    setName(name) {
        this.name = name;
    }
    setDemage(damage) {
        this.damage = damage;
    }
    setManaCost(damage) {
        this.manaCost = this.manaCost;
    }
    showInfo() {
        console.log(`name: ${this.name}
            damage: ${this.damage}
            mana cost: ${this.manaCost}`);
    }
}
exports.Spell = Spell;
