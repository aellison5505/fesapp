import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './new-user.component.html'
//  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  private PassNot:boolean;
  private PassWk:boolean;
  private EmailCk:boolean;

  user:string;
  passwd:string;
  passwd1:string;

  constructor() {
    this.PassNot = true;
    this.PassWk = true;
    this.EmailCk = true;
  }

  ngOnInit() {
    this.PassNot = true;
    this.PassWk = true;
    this.EmailCk = true;
  }

  public submit(){

  }

  get getPassNot(){
    return this.PassNot;
  }

  get getPassWk(){
    return this.PassWk;
  }

  get getEmailCk(){
    return this.EmailCk;
  }

  public onKeyUp(){
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var emailRegEx = new RegExp("(?=.*[@])(?=.*[.])");

    if(this.passwd===this.passwd1){
      this.PassNot=false;
    }else{
      this.PassNot=true;
    }
    if(strongRegex.test(this.passwd)){
      this.PassWk=false;
    }else{
      this.PassWk=true;
    }
    if(emailRegEx.test(this.user)){
      this.EmailCk=false;
    }else{
      this.EmailCk=true;
    }

  }

}
