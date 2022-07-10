import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderizarListasComponent } from './renderizar-listas.component';

describe('RenderizarListasComponent', () => {
  let component: RenderizarListasComponent;
  let fixture: ComponentFixture<RenderizarListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderizarListasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderizarListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
