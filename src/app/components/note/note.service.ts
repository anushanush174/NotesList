import {Injectable} from '@angular/core';
import {CustomHttpService} from 'src/app/shared/services/custom-http-services';
import {Note} from './models/note';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  public notesListSubj = new Subject<any>();

  constructor(private customHttpService: CustomHttpService) {
    this.getNotes();
  }

  getNotes() {
    // after testing uncomment this line
    this.customHttpService.get('create').subscribe(res => {
      console.log('NoteService', res);
      this.notesListSubj.next(res);
    });
  }

  deleteNote(id) {
    this.customHttpService.delete('create', + '/' + id );
  }
}
