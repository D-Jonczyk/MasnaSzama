import {Component, Input, OnInit} from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faCheckCircle, faClock, faPlayCircle} from '@fortawesome/free-regular-svg-icons';
import {
  faCalendarAlt,  faCheckSquare, faClipboardList,  faCoffee, faComments, faFingerprint, faHandMiddleFinger,
  faHeadset, faHistory,  faInfo, faListAlt,  faLocationArrow,  faMapMarkerAlt, faPhoneAlt, faQuestionCircle, faSearch,
  faSquare,  faTruckLoading, faUserCircle, faSignOutAlt,faCrown
} from '@fortawesome/free-solid-svg-icons';
import { LINKS } from '../client-panel.component';
import {HttpClient, HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {faGithub, faMedium} from "@fortawesome/free-brands-svg-icons";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {AngularFireStorage} from '@angular/fire/storage'
import {finalize, ignoreElements} from "rxjs/operators";
import 'firebase/storage';
import {ClientProfileService} from "./client-profile-service";
import {ClientProfile} from "./client-profile";
import {ClientPanelService} from "../client-panel-service";

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ClientProfileComponent implements OnInit {
  titel = 'Profil Klienta';
  public accountIcon = this.clientPanelService.accLink;
  public clientName = this.clientPanelService.clientName;
  public clientSurname = this.clientPanelService.clientSurname;
  accPomLink:string='assets/image/account-icon.png';
  links=LINKS;
  filePath:String
  public selectedFile: FileList;
  public clientProfile = new ClientProfile();
  public clientId = 301;
  public editProfile = new ClientProfile();
  public guard = 0;
  constructor(private library: FaIconLibrary,
              private afStorage: AngularFireStorage,
              private clientProfileService: ClientProfileService,
              private http: HttpClient,
              private clientPanelService: ClientPanelService,
              config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;

    library.addIcons(faSquare, faCheckSquare, faMedium, faGithub, faClock, faMapMarkerAlt, faLocationArrow, faInfo, faTruckLoading,
      faClipboardList, faHeadset, faPhoneAlt, faCheckCircle, faPlayCircle, faListAlt, faLocationArrow,
      faCalendarAlt, faUserCircle, faQuestionCircle, faComments, faHistory,faSignOutAlt,faCrown);
  }


  ngOnInit(): void {
    this.getClientProfile();
  }

  upload(event) {
    this.filePath = event.target.files[0];
    this.guard = 1;
  }
  openImage(event){
    if(event.target.files && this.guard == 1){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) =>{
          this.accPomLink = event.target.result;
      }
    }
  }

  uploadImage(){
    if(this.guard == 1) {
    this.accPomLink = '/accLink' + new Date().getTime() + Math.random();
    console.log(this.filePath);
    var filePath = '/accImg' + this.accPomLink;
    const fileRef = this.afStorage.ref(filePath);
    this.afStorage.upload(filePath, this.filePath).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((url) => {

            this.accountIcon = url;
            this.accPomLink=url;




        })
      })
    ).subscribe();
   }
  }
  accLinkChange(){
    this.accountIcon = this.clientPanelService.accLink;
  }

  open(content) {
    this.modalService.open(content);
  }

  public onEditProfile(client: ClientProfile): void {
    this.clientProfileService.editClientProfile(client).subscribe(
      (response: ClientProfile) => {
        console.log(response);
        this.getClientProfile();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.getClientProfile();
      }
    );
  }

  public loadImageData(client: ClientProfile): void {
    this.clientProfileService.loadImageProfile(client).subscribe(
      (response: ClientProfile) => {
        console.log(response);
        this.getClientProfile();
        this.clientProfile.imgUrl=this.accountIcon;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.getClientProfile();
      }
    );
  }

  getClientProfile(): void {
    this.clientProfileService.getClientProfile(this.clientId).subscribe(
      (response: ClientProfile) => {
        this.clientProfile = response;
        this.editProfile = this.clientProfile;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



}
