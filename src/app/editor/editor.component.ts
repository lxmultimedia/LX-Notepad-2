import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Note} from '../models/note';

@Component({
  selector: 'app-editor',
  encapsulation: ViewEncapsulation.None,
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
