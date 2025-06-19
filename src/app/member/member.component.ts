import { Component, input, output } from '@angular/core';
import { Member } from '../model/member.model';
import { LevelPipe } from '../level.pipe';


@Component({
  selector: 'app-member',
  imports: [LevelPipe],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  member = input.required<Member>()
  nameClick = output<string>();

  onNameClick(){
    this.nameClick.emit(String(this.member()._id)); 
  }
}
