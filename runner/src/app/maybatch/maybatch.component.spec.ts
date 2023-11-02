import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaybatchComponent } from './maybatch.component';

describe('MaybatchComponent', () => {
  let component: MaybatchComponent;
  let fixture: ComponentFixture<MaybatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaybatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaybatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
