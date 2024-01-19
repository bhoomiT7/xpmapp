import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpCategoryPage } from './exp-category.page';

describe('ExpCategoryPage', () => {
  let component: ExpCategoryPage;
  let fixture: ComponentFixture<ExpCategoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExpCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
