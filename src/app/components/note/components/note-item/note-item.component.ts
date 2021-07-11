import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../../models/note';
import {NoteService} from '../../note.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent {
  // public noteList: Note[] = [];
  //
  // constructor(private noteService: NoteService) {
  // }
  //
  // ngOnInit(): void {
  //   this.getDataFromService();
  // }
  //
  // private getDataFromService() {
  //   this.noteService.notesListSubj.subscribe(res => {
  //     console.log('NOteItemComponent', res);
  //     this.noteList = res;
  //     return this.noteList;
  //   });
  // }
  //
  // onEdit() {
  //   console.log('edit');
  // }
  //
  // onDelete() {
  // }
}
