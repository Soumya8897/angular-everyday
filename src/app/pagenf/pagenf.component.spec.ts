import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenfComponent } from './pagenf.component';

describe('PagenfComponent', () => {
  let component: PagenfComponent;
  let fixture: ComponentFixture<PagenfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagenfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagenfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
