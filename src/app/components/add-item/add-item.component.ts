import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Service/http.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  
  formValue!: FormGroup
  constructor( private http : HttpService,
    private route : Router) { }
  ngOnInit(): void {
    this.formValue = new FormGroup({
      item_name: new FormControl(''),
      company: new FormControl(''),
      price: new FormControl('')
      
    })
  }
  submitData(){
    alert("Submitted Successfully")
    console.log("Forms Data:",this.formValue.value);
    this.http.postItem(this.formValue.value).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/view']);
    })

    
  }

}
