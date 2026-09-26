import { weapon } from "./Weapon";
import { Spell } from "./Spell";
import { Warrior } from "./Warrior";
import { Mage } from "./Mage";
import { Party } from "./Party";

const longsword = new weapon("Longsword", 35);
const battleAxe = new weapon("Battle Axe", 45);

const fireball = new Spell("Fireball", 50, 30);
const iceBolt = new Spell("Ice Bolt", 30, 10);

const aragorn = new Warrior("Aragorn", 10, 150, 0, longsword);
const gimli = new Warrior("Gimli", 9, 160, 0, battleAxe);

const gandalf = new Mage("Gandalf", 12, 100, 100, fireball);
const merlin = new Mage("Merlin", 8, 80, 100, iceBolt);

const theDragonSlayers = new Party("The Dragon Slayers");
theDragonSlayers.addMember(aragorn);
theDragonSlayers.addMember(gimli);
theDragonSlayers.addMember(gandalf);
theDragonSlayers.addMember(merlin);

console.log("Party Members:");
theDragonSlayers.showMembers();
console.log("");

aragorn.attack();
gimli.attack();
console.log("");

gandalf.castSpell();
merlin.castSpell();
console.log("");

console.log(gandalf.getName() + " takes 40 damage!");
gandalf.takeDamage(40);
console.log("Health remaining: " + gandalf.getHealth());
console.log("");

theDragonSlayers.removeMember(gimli);
console.log("Party after removing Gimli:");
theDragonSlayers.showMembers();