import {Component, Input, OnInit} from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt,  faCheckSquare, faClipboardList,  faCoffee, faComments, faFingerprint, faHandMiddleFinger,
  faHeadset, faHistory,  faInfo, faListAlt,  faLocationArrow,  faMapMarkerAlt, faPhoneAlt, faQuestionCircle, faSearch,
  faSquare,  faTruckLoading, faUserCircle, faSignOutAlt,faCrown
} from '@fortawesome/free-solid-svg-icons';
import { LINKS } from '../client-panel.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {faGithub, faMedium} from "@fortawesome/free-brands-svg-icons";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";



@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ClientProfileComponent implements OnInit {
  titel = 'Profil Klienta';
  accountIcon:string="assets/image/account-icon.png";
  selectedFile: File = null;
  links=LINKS;

  constructor(private library: FaIconLibrary,
              private http: HttpClient,
              config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;

    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory,faSignOutAlt,faCrown);
  }


  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content);
  }

  accLink:string ='assets/image/account-icon.png';
  selectFiles(event) {

    var reader = new FileReader() ;
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.accLink = event.target.result;
      }
    }

  // onFileSelected(event){
  // this.selectedFile = <File>event.target.files[0];
  // }

  // onUpload(){
  //     const fd = new FormData();
  //     fd.append('image', this.selectedFile, this.selectedFile.name);
  // }

}
