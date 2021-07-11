import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Note} from '../../models/note';
import {NoteService} from '../../note.service';
import {CustomHttpService} from '../../../../shared/services/custom-http-services';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent {
  @Input() noteItem;
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();
  editBtnClick = false

  // public noteList: Note[] = [];
  constructor(private noteService: NoteService,
              private customService: CustomHttpService) {
  }

  // ngOnInit(): void {
  //   this.getDataFromService();
  // }
  //
  // private getDataFromService() {
  //   this.noteService.notesListSubj.subscribe(res => {
  //     this.noteList = res;
  //     return this.noteList;
  //   });
  // }
  //
  onEditNote() {
    this.onEdit.emit(this.noteItem._id);
    this.editBtnClick = true;
  }

  click(){
    this.editBtnClick = false;
  }

  onDeleteNote() {
    this.onDelete.emit(this.noteItem._id);
  }
}
