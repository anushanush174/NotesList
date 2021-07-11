import {Injectable} from '@angular/core';
import {CustomHttpService} from 'src/app/shared/services/custom-http-services';
import {Note} from './models/note';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  public notesList: BehaviorSubject<Array<Note>> = new BehaviorSubject([]);
  public noteId = new Subject<any>();

  constructor(private customHttpService: CustomHttpService) {
    this.getNotes();
  }

  getNotes() {
    // after testing uncomment this line
    // this.customHttpService.get('create').subscribe(res => {
    //   this.notesListSubj.next(res);
    // });
    const notes = localStorage.getItem('notes');
    if (notes) {
      this.notesList.next(JSON.parse(notes));
    }
  }

  deleteNote(id) {
    return this.customHttpService.delete('create', id);
  }
}
