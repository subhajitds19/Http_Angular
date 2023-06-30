import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegSerService } from '../Service/reg-ser.service';

@Component({
  selector: 'app-reg-form2',
  templateUrl: './reg-form2.component.html',
  styleUrls: ['./reg-form2.component.css']
})
export class RegForm2Component implements OnInit {
  formValue!: FormGroup;
  selectedImg !: File
  formvalues !: any

  constructor( private userser : RegSerService) { }

  ngOnInit(): void {
    this.formValue = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      password : new FormControl('')
     
      
    })
  }
  onFileSelection(event : any){
    this.selectedImg = event.target.files[0];
    console.log("Selected Img", this.selectedImg);
    
    

  }


  submitData(){
    console.log(this.formValue.value);
    this.formvalues= this.formValue.value;
    const formdata =new FormData();
    formdata.append('first_name', this.formvalues.first_name);
    formdata.append('last_name', this.formvalues.last_name);
    formdata.append('email', this.formvalues.email);
    formdata.append('password', this.formvalues.password);
    formdata.append('profile_pic', this.selectedImg, this.selectedImg.name);

    this.userser.addUser(formdata).subscribe((res:any)=>{
      console.log("Response after posting", res);
      if(res.status==200){
        alert("registration done")
      }
      else{
        alert("Reg error try again");
      }
      
    })
    
  }
  
}
