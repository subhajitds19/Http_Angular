import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setdata(fname:string, lname:string, mail:string, token:string){
    window.localStorage.setItem('f_name', fname);
    window.localStorage.setItem('l_name', lname);
    window.localStorage.setItem('email', mail);
    window.localStorage.setItem('token', token);
    
  }

 // fetch from localstorage

  getdata(){
    const savedata=[];
    let data = {
      first_name:window.localStorage.getItem('f_name'),
      last_name:window.localStorage.getItem('l_name'),
      email:window.localStorage.getItem('email')
    }
    savedata.push(data);
    return savedata;
  }

  getToken(){
    return window.sessionStorage.getItem('token');
  }
  constructor() { }
}
