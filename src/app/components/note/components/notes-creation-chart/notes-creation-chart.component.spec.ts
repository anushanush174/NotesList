import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesCreationChartComponent } from './notes-creation-chart.component';

describe('NotesCreationChartComponent', () => {
  let component: NotesCreationChartComponent;
  let fixture: ComponentFixture<NotesCreationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesCreationChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesCreationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
