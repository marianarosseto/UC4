"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Party = void 0;
class Party {
    constructor(name) {
        this.name = name;
        this.members = [];
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getMembers() {
        return this.members;
    }
    setMembers(members) {
        this.members = members;
    }
    addMember(character) {
        this.members.push(character);
    }
    removeMember(character) {
        this.members = this.members.filter((member) => member !== character);
    }
    showMembers() {
        console.log("========================");
        console.log(this.name.toUpperCase());
        console.log("========================");
        this.members.forEach((member, index) => {
            console.log(`${index + 1}. ${member.getName()} - Level ${member.getLevel()}`);
        });
    }
}
exports.Party = Party;
