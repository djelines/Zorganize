import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WlcComponent } from './wlc/wlc.component';
import { MemberComponent } from "./member/member.component";

@Component({
  selector: 'app-root',
  imports: [WlcComponent, MemberComponent],
  // template : 'toto', 
  /** 
  template: `

  <h1>{{ title }}</h1>
  <app-wlc />
  <p> L'application qui gère vos effectifs, développé par une équipe de {{quota + 1}} personnes</p>
  <p>Actuellement {{ counter }} personnes nous font confiance</p>
  <button (click)="increment()" >❤️</button>
  <button (click)="decrement()" >✖️</button>

  <input #myInput (input)="onEdit(myInput.value)" [type]="inputType">
  <button (click)="toggleEyes()">👁️</button>
  <p>{{theValue}}</p>

  <div [class]="msgClass">Un message de notre équipe</div>
  <button (click)="changeColor('error')">Error</button>
  <button (click)="changeColor('success')">Succes</button>
  `, 
  */
  template: `<app-member/>`, 
  // templateUrl: './app.component.html', // url vers le template HTML 
  // styleUrl: './app.component.css',  // url vers le style du composant
  styles: [`
  h1{color : blue} 
  .success{
    color: green
  }
  .error{
    color:red
  }
  `] 
  
})
export class AppComponent {
  title = 'Welcome to Zorganize';
  quota = 1; 
  counter = 0 ; 
  theValue = ''; 
  msgClass : 'success' | 'error' = 'success' ; 
  inputType : 'password' | 'text' = 'password' ; 



  increment(){
    this.counter++
    // console.log(this.counter)
  }

  decrement(){
    this.counter--
  }

  onEdit(value: string){
    this.theValue = value
    console.log(value)
  }

  changeColor(style : 'success' | 'error'){
    this.msgClass = style; 
  }

  toggleEyes(){
    this.inputType = this.inputType === 'password' ? 'text' : 'password' ; 
  }
}
