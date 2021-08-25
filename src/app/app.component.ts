import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  counter:number = 0;

  handleAdd():void {
    this.counter ++;
  }

}
