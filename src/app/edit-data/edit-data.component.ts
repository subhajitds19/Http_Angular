import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../Service/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  constructor(private http : HttpService,
    private aroute:ActivatedRoute,
    private route : Router) { }
  editValue!: FormGroup;
  pid !: number;
  pdetails : any ;
  editdetails : any

  ngOnInit(): void {
    this.editValue = new FormGroup({
      item_name: new FormControl(''),
      company: new FormControl(''),
      price: new FormControl('')

    })
    this.aroute.paramMap.subscribe((param:any)=>{
       this.pid = param.get('id');
       console.log(this.pid);
       this.http.getSingleData(this.pid).subscribe((res: any)=>{
        this.pdetails = res;
        console.log('details', this.pdetails);
        this.editValue =new FormGroup({
          item_name : new FormControl(this.pdetails.item_name),
          company : new FormControl(this.pdetails.company),
          price : new FormControl(this.pdetails.price)
        })
        

       })
       
    })
  }
  submitData(){
    console.log('value=', this.editValue.value);
    
    this.http.editData(this.pid,this.editValue.value).subscribe((res:any)=>{
      console.log('res', res);
      if(res){
      this.route.navigate(['/view']);
      }
      


    })
  }

}
