import {Component, OnDestroy, OnInit} from '@angular/core';
import {NoteService} from '../../note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit, OnDestroy {

  public noteList: any;
  public editedNoteId: any;

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.noteService.notesList.subscribe(res => this.noteList = res);
  }

  onDeleteNote(id) {
    const filteredList = this.noteList.filter(el => el._id !== id);
    localStorage.setItem('notes', JSON.stringify(filteredList));
    this.noteService.notesList.next(filteredList);
  }

  onEditNote(id: any) {
    this.editedNoteId = id;
  }

  onSave(isSave: boolean) {
    if (isSave) {
      this.editedNoteId = undefined;
    }
  }

  ngOnDestroy() {
    this.noteService.notesList.unsubscribe();
  }
}
