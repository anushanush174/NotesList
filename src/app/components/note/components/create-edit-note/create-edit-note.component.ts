import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomHttpService} from 'src/app/shared/services/custom-http-services';
import {NoteService} from '../../note.service';
import {Note} from '../../models/note';

@Component({
  selector: 'app-create-edit-note',
  templateUrl: './create-edit-note.component.html',
  styleUrls: ['./create-edit-note.component.css']
})
export class CreateEditNoteComponent implements OnInit {

  @Input() note: Note;
  @Input() edit = false;
  @Output() onSaveChanges: EventEmitter<boolean> = new EventEmitter<any>();
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

  ngOnInit() {
    if (this.note) {
      this.notesForm.controls.title.setValue(this.note.title);
      this.notesForm.controls.note.setValue(this.note.note);
    }
  }

  public onSave(): void {
    this.note.note = this.notesForm.controls.note.value;
    this.note.title = this.notesForm.controls.title.value;
    const notes: any = JSON.parse(localStorage.getItem('notes'));
    const editedIndex = notes.findIndex(item => item._id === this.note._id);
    notes[editedIndex] = this.note;
    // this.customHttpService.put('update', this.note).subscribe(res => {
    /*const editedIndex = notes.indexOf(item => item._id = this.note._id);
    notes[editedIndex] = this.note;*/
    // });
    localStorage.setItem('notes', JSON.stringify(notes));
    this.noteService.getNotes();
    this.onSaveChanges.emit(true);
  }

  public onCreate(): void {
    // this.customHttpService.post('create', this.notesForm.value).subscribe(res => {
    //   this.clearAfterSave();
    //   this.noteService.getNotes();
    // });
    let notes: any = localStorage.getItem('notes');
    if (!notes) {
      localStorage.setItem('notes', JSON.stringify([{
        title: this.notesForm.controls.title.value,
        note: this.notesForm.controls.note.value,
        _id: 1,
      }]));
    } else {
      notes = JSON.parse(notes);
      const id = notes.length > 0 ? notes[notes.length - 1]._id + 1 : 1;
      notes.push({
        title: this.notesForm.controls.title.value,
        note: this.notesForm.controls.note.value,
        _id: id
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
