/*import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task1-app');
}

import {Component} from '@angular/core';
@Component({
    selector: 'app-root',
    template: <h1> {{ message }} </h1>,
    styles:`
        :host {
            color:#a144eb;
        }
    `,
})
export class App {
  message: string  = 'Hello , Universre'
}
*/
/*import {Component} from '@angular/core';
@Component({
    selector: 'app-root',
    template:` Hello Universe `,
    styles:`
        :host {
            color:#a144eb;
        }
    `,
})
export class App {}
*/
/*
import {Component} from '@angular/core';
@Component({
    selector:'app-root',
    template:'Hi,{{city}} {{1+1}}'
})
export class App{
  city='Almaty';
}
*/
/*
import {Component} from '@angular/core';
@Component({
  selector:'app-user',
  template:'Username: {{Username}}'
})
export class User{
  Username='Amankossova';
}

@Component({
  selector:'App-root',
  template:'<h1>About you </h1><app-user/>',
  imports:[User],
})
export class App{

}
*/
/*
import {Component} from '@angular/core';
@Component({
  selector:'app-root',
  template:`
    @if(isworks){

      <span>It works correctly</span>
    }
    @else{
      <span>It isn't works</span>
    }`
})
export class App{
  isworks=false;
}
*/
/*
import {Component} from '@angular/core';
@Component({
  selector:'App-root',
  template:`
    @for(i of students;track i){
      <p>{{i.soz}} ,{{i.id}}</p>
  }`
})
export class App{
  students=[{id:5,soz:'a'},{id:4,soz:'b'},{id:2,soz:'c'}]
}
*/
/*
import {Component} from '@angular/core';
@Component({
  selector:'app-root',
  template:`<p [class]="true"> qwefg</p>`,
})
export class App{
  isEditable=true;
}
*/
/*
import {Component} from '@angular/core';
@Component({
  selector:'app-root',
  template:`
    <div (mouseenter)="show()">
    MouseOver
    </div>
    <p>{{message}}</p>
  `
})
export class App{
  message=" ";
  show(){
    this.message="sdfv";
  }
}
*/
/*
import {Component} from '@angular/core';
import{User} from './user';
@Component({
    selector:'app-root',
    template:`<app-user name="Dilyara"></app-user>`,
    imports:[User]
})
export class App{}
*/
/*
import {Component} from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  template: `
    <app-user />
    <p>🐢 all the way down {{ items.length }}</p>
  `,
  imports: [User],
})
export class App {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
*/
/*
import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
@Component({
    selector:'app-root',
    template:`<img [ngSrc]="kbtu" width=1000 height=500 />`,
    imports:[NgOptimizedImage]
})
export class App{
    kbtu="https://i.ytimg.com/vi/hryo80mE0zU/maxresdefault.jpg"
}
*/
/*
import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector:'app-root',
  imports:[FormsModule],
  template:`
    <label for=practice>
    <input id=practice type="text" [(ngModel)]="try"/>
    </label>
    <p>You wrote : {{try}}</p>
  `
  
})
export class App{
  try=""
}
*/
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector:'app-root',
  imports:[FormsModule],
  template:`
    <label for="prac2">
      <input id="prac2" [(ngModel)]="test"/>
    </label>
    <p>
    <button (click)=show()>Click if you want to see eour input</button></p>
    
  `
})
export class App{
  test=""
  show(){
    alert(this.test)
  }
}