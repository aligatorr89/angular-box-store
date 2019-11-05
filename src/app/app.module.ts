import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoxesModule } from './boxes/boxes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppSettingsModule } from './app-settings/app-settings.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    BoxesModule,
    AppSettingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
