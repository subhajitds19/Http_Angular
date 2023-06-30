import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Service/http.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private httpser : HttpService) { }
  alldata : any = [];

  ngOnInit(): void {
    this.httpser.getItems().subscribe(res=>{
      console.log("All data", res);
      this.alldata = res;
      
    })
  }
  deleteData(id : number){
    console.log(id);
    this.httpser.deleteHandle(id).subscribe((res)=>{
      console.log(res);
      alert("Deleted");
      this.httpser.getItems().subscribe((res)=>{
        
        this.alldata = res;
      })

      
    })
    
  }

}
