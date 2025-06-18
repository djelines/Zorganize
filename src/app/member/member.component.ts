import { Component } from '@angular/core';

type Role = 'manager' | 'contributor' | 'observer';
type Departement = 'IT' | 'Design' | 'Marketing' ;
type Level = 'Junior' | 'Mid' | 'Senior' ; 

interface Member {
    _id: number;
    name: string;
    surname: string;
    role: Role;
    departement: Departement;
    level: Level;
}

@Component({
  selector: 'app-member',
  imports: [],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  member: Member = {
    "_id" : 1,
    "name" : "Alice",
    "surname" : "Dupont",
    "role": "manager",
    "departement": "IT",
    "level" : "Junior",
  }
}
