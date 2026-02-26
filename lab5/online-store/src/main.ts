/*import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
*/
/*
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; 

bootstrapApplication(App);
*/
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';  // App компонентін импорттау

bootstrapApplication(App)  // App компонентін bootstrap ету
  .catch(err => console.error(err));