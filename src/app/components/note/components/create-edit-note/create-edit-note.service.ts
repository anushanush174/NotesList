import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CreateEditNoteComponent} from './create-edit-note.component';

@Injectable({
  providedIn: CreateEditNoteComponent
})
export class CreateEditNoteService {

  constructor(http: HttpClient) {
  }

  createNote(): void {
  }

  editNote(): void {

  }

}
