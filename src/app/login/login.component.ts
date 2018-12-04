import { Component, OnInit } from '@angular/core';
import {LogonService} from '../logon.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  passwd: string;
  err:string;
  err_vis = false;

  constructor(private logon: LogonService, private router: Router) {

  }

  ngOnInit() {


  }

  async submit() {
      try{
      this.err_vis = false;
      this.err = '';
     if(await this.logon.get(this.user, this.passwd)){
       console.log('true')
       this.router.navigateByUrl('/welcome');
     }
   }catch(e){
     console.log(e)
     this.err_vis=true;
     this.err = e;
   }
  }

  get getErrVis(){
    return this.err_vis;
  }

}
