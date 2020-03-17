import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-global-contact-search',
  templateUrl: './global-contact-search.component.html',
  styleUrls: ['./global-contact-search.component.css']
})
export class GlobalContactSearchComponent implements OnInit {

  @Output() addUser = new EventEmitter<any>();
  @Output() editUser = new EventEmitter<any>();
  @Output() emitOpenSidebar = new EventEmitter<any>();
  @Output() userFilter: EventEmitter<any> = new EventEmitter();
  searchText: string; 

  constructor() { }

  lookUser(){
    this.userFilter.emit(this.searchText);
  }
  
  openUserForm(){
    this.addUser.emit(null);
  }

  openEditForm(){
    this.editUser.emit(null);
  }

  openSidebar(){
    this.emitOpenSidebar.emit(true);
  }

  ngOnInit() {
  }

}
