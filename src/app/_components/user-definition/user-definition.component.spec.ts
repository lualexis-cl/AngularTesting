import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefinitionComponent } from './user-definition.component';

describe('UserDefinitionComponent', () => {
  let component: UserDefinitionComponent;
  let fixture: ComponentFixture<UserDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
