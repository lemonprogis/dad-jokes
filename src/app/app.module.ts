import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JokeComponent} from './joke/joke.component';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/reducers/app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {ConfigEffects} from './store/effects/config.effects';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const modules: any[] = [
  BrowserModule,
  BrowserAnimationsModule,
  StoreModule.forRoot(appReducers),
  EffectsModule.forRoot([ConfigEffects]),
  HttpClientModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent
  ],
  imports: [...modules],
  exports: [...modules],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
