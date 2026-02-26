/*
import {Component,input} from '@angular/core';
@Component({
    selector:'app-user',
    template:`<p>My name is {{name()}}</p>`
})
export class User{
    name=input<string>();
}
*/
/*
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  styles: `
    .btn {
      padding: 5px;
    }
  `,
  template: ` 
    <button class="btn" (click)="addItem()">Add Item</button> 
  `,
})
export class User {

  addItemEvent = output<string>(); 

  addItem() {
    this.addItemEvent.emit('🐢'); 
  }
}
*/
import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
@Component({
    selector:'app-root',
    template:`<img [ngSrc]="kbtu" width=100px />`,
    imports:[NgOptimizedImage]
})
export class App{
    kbtu="https://i.ytimg.com/vi/hryo80mE0zU/maxresdefault.jpg"
}