import { Component, OnInit } from '@angular/core';
import skills from 'src/app/json/skills.json'; 

@Component({
  selector: 'app-skills-experience',
  templateUrl: './skills-experience.page.html',
  styleUrls: ['./skills-experience.page.scss'],
})
export class SkillsExperiencePage implements OnInit {

  constructor() { }
  public data:{name:string, description:string, description1:string, 
    description2:string, description3:string}[] = skills;
    
  ngOnInit() {
  }

}
