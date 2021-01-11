import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputSwitchModule } from 'primeng/inputswitch';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    // PrimeNG
    SidebarModule,
    MenubarModule,
    ButtonModule,
    InputSwitchModule,
    SplitButtonModule,
    // Own
    MainRoutingModule,
  ],
})
export class MainModule { }
