import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { TodosState } from './state/todos.state';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideBarComponent, SideMenuLinkComponent } from './components/side-bar';
import { HttpClientModule } from '@angular/common/http';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

@NgModule({
  imports: [
    NgxsModule.forRoot([TodosState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, SideBarComponent, SideMenuLinkComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
