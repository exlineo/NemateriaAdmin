import { Component, OnInit } from '@angular/core';
import {  DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profil;

  constructor(public sain:DomSanitizer) { }

  ngOnInit() {
    this.profil = {nom:'Lambda', img:'assets/img/profile.jpg'};
  }

}
