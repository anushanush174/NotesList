import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomHttpService} from 'src/app/shared/services/custom-http-services';
import {NoteService} from '../../note.service';
import {Note} from '../../models/note';

@Component({
  selector: 'app-create-edit-note',
  templateUrl: './create-edit-note.component.html',
  styleUrls: ['./create-edit-note.component.css']
})
export class CreateEditNoteComponent {

  public edit = false;
  public notesForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(255)
    ]),
    note: new FormControl('', Validators.required),
  });

  constructor(private customHttpService: CustomHttpService,
              private noteService: NoteService) {
  }

  public onSave(): void {

  }

  public onCreate(): void {
    this.customHttpService.post('create', this.notesForm.value).subscribe(res => {
      console.log(res);
      this.clearAfterSave();
      this.noteService.getNotes();

    });
    // this.noteService.notesList.next(this.notesForm.value);
  }


  private clearAfterSave(): void {
    this.notesForm.get('title').reset();
    this.notesForm.get('note').reset();
  }
}
