import { Departement } from "./department.model";
import { Level } from "./level.model";
import { Role } from "./role.model";

export interface Member {
    _id: number;
    name: string;
    surname: string;
    role: Role;
    departement: Departement;
    level: Level;
}