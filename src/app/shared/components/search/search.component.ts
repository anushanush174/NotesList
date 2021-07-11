import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../../components/note/note.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({
    searchValue: new FormControl(''),
  });

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    this.searchForm.controls['searchValue'].valueChanges.subscribe(res => this.onSearch(res));
  }

  onSearch(res: string) {
    let notes = JSON.parse(localStorage.getItem('notes'));
    notes = notes.filter(note => note.title.includes(res) || note.note.includes(res));
    this.noteService.notesList.next(notes);
  }
}
