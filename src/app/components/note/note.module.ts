import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateEditNoteComponent} from './components/create-edit-note/create-edit-note.component';
import {NoteItemComponent} from './components/note-item/note-item.component';
import {NotesCreationChartComponent} from './components/notes-creation-chart/notes-creation-chart.component';
import {NotesListComponent} from './components/notes-list/notes-list.component';
import {NoteComponent} from './note.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    NoteComponent,
    CreateEditNoteComponent,
    NoteItemComponent,
    NotesCreationChartComponent,
    NotesListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NoteComponent
  ]
})

export class NoteModule {
}
