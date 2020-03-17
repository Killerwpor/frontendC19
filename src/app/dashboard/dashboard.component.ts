import { chartsData } from './../chartsData';
import {
  UserLoginInfo
} from "./../userLoginInfo";
import {
  LoginService
} from "./../login/login.service";
import {
  Router
} from "@angular/router";
import {
  doughnutData
} from "../doughnutData";
import {
  ProgressPanelComponent
} from "./../progress-panel/progress-panel.component";
import {
  ChartPanelComponent
} from "./../chart-panel/chart-panel.component";
import {
  MessagePanelComponent
} from "../message-panel/message-panel.component";

import {
  contact
} from "./../contact";
import {
  simulator
} from "./../simulator";
import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import {
  faUserSlash,
  faUser,
  faBuilding,
  faStarOfLife
} from "@fortawesome/free-solid-svg-icons";
import { SimulatorInfo } from '../simulatorInfo';
declare var $ : any;

//declare const beginBoot : any;

/* 
  Nota: Dashboard es el componente principal de la pagina, contiene la 
  informacion de los simuladores, incluidos los contactos, mensajes sobre
  el simulador, graficas y progreso. Tambien se encuentra la forma para agregar
  usuarios nuevos a un simulador.
*/

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  //Declaracion de los diferentes paneles
  @ViewChild(MessagePanelComponent, {
    static: false
  })
  msgPanel: MessagePanelComponent;
  @ViewChild(ChartPanelComponent, {
    static: false
  })
  chartPanel: ChartPanelComponent;
  @ViewChild(ProgressPanelComponent, {
    static: false
  })
  progresspanel: ProgressPanelComponent;
  @ViewChild(ChartPanelComponent, {
    static: false
  })
  chartspanel: ProgressPanelComponent;
  @ViewChild('collapseSim', {
    static: false
  }) collapseSim: ElementRef;
  @ViewChild('collapseMenu', {
    static: false
  }) collapseMenu: ElementRef;
  @ViewChild('userSidebar', {
    static: false
  }) userSidebar: ElementRef;

  contactsCollapse: boolean = false;
  menuCollapse: boolean = false;
  simCollapse: boolean = false;
  companySelected: string;

  userData: any;
  userId: string;
  dashType = "users";
  // dash: Boolean = true;
  // add: Boolean = false;
  toggle: string = "notSelected"
  showSidebar: Boolean = true;
  screenHeight: any;
  screenWidth: any;


  //El simulador que ha sido seleccionado
  selectedSimulator: simulator;
  //El contacto que ha sido seleccionado
  selectedContact: contact;
  //El filtro aplicado a la lista de contactos
  filteredContact: string;

  //Repuesta de login
  response: any;
  //User company
  userCompany: string;
  //tipo de usuario
  typeUser: string;
  addFormSimulatorList: any[];

  //ANCHOR toggle de tipo de metrica.
  metricTypeToggle: string = "";

  // toggle de sidebar
  sidebarToggle: string;

  // ANCHOR colores para las graficas
  faUserSlash = faUserSlash;
  faUser = faUser;
  faBuilding = faBuilding;
  faStarOfLife = faStarOfLife;
  spectraGreen: string = "#40b987";
  spectraBlue: string = "rgba(0, 229, 255,1.0)";
  spectraRed: string = "rgba(255, 82, 82,1.0)";

  constructor(public router: Router, public logService: LoginService) {}

  ngOnInit() {
    this.userData = JSON.parse(sessionStorage.getItem("sessionData"));
    this.companySelected=JSON.parse(sessionStorage.getItem("companySelected")).name;
    if (this.userData == undefined || this.userData == null) {
      this.router.navigate(["/login"]);
    }
    //Cierra el navbar en caso de iniciarse en una pantalla menor a 1000px
    if (this.screenWidth < 1000) {
      this.onClose();
    } else {
      this.onOpen();
    }

    //Inicia la lista de contactos segun el primer simulador de la lista
    this.prepareJson(this.userData);
    this.selectedSimulator = this.simulatorList[0];

    if (this.selectedSimulator.contacts.length == 0) {
      this.dashType = "noUsers";
    } else {
      this.dashType = "users";
    }
  }

  collapseNavLink(target) {
    switch(target){
      case "simulators": 
this.ngOnInit();
        $('#collapseSim').collapse('toggle');
      break;
      case "menu":
        $('#collapseMenu').collapse('toggle');
      break;
      case "users":
        $('#collapseUsers').collapse('toggle');
      break;
    }
  }

  changeMetricToggle(event) {
    this.chartPanel.changeMetricToggle(event);
  }

  asignNewMetricList(event){
    this.msgPanel.recieveMetricPackage(event);
  }

  asignNoCharts(event){
    this.chartPanel.noCharts();
  }

  /* Automaticamente configurar pagina en caso de cambio de resolucion */
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;

    if (this.screenWidth < 1000) {
      this.onClose();
    } else {
      this.onOpen();
    }
  }

  /* Funciones para cerrar y abrir el componente de lista de contactos y simuladores */
  onOpen() {
    this.showSidebar = this.showSidebar = true;
  }
  onClose() {
    this.showSidebar = this.showSidebar = false;
  }

  // Funcion para abrir la forma de agregar usuario y cerrar el dash o vice-versa
  addUser() {
    this.updateData();
    if (this.toggle == "dash" || this.toggle == "notSelected" || this.toggle == "addCompany" || this.toggle == "edit") {
      this.toggle = "add";
    } else if (this.toggle == "add") {
      if (this.selectedContact) {
        this.toggle = "dash";
      } else {
        this.toggle = "notSelected"
      }
    }
    this.closeUserSidebar();
  }

  editUser(data) {
if(data==null){ 


   
    this.updateData();
    if (this.toggle == "dash" || this.toggle == "notSelected" || this.toggle == "addCompany" || this.toggle == "add" ) {
      this.toggle = "edit";
    } else if (this.toggle == "edit") {
      if (this.selectedContact) {
        this.toggle = "dash";
      } else {
        this.toggle = "notSelected"
      }
    }   
    this.closeUserSidebar();
  }
  else{ //si ya se edito el usuario cierra la pestaña
    this.toggle = "notSelected"   
    this.closeUserSidebar();
    this.ngOnInit();
  }
  }


  addCompany() {
    //aqui actualizar la lista de simuladores
    var company = this.userData[this.userData.length - 1].adminCompany;


    var simulatorInfo: SimulatorInfo = {
    name: company
    };

    var simulatorListAux=[{
      name: "RCP"
    }]


    this.logService.postLogin3(simulatorInfo).subscribe(result => {
      this.simulatorListTotal=result;
    });

    
    this.updateData();
    if (this.toggle == "dash" || this.toggle == "notSelected" || this.toggle == "add") {
      this.toggle = "addCompany";
    } else if (this.toggle == "addCompany") {
      if (this.selectedContact) {
        this.toggle = "dash";
      } else {
        this.toggle = "notSelected"
      }
    }
    this.closeUserSidebar();
  }

  updateData() {
    var logInfo: UserLoginInfo = {
      email: sessionStorage.getItem("userEmail"),
      password: sessionStorage.getItem("userPass"),
      companyName: ""
    };

    this.logService.postLogin(logInfo).subscribe(result => {
      this.response = result;
      if (this.response.result == "User not found") {} else {
        sessionStorage.removeItem("sessionData");
        sessionStorage.setItem("sessionData", JSON.stringify(this.response));
        this.router.navigate(["/dash"]);
      }
    });
  }

  //ANCHOR cambio de simulador
  //Cambiar el simulador mostrado en el dashboard
  changeSimulator(newSim) {
    if (newSim.contacts.length == 0) {
      this.dashType = "noUsers";
    } else {
      this.dashType = "users";
    }
    //Determinar nuevo simulador
    this.selectedSimulator = newSim;
    //Cambiar el contacto en la
    this.toggle = "notSelected";
    this.openUserSidebar('local');
  }

  changeSimulatorByIndex(index){
    this.selectedSimulator = this.simulatorList[index];
  }

  //Cambiar el contacto para el componente de contact panel
  changeContact(newCon) {
    if (this.toggle != "dash") {
      this.toggle = "dash";
    }
    this.selectedContact = newCon;
    this.closeUserSidebar();
  }

  openUserSidebar(event) {
    this.sidebarToggle = event;
    this.userSidebar.nativeElement.classList.remove('d-none');
    this.userSidebar.nativeElement.classList.add("slide-in-left");
    this.userSidebar.nativeElement.classList.remove("slide-in-right");
    this.toggle = 'notSelected';  
  }

  closeUserSidebar() {
    this.userSidebar.nativeElement.classList.remove("slide-in-left");
    this.userSidebar.nativeElement.classList.add("slide-in-right");
    setTimeout(() => {},
      500);
    this.userSidebar.nativeElement.classList.add('d-none');
  }

  //Filtrar la lista de contactos por el nombre que se busque
  filterContact(filtered) {
    this.filteredContact = filtered;
  }

  sendInfoToCharts(info){
    this.chartPanel.loadChart(info.arr, info.num);
  }

  sendDateToCharts(date){
    
    this.chartPanel.onValueChange(date);
  }

  //SECTION Preparar Json
  prepareJson(data: any) {
    //Simuladores del usuario
    this.simulatorList=[];
    for (var _i = 0; _i < data.length - 2; _i++) {
      var sim = data[_i];
      let newSim: simulator = {
        name: sim.name,
        icon: sim.icon,
        //progress: [],
        contacts: [],
        supervisors: []
      };

      let addFormSim: any = {
        name: newSim.name,
        icon: newSim.name
      };

      //NOTE contacts
      for (let con of sim.usuarios) {
        var strPhoto = con.profilePicURL;

        let newCon: contact = {
          name: con.name,
          documentType: con.documentType,
          documentNumber: con.documentNumber,
          id: con._id,
          mail: con.email,
          photoUrl: strPhoto,
          phone: con.phone,
          company: con.company,
          job: con.job,
          type: con.type
        };
        if (con.type == "student") {
          newSim.contacts.push(newCon);
        }
        if (con.type == "supervisor") {
          newSim.supervisors.push(newCon);
        }
      }
      this.simulatorList.push(newSim);
    }
    //Tipo de usuario.
    this.typeUser = data[data.length - 2].typeOfUser;
    //Nombre de la compania
    this.userCompany = data[data.length - 1].adminCompany; //Aqui se debe recibir la compañia que seleccione el usuario
  }

  simulatorList: simulator[] = [];
 simulatorListTotal: Object[];
}
