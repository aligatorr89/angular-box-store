import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeComponent } from './components/theme/theme.component';
import { AppSettingsMaterialModule } from './app-settings-material.module';

@NgModule({
  declarations: [ThemeComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppSettingsMaterialModule
  ],
  exports: [ThemeComponent]
})
export class AppSettingsModule { }
