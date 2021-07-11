import {Component, OnDestroy, OnInit} from '@angular/core';
import {Note} from '../../models/note';
import {NoteService} from '../../note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit, OnDestroy {

  public noteList: any;

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.noteService.notesList.subscribe(res => this.noteList = res);
  }

  private getDataFromService() {
    // this.noteService.notesListSubj.subscribe(res => {
    //   console.log('NOteItemComponent', res);
    //   this.noteList = res;
    //   return this.noteList;
    // });
  }

  onEdit() {
    console.log('edit');
  }

  onDeleteNote(id) {
    const filteredList = this.noteList.filter(el => el._id !== id);
    localStorage.setItem('notes', JSON.stringify(filteredList));
    this.noteService.notesList.next(filteredList);
  }

  ngOnDestroy() {
    this.noteService.notesList.unsubscribe();
  }

}
