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
    // this.customHttpService.post('create', this.notesForm.value).subscribe(res => {
    //   console.log(res);
    //   this.clearAfterSave();
    //   this.noteService.getNotes();
    // });
    let notes: any = localStorage.getItem('notes');
    if (!notes) {
      localStorage.setItem('notes', JSON.stringify([{
        title: this.notesForm.controls['title'].value,
        note: this.notesForm.controls['note'].value,
        _id: 1
      }]));
    } else {
      notes = JSON.parse(notes);
      notes.push({
        title: this.notesForm.controls['title'].value,
        note: this.notesForm.controls['note'].value,
        _id: notes.length > 1 ? notes[notes.length - 1]._id + 1 : 1,
      });
      localStorage.setItem('notes', JSON.stringify(notes));
    }
    this.noteService.getNotes();
    this.clearAfterSave();
  }

  private clearAfterSave(): void {
    this.notesForm.get('title').reset();
    this.notesForm.get('note').reset();
  }
}
