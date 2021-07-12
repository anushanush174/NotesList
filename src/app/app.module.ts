import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {SearchComponent} from './shared/components/search/search.component';
import {NoteModule} from './components/note/note.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NoteModule
  ],
  providers: [HttpClient],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
