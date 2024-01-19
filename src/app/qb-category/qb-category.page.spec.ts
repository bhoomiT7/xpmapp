import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QBCategoryPage } from './qb-category.page';

describe('QBCategoryPage', () => {
  let component: QBCategoryPage;
  let fixture: ComponentFixture<QBCategoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QBCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
