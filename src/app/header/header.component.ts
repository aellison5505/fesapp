import { Component, OnInit } from '@angular/core';
import { LogonService } from '../logon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  vis: boolean;

  constructor(private logon: LogonService) {
    this.vis = false;

  }

  show() {
    this.vis = true;
  }

  hide() {
    this.vis = false;
  }

  ngOnInit() {

  }

}
