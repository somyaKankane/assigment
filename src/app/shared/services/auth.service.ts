import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public url;  


  constructor(private restangular: Restangular,public http: HttpClient) {
    this.url=environment.apiBaseUrl
   }

 


  register(info: any): Promise<any> {
    return this.restangular.all('register').post(info).toPromise();
  }

 


  user_list(data) {
    return this.http.get(this.url+"search/users?q="+data);
 
  }
  
  profile_details(name){
   
    return this.http.get(this.url+"users/"+name+"/repos");
  }



}
