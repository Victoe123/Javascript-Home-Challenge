import { Component } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-challenge';
  
  public classroom = [
    {
      name: 'victor',
      status: true,
      age: '16',

    },
    {
      name: 'Kyle',
      status: true,
      age: '16',

    },
    {
      name: 'Noah',
      status: true,
      age: '16',

    },
    {
      name: 'Pablo',
      status: true,
      age: '16',

    },
    {
      name: 'Pikachu',
      status: true,
      age: '16',

    }  
    
  ];
 
  

  loop() {
    for (let item of this.classroom) {
      if (item.status === true) {
        item.status = false;
      } else {
        item.status = true;
      }
    }
    console.log(this.classroom);
  }
}

