import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageModel } from '../../modeles/page.modele';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  
  pages: PageModel[] = [
    {
      name: 'traversing',
      updated: new Date('5/11/18'),
      link: '',
    },
    {
      name: 'medias',
      updated: new Date('5/11/18'),
      link: '/media',
    }
  ];

}
