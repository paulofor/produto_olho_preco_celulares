import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheFilme2Page } from './detalhe-filme2.page';

describe('DetalheFilme2Page', () => {
  let component: DetalheFilme2Page;
  let fixture: ComponentFixture<DetalheFilme2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheFilme2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheFilme2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
