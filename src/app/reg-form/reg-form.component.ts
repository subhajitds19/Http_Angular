import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  genderArr:string[] = ['Male', 'Female', 'Others', 'No answer'];
  hobbyArr:string[]=['read', 'paint', 'sing', 'dance', 'game'];
  selectedHobby : string[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  submitdata(data : NgForm){
    console.log("data=",data.value);
    
  }
  changeSelect(e:any){
    console.log(e.target.value);
    
    if(this.selectedHobby.length>0){
      let hobbyIndex = this.selectedHobby.findIndex((x)=>x===e.target.value);
      if(hobbyIndex != -1){
        this.selectedHobby.splice(hobbyIndex, 1)
      }else{
        this.selectedHobby.push(e.target.value)
      }
    }
    else{
      this.selectedHobby.push(e.target.value);
    }
    console.log(this.selectedHobby);
    
  }

}
