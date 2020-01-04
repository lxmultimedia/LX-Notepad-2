import {Component, ViewEncapsulation} from '@angular/core';
import {Note} from './models/note';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    appTitle = 'LX Note';
    notes: Note[] = [];
    selectedNote: Note;
    initalNote: Note = new Note('0', 'Title...', 'Text...');
    showDialog = false;

    constructor() {
        this.loadData();
    }

    loadData() {
        const readScript = 'php/read.php';
        const notesArray = [];

        $.getJSON(readScript, function(jsonData) {
            $.each(jsonData, (i, val) => {
                const jsonNote = val.split('|||');
                const n = new Note(jsonNote[0], jsonNote[1], jsonNote[2]);
                notesArray.push(n);
            });

            this.handleResponse(notesArray);
        }.bind(this));
    }

    handleResponse(notesArray) {
        this.notes = notesArray;
        if (!this.selectedNote) {
            this.selectedNote = this.notes[0];
        }
    }

    clickNote(note: Note): void {
        this.selectedNote = note;
    }

    saveNote(): void {
        const data = new FormData();
        data.append('id' , this.selectedNote.id);
        data.append('title' , this.selectedNote.title);
        data.append('text' , this.selectedNote.text);
        const xhr = new XMLHttpRequest();
        xhr.open( 'post', 'php/save.php', true );
        xhr.send(data);
        this.loadData();
    }

    removeNote(note: Note) {
        if (this.notes.length === 1) {
            this.notes = [];
        }
        const data = new FormData();
        data.append('id', note.id.toString());
        const xhr = new XMLHttpRequest();
        xhr.open('post', 'php/delete.php', false);
        xhr.send(data);
        this.loadData();
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
