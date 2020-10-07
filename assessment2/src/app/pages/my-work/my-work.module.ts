import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyWorkPageRoutingModule } from './my-work-routing.module';

import { MyWorkPage } from './my-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyWorkPageRoutingModule
  ],
  declarations: [MyWorkPage]
})
export class MyWorkPageModule {}
