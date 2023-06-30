import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegSerService } from '../Service/reg-ser.service';
import { StorageService } from '../Service/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form2',
  templateUrl: './login-form2.component.html',
  styleUrls: ['./login-form2.component.css']
})
export class LoginForm2Component implements OnInit {
  formValue!: FormGroup;
  

  constructor(private httpser:RegSerService,
    private storeservice : StorageService,
    private router:Router) { }

  ngOnInit(): void {
    this.formValue = new FormGroup({
      
      email: new FormControl(''),
      password : new FormControl('')
     
      
    })
  }
  submitData(){
    console.log(this.formValue.value);
    this.httpser.loginUser(this.formValue.value).subscribe((res:any)=>{
      console.log(res);
      let userResponse = res;

      if(res.status === 200){
        alert(userResponse.message);
        this.storeservice.setdata(userResponse.data.first_name,
                                   userResponse.data.last_name ,
                                   userResponse.data.email,
                                   userResponse.token

         )
         this.router.navigate(['/profile']);


      }
      else{
        alert(userResponse.message);
        this.formValue.reset();
      }
      

    })
    
  }

}
