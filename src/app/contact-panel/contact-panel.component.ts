import { SafeHtml } from './../safehtml.pipe';
import { contact } from './../contact';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.css']
})
export class ContactPanelComponent implements OnInit {

  @Output() editUser = new EventEmitter<any>();

  @Input() chosen;

  constructor() { }

  ngOnInit() {
  }

  openEditForm(){
    this.editUser.emit(null);
  }

}
