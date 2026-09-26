import { SpaceCraft } from "./SpaceCraft";

export interface CombatCapable {
    attack(target: SpaceCraft): number;
}