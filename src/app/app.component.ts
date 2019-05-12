import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maths';
  boxValue : string;

  onEnter(value: string) {
    this.boxValue = value;
  }
}
