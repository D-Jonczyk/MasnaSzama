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
import {AngularFireStorage} from '@angular/fire/storage'


@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ClientProfileComponent implements OnInit {
  titel = 'Profil Klienta';
  accLink:string ='assets/image/account-icon.png';
  accPomLink:string='assets/image/account-icon.png';
  selectFile: File = null;
  links=LINKS;
  filePath:String

  constructor(private library: FaIconLibrary,
              private afStorage: AngularFireStorage,
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

  upload(event) {
    this.filePath = event.target.files[0]
  }
  openImage(event){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) =>{
          this.accPomLink = event.target.result;
      }
    }
  }
  uploadImage(){
    console.log(this.filePath)
    this.accPomLink = '/accLink' + new Date().getTime() + Math.random();
    this.afStorage.upload('/accImg' + this.accPomLink, this.filePath)
    this.accLink = this.accPomLink;

  }

  accLinkChange(){
    this.accPomLink='assets/image/account-icon.png'
  }

  open(content) {
    this.modalService.open(content);
  }




}
