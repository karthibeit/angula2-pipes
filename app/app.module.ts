import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { RemoveSpaces } from './pipes/removespaces.pipe';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [AppComponent, RemoveSpaces ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
