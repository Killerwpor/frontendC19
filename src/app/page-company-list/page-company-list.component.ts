import { CompanyPageService } from './page-company-list.service';
import { Component, OnInit } from '@angular/core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { CompanyPageInfo } from './page-company-list-info';
import { Router, NavigationExtras } from '@angular/router';
import { LoginService } from '.././login/login.service';


@Component({
  selector: 'app-page-company-list',
  templateUrl: './page-company-list.component.html',
  styleUrls: ['./page-company-list.component.css']
})
export class PageCompanyListComponent implements OnInit {

  dot = faCircle;
  data = new CompanyPageInfo();
  lista=new Array();
  response: any;
  userCompany: string;

  company: string;
  constructor(public logService: LoginService, public companyListService: CompanyPageService, private router: Router) {
 
    const navigation = this.router.getCurrentNavigation();
  const state = navigation.extras.state as {
    data: string
  };
  //this.company=state.data;
   }

  ngOnInit() {
    
    //NOTE Conseguir cual es la empresa del usuario
    // this.data.name = sessionStorage.getItem()
    var userData = JSON.parse(sessionStorage.getItem("sessionData"));
   this.userCompany = userData.company;
    this.data.name=this.userCompany;
    

    this.companyListService.postCompany(this.data).subscribe(
      result =>{
        this.response = result.enterprises;
        if(this.response.result == "Client not found"){
        }
        else{
          this.response.map(item=>{
            this.lista.push(item.name);
          })
        }
      }, error => console.log(error) //Si el servidor no responde, entra por aqui.    

    );

 

  }

  companySelected(data){
    var userData = JSON.parse(sessionStorage.getItem("sessionData"));
    if(sessionStorage.getItem("credentials")==null){

    var companySelected={
      name: data
    }

    sessionStorage.setItem("companySelected",JSON.stringify(companySelected));

    var dataAux={
      email: userData.email,
      password: userData.password,
      companyName: data
    }
  }
  else{
    var credentials=JSON.parse(sessionStorage.getItem("credentials"));

    var companySelected={
      name: data
    }

    sessionStorage.setItem("companySelected",JSON.stringify(companySelected));

    var dataAux={
      email: credentials.email,
      password: credentials.password,
      companyName: data
    }

  }
    
  
 


  
    this.logService.postLogin2(dataAux).subscribe(
      result =>{

      sessionStorage.setItem('sessionData',JSON.stringify(result));
      this.router.navigate(['/dash']);
        
      }, error => console.log(error) //Si el servidor no responde, entra por aqui.
    

    );

   
  }

  GetCompanies(){
    //NOTE hacer la consulta por los elementos. 
    // this.companyListService.postCompany()
  }

}
