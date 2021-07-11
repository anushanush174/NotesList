import {Component, OnInit} from '@angular/core';
import {Note} from '../../models/note';
import {NoteService} from '../../note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  public noteList: Note[] = [];

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.getDataFromService();
  }

  private getDataFromService() {
    this.noteService.notesListSubj.subscribe(res => {
      console.log('NOteItemComponent', res);
      this.noteList = res;
      return this.noteList;
    });
  }

  onEdit() {
    console.log('edit');
  }

  onDelete(id) {

  }


}
