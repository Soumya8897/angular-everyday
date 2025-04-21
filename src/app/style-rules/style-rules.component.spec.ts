import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleRulesComponent } from './style-rules.component';

describe('StyleRulesComponent', () => {
  let component: StyleRulesComponent;
  let fixture: ComponentFixture<StyleRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
