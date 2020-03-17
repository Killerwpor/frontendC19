import { faStarOfLife, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-simulator-form",
  templateUrl: "./simulator-form.component.html",
  styleUrls: ["./simulator-form.component.css"]
})
export class SimulatorFormComponent implements OnInit {
  @Input() simulatorList;
  addArray: string[] = [];
  star = faStarOfLife;
  building = faBuilding;

  constructor() {}

  ngOnInit() {
  }

  toggleSim(name) {
    if (!this.addArray.includes(name)) {
      this.addArray.push(name);
    } else {
      const index = this.addArray.indexOf(name, 0);
      this.addArray.splice(index, 1);
    }
  }
}
