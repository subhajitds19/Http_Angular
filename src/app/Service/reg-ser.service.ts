import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegData } from '../Classes/reg-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class RegSerService {
reg_api : string = "https://wtsacademy.dedicateddevelopers.us/api/user/signup" ;
login_api : string = "https://wtsacademy.dedicateddevelopers.us/api/user/signin";
profile_api ='https://wtsacademy.dedicateddevelopers.us/api/user/profile-details';

  constructor( private http : HttpClient,
    private auth : StorageService) { }
    addUser(formvalues:any):Observable<RegData[]>{
        return this.http.post<RegData[]>(this.reg_api,formvalues);
    }
    loginUser(formvalues:any){
      return this.http.post<RegData[]>(this.login_api, formvalues)
    }

    user_Profile():Observable<RegData[]>{
      return this.http.get<RegData[]>(this.profile_api, {
        headers:new HttpHeaders({'x-access-token': `${this.auth.getToken()}`
            
       })
    });

}
}
