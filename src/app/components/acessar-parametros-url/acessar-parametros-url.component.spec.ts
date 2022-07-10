import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessarParametrosUrlComponent } from './acessar-parametros-url.component';

describe('AcessarParametrosUrlComponent', () => {
  let component: AcessarParametrosUrlComponent;
  let fixture: ComponentFixture<AcessarParametrosUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessarParametrosUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessarParametrosUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
