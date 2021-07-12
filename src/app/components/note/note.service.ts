import {Injectable} from '@angular/core';
import {Note} from './models/note';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  public notesList: BehaviorSubject<Array<Note>> = new BehaviorSubject([]);

  constructor(
    // private customHttpService: CustomHttpService
  ) {
    this.getNotes();
  }

  getNotes() {
    // this.customHttpService.get('create').subscribe(res => {
    //   this.notesListSubj.next(res);
    // });
    const notes = localStorage.getItem('notes');
    if (notes) {
      this.notesList.next(JSON.parse(notes));
    }
  }

  // deleteNote(id) {
  //   return this.customHttpService.delete('delete', id);
  // }
}
