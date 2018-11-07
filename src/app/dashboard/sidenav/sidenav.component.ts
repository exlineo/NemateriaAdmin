import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Injectable } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { FileNode } from "../../modeles/fileNode.modele";
import { FileDatabase } from "../../services/fileDatabase.service";
import { Router } from '@angular/router';
import { CollectionNodeModel } from '../../modeles/collectionNode.modele';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [FileDatabase]
})
export class SidenavComponent implements OnInit {
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;

  constructor(database: FileDatabase) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.type;

  private _getChildren = (node: FileNode) => node.children;

  ngOnInit() {
  }

  collections: CollectionNodeModel[] = [
    {
      name: 'traversing',
      updated: new Date('5/11/18'),
      link: '/traversing',
    },
    {
      name: 'medias',
      updated: new Date('5/11/18'),
      link: '/media',
    },
    {
      name: 'connexion',
      updated: new Date('5/11/18'),
      link: '/connexion',
    },
    {
      name: 'error404',
      updated: new Date('5/11/18'),
      link: '/error404',
    }
  ];

}
