import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../models//note';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() notes;
  @Output() noteclicked = new EventEmitter();
  @Output() removenote  = new EventEmitter();
  @Output() addnote = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onAddNote(): void {
    this.addnote.emit();
  }

  onRemoveNote(note: Note): void {
    this.removenote.emit(note);
  }

  onClickNote(note: Note): void {
    this.noteclicked.emit(note);
  }
}
