import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillsExperiencePage } from './skills-experience.page';

const routes: Routes = [
  {
    path: '',
    component: SkillsExperiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsExperiencePageRoutingModule {}
