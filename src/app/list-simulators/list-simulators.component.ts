import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';
import { faCoffee, faSkull, faPizzaSlice, faCar, faBicycle, faHamburger, faMountain, faStarOfLife, faBuilding, faFireExtinguisher } from '@fortawesome/free-solid-svg-icons';
import { simulator } from '../simulator';


@Component({
  selector: 'app-list-simulators',
  templateUrl: './list-simulators.component.html',
  styleUrls: ['./list-simulators.component.css']
})
export class ListSimulatorsComponent implements OnInit {

  // Variables for icons 
  faFireExtinguisher=faFireExtinguisher;
  faCoffee = faCoffee;
  faSkull = faSkull;
  faBurger = faHamburger;
  faPizza = faPizzaSlice;
  faBike = faBicycle;
  faCar = faCar;
  faMountain = faMountain;
  faStarOfLife = faStarOfLife;
  faBuilding = faBuilding;


  //Input de todos los simuladores
  @Input() simulators;
  @Output() simulatorInfo = new EventEmitter<simulator>();

  chooseSimulator(simulator){
    this.simulatorInfo.emit(simulator);
  }

  constructor() { }

  ngOnInit() {
  }

}
