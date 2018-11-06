import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { Injectable } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';
import { FileNode } from "../modeles/fileNode.modele";
import { FileDatabase } from "../services/fileDatabase.service";

@Component({
  selector: 'app-traversing',
  templateUrl: './traversing.component.html',
  styleUrls: ['./traversing.component.css'],
  providers: [FileDatabase]
})

export class TraversingComponent implements OnInit {
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

}
