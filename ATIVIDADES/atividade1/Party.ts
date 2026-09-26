import { Character } from "./Character";

export class Party {
  private name: string;
  private members: Character[];

  constructor(name: string) {
    this.name = name;
    this.members = [];
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getMembers(): Character[] {
    return this.members;
  }

  public setMembers(members: Character[]): void {
    this.members = members;
  }

  public addMember(character: Character): void {
    this.members.push(character);
  }

  public removeMember(character: Character): void {
    this.members = this.members.filter((member) => member !== character);
  }

  public showMembers(): void {
    console.log("========================");
    console.log(this.name.toUpperCase());
    console.log("========================");

    this.members.forEach((member, index) => {
      console.log(`${index + 1}. ${member.getName()} - Level ${member.getLevel()}`);
    });
  }
}