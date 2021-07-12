import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent {
  @Input() noteItem;
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  onEditNote() {
    this.onEdit.emit(this.noteItem._id);
  }

  onDeleteNote() {
    this.onDelete.emit(this.noteItem._id);
  }
}
