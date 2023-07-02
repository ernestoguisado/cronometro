import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevoCronometroComponent } from './components/nuevo-cronometro/nuevo-cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoCronometroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
