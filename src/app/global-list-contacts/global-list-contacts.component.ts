import { Component, OnInit, Input, Output } from '@angular/core';
import { contact } from "./../contact";
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-global-list-contacts',
  templateUrl: './global-list-contacts.component.html',
  styleUrls: ['./global-list-contacts.component.css']
})
export class GlobalListContactsComponent implements OnInit {

  @Input() simulators;
  @Input() filterContact;
  @Output() chooseContact = new EventEmitter<contact>();
  @Output() chooseSimulator = new EventEmitter<any>();

  constructor() { }

  selectContact(contact, simIndex) {
    this.chooseContact.emit(contact);
    this.selectSimulator(simIndex);
  }

  selectSimulator(index){
    this.chooseSimulator.emit(index);
  }

  ngOnInit() {
  }

}
