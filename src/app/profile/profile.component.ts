import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Service/storage.service';
import { RegSerService } from '../Service/reg-ser.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails : any = {};
  img_path : any = "";
  baseURL :string = "https://wtsacademy.dedicateddevelopers.us/";
  folderPath:string ="uploads/user/profile_pic/";

  constructor(private storeSer:StorageService,
    private regService:RegSerService) { }

  ngOnInit(): void {
    this.regService.user_Profile().subscribe((res:any)=>{
      console.log(res);
      
         this.userDetails = res.data;
         console.log('userDetails=', this.userDetails);
         if(this.userDetails.profile_pic=="undefiened" || this.userDetails.profile_pic=="")
         {
          this.img_path = "assets/Images/no-user-image.jpg"
         }
         else
         {
          this.img_path = this.baseURL+this.folderPath+this.userDetails.profile_pic;
         }
         
    })
  }
  loggingOut(){
    
  }

}
