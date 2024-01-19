import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeshboardPage } from './deshboard.page';

describe('DeshboardPage', () => {
  let component: DeshboardPage;
  let fixture: ComponentFixture<DeshboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeshboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
