import { SafeHtml } from './../safehtml.pipe';
import { contact } from "./../contact";
import { EventEmitter } from "@angular/core";
import { Component, OnInit, Input, Output } from "@angular/core";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from "@angular/platform-browser";
import { Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: "app-list-contacts",
  templateUrl: "./list-contacts.component.html",
  styleUrls: ["./list-contacts.component.css"]
})

export class ListContactsComponent implements OnInit {
  @Input() contacts;
  @Input() supervisors;
  @Input() filterContact;
  @Input() typeUser;
  @Output() chooseContact = new EventEmitter<contact>();

  toggle: string = "users";

  selectContact(contact) {
    this.chooseContact.emit(contact);
  }

  changeTab(tabName){
    this.toggle = tabName;
  }

  constructor() {}

  ngOnInit() {}
}
