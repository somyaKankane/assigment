import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services';
import { ToastyService } from 'ng2-toasty';
import { TranslateService } from '@ngx-translate/core';
// import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as _ from 'lodash';
import { UtilService } from '../../shared/services';

@Component({
  templateUrl: 'signup.component.html'
})
export class SignupComponent {
  q;
  option='1';
  data_recived:any;
  total_count;
  
  p: number = 1;
  serching=0;
  selected_profile_data;
  current: number;
  showMesage=0;
 
  x: number = 1;
  public isLoading = false;
  constructor(private auth: AuthService, public router: Router, private toasty: ToastyService, private translate: TranslateService,private utilService: UtilService) {
   
    
  }



  ngOnInit() {
    
  
    
  }
  



  keyPress(event: any) {
    if (event.charCode === 13) {
      // this.search();
      //  this.serching
      this.current = -1;
     console.log(this.q);
      this.utilService.setLoading(true);
    this.isLoading = true;

    this.auth.user_list(this.q).subscribe(resp => {
     console.log(resp)
    
        this.total_count=resp["items"].length;
        this.data_recived=resp["items"];
        this.serching=1;
        this.utilService.setLoading(false);
        this.isLoading = false;

      
      })
      
    }
  }

  


  profile_data(id,name){
    if(this.current  != id){
     

      this.utilService.setLoading(true);
      this.isLoading = true;

      this.auth.profile_details(name).subscribe(Response => {
      console.log(Response);
      this.selected_profile_data=Response;
      if(this.selected_profile_data.length == 0){
        this.showMesage=1;
      }
      else{
        this.showMesage=0;
      }
      this.utilService.setLoading(false);
      this.isLoading = false;
       this.current = id;
      });
    }
    else{
      this.current = -1;

    }

  }

  changePage(){
    this.current = -1;
    window.scroll(0,0);
  }
  onChange(newValue) {
    console.log(newValue);
  

    let temp_data;
    temp_data= this.data_recived;

    if(newValue == 1){
      temp_data.sort((a, b) => a.login.localeCompare(b.login));  
      this.data_recived=temp_data;
    }
    else  if(newValue == 2){
      temp_data.sort((a, b) => b.login.localeCompare(a.login));  
      this.data_recived=temp_data;
    }
    
}
}
