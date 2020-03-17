import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { SimulatorFormComponent } from "./../simulator-form/simulator-form.component";
import { FormAddService } from "./company-form.service";
declare let alertify: any;

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  display='none';

@ViewChild(SimulatorFormComponent, { static: false })
simForm: SimulatorFormComponent;

response: any;
  
  @Input() simulatorList: string;
  @Output() close: EventEmitter<any> = new EventEmitter();


  constructor(public formAddService: FormAddService) {}

  ngOnInit() {
  }

  

  save(){
    var inputCompany= (<HTMLInputElement>document.getElementById("inputCompany")).value; 
    var modal=(<HTMLInputElement>document.getElementById("modal"));
    var userData = JSON.parse(sessionStorage.getItem("sessionData"));
    var userCompany = userData[userData.length - 1].adminCompany;
    var newCompanyData={
companyName: inputCompany,
simulators: this.simForm.addArray,
clientName: userCompany
    }

    this.formAddService
    .postAddForm(newCompanyData)
    .subscribe(result => {
      alertify.success('Se ha creado la nueva empresa con éxito'); 
      this.returnToDash();
    });   

}


returnToDash() {
  this.close.emit(null);
  
}
}
