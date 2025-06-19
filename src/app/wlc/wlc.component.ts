import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wlc',
  imports: [DatePipe],
  templateUrl: './wlc.component.html',
  styleUrl: './wlc.component.css'
})
export class WlcComponent {
  title = 'Welcome to Zorganize';
  quota = 1; 
  now = new Date();

}
