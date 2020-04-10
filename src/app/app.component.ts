import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Note} from './models/note';
import {FirebaseService} from './services/firebase.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    appTitle = 'LX Note';
    notes: Note[] = [];
    selectedNote: Note;
    showDialog = false;

    constructor(private firebaseService: FirebaseService) {
    }

    ngOnInit() {
      this.loadData();
    }

    loadData() {
      const notesArray = [];
      const d = this.firebaseService.getPosts();
      d.then(docs => {
        docs.docs.map(doc => doc.data()).forEach(doc => {
          notesArray.push(new Note(doc.id, doc.title, doc.text));
        });
        this.handleResponse(notesArray);
        }, err => {
        this.handleResponse([]);
      });
    }

    handleResponse(notesArray) {
      this.notes = notesArray;
      if (!this.selectedNote) {
        this.selectedNote = this.notes[0];
      }
    }

    saveNote() {
      const note = {
        id: this.selectedNote.id,
        title: this.selectedNote.title,
        text: this.selectedNote.text
      }
      this.firebaseService.createPost(note)
        .then(
          res => {
            this.loadData();
          }
        );
    }

    clickNote(note: Note): void {
      this.selectedNote = note;
    }

    removeNote(note: Note) {
        this.firebaseService.deletePost(note.id)
          .then(
            res => {
              this.loadData();
              this.selectedNote = null;
            },
            err => {
              console.log(err);
            }
          );
        this.showDialog = false;

    }

    addNote(): void {
        const c = this.uuidv4();
        this.notes.push(new Note(c.toString(), 'New Note', 'Text...'));
        this.selectedNote = this.notes[this.notes.length - 1];
    }

    onModalSelect(note: Note) {
        this.showDialog = true;
        this.selectedNote = note;
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
    }
}
