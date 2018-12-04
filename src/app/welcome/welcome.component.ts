import { Component, OnInit } from '@angular/core';
import { LogonService } from '../logon.service'
import {Router} from '@angular/router';

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  constructor(private logon: LogonService, private router: Router) { }

  ngOnInit() {
    if(!this.logon.getLoged){
      this.router.navigateByUrl('/login');
    }
  }

}
