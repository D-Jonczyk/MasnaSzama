import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
import {CourierProfile} from "../../courier-panel/profile/courier-profile";
import {CourierProfileService} from "../../courier-panel/profile/courier-profile.service";

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
  links=LINKS;
  filePath:String
  public selectedFile: FileList;
  public clientProfile = new ClientProfile();
  public editProfile = new ClientProfile();
  public clientId = 301;

  constructor(private library: FaIconLibrary,
              private afStorage: AngularFireStorage,
              private clientProfileService: ClientProfileService,
              private http: HttpClient,
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
    this.accPomLink = '/accLink' + new Date().getTime() + Math.random();
    console.log(this.filePath);
    var filePath = '/accImg' + this.accPomLink;
    const fileRef = this.afStorage.ref(filePath);
    this.afStorage.upload(filePath, this.filePath).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((url) => {
          this.accLink = url;
        })
      })
    ).subscribe();
  }

  accLinkChange(){
    this.accPomLink=this.clientProfile.password;
  }

  open(content) {
    this.modalService.open(content);
  }

  // public onEditProfile(courier: CourierProfile): void {
  //   this.clientProfileService.editCourierProfile(courier).subscribe(
  //     (response: CourierProfile) => {
  //       console.log(response);
  //       this.getClientProfile();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       this.getClientProfile();
  //     }
  //   );
  // }

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
