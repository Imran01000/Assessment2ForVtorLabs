import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkillsExperiencePage } from './skills-experience.page';

describe('SkillsExperiencePage', () => {
  let component: SkillsExperiencePage;
  let fixture: ComponentFixture<SkillsExperiencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsExperiencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsExperiencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
