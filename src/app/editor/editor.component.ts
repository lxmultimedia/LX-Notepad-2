import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../models/note';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Input() noteContent: Note;
  @Output() savenote = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  saveNote() {
    this.savenote.emit();
  }
}
