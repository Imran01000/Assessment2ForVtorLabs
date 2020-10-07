import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillsExperiencePageRoutingModule } from './skills-experience-routing.module';

import { SkillsExperiencePage } from './skills-experience.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillsExperiencePageRoutingModule
  ],
  declarations: [SkillsExperiencePage]
})
export class SkillsExperiencePageModule {}
