import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguradoComponent } from './segurado.component';

describe('SeguradoComponent', () => {
  let component: SeguradoComponent;
  let fixture: ComponentFixture<SeguradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeguradoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeguradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
