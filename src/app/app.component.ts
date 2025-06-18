import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // template : 'toto', 
  templateUrl: './app.component.html', // url vers le template HTML 
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Zorganize';
}
