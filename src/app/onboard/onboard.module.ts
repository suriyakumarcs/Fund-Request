import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './onboard.router.module';

import { OnboardPage } from './onboard.page';


import { LoginPageModule } from '../login/login.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    LoginPageModule
  ],
  declarations: [OnboardPage]
})
export class OnboardPageModule {}
