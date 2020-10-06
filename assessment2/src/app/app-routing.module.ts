import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/',
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'aboutme',
    loadChildren: () => import('./pages/aboutme/aboutme.module').then( m => m.AboutmePageModule)
  },
  {
    path: 'skills-experience',
    loadChildren: () => import('./pages/skills-experience/skills-experience.module').then( m => m.SkillsExperiencePageModule)
  },
  {
    path: 'my-work',
    loadChildren: () => import('./pages/my-work/my-work.module').then( m => m.MyWorkPageModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./pages/resume/resume.module').then( m => m.ResumePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
