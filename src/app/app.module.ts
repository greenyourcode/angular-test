import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseComponent } from './case/case.component';
import { IndexPipe } from './index.pipe';
import { LimitDirective } from './limit.directive';

@NgModule({
  declarations: [
    AppComponent,
    CaseComponent,
    IndexPipe,
    LimitDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
