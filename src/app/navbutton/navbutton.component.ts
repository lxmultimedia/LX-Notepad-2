import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-navbutton',
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbuttonComponent implements OnInit {

  @Input() notetitle: string;
  @Output() removeNote = new EventEmitter();
  @Output() clickNote = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onNoteRemove(): void {
    this.removeNote.emit();
  }

  onNoteClick(): void {
    this.clickNote.emit();
  }

}
