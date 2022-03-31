import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { NewUserComponent } from './COMPONENTES/new-user/new-user.component';
import { RecoverPassComponent } from './COMPONENTES/recover-pass/recover-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NewUserComponent,
    RecoverPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
