"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Character_1 = require("./Character");
class Mage extends Character_1.Character {
    constructor(name, level, health, mana, spell) {
        super(name, level, health);
        this.mana = mana;
        this.spell = spell;
    }
    getMana() {
        return this.mana;
    }
    getSpell() {
        return this.spell;
    }
    setMana(mana) {
        this.mana = mana;
    }
    setSpell(spell) {
        this.spell = spell;
    }
    castSpell() {
        const manaCost = this.spell.getManaCost();
        if (this.mana >= manaCost) {
            this.mana -= manaCost;
            const characterName = this.getName();
            console.log(`${characterName} casts ${this.spell.getName()}!`);
            console.log(`Damage: ${this.spell.getDamage()}`);
            console.log(`Mana remaining: ${this.mana}`);
        }
        else {
            const characterName = this.getName();
            console.log(`${characterName} does not have enough mana!`);
        }
    }
}
exports.Mage = Mage;
