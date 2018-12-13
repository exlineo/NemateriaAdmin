import { Component, OnInit } from '@angular/core';

import { NoticeService } from "../systeme/services/notice.service";
import { NoticeModel } from "../systeme/modeles/notice.modele";
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';

import { NestedTreeControl } from '@angular/cdk/tree';
import { Injectable } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { BehaviorSubject } from 'rxjs';

/**
 * Json node data with nested structure. Each node has a filename and a value or a list of children
 */
export class FileNode {
	children: FileNode[];
	filename: string;
	type: any;
}

/**
 * The Json tree data in string. The data could be parsed into Json object
 */
const TREE_DATA = JSON.stringify({
	Applications: {
		Calendar: 'app',
		Chrome: 'app',
		Webstorm: 'app'
	},
	Documents: {
		angular: {
			src: {
				compiler: 'ts',
				core: 'ts'
			}
		},
		material2: {
			src: {
				button: 'ts',
				checkbox: 'ts',
				input: 'ts'
			}
		}
	},
	Downloads: {
		October: 'pdf',
		November: 'pdf',
		Tutorial: 'html'
	},
	Pictures: {
		'Photo Booth Library': {
			Contents: 'dir',
			Pictures: 'dir'
		},
		Sun: 'png',
		Woods: 'jpg'
	}
});

/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class FileDatabase {
	dataChange = new BehaviorSubject<FileNode[]>([]);

	get data(): FileNode[] { return this.dataChange.value; }

	constructor() {
		this.initialize();
	}

	initialize() {
		// Parse the string to json object.
		const dataObject = JSON.parse(TREE_DATA);

		// Build the tree nodes from Json object. The result is a list of `FileNode` with nested
		//     file node as children.
		const data = this.buildFileTree(dataObject, 0);

		// Notify the change.
		this.dataChange.next(data);
	}

	/**
	 * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
	 * The return value is the list of `FileNode`.
	 */
	buildFileTree(obj: { [key: string]: any }, level: number): FileNode[] {
		return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
			const value = obj[key];
			const node = new FileNode();
			node.filename = key;

			if (value != null) {
				if (typeof value === 'object') {
					node.children = this.buildFileTree(value, level + 1);
				} else {
					node.type = value;
				}
			}

			return accumulator.concat(node);
		}, []);
	}
}

@Component({
	selector: 'app-scanner',
	templateUrl: './scanner.component.html',
	styleUrls: ['./scanner.component.css'],
	providers: [FileDatabase],
	animations: [
		trigger('openCloseMenu', [
			state('open', style({
				left: '64px'
			})),
			state('closed', style({
				left: '-136px'
			})),
			transition('open => closed', [
				animate('0.5s')
			]),
			transition('closed => open', [
				animate('0.5s')
			]),
		]),
		trigger('openCloseRightPanel', [
			state('open', style({
				right: '0'
			})),
			state('closed', style({
				right: '-264px'
			})),
			transition('open => closed', [
				animate('0.5s')
			]),
			transition('closed => open', [
				animate('0.5s')
			]),
		]),
	],
})
export class ScannerComponent implements OnInit {

	noticeListe: NoticeModel[] = [];
	noticeSelection: NoticeModel[] = [];
	noticeElement: NoticeModel;
	noticeAffiche: boolean = false;
	noticeFiltre: string = '';

	menuIsOpen = true;
	rightPanelIsOpen = true;

	nestedTreeControl: NestedTreeControl<FileNode>;
	nestedDataSource: MatTreeNestedDataSource<FileNode>;

	constructor(public noticeService: NoticeService, private database: FileDatabase) { 
		this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
		this.nestedDataSource = new MatTreeNestedDataSource();

		this.database.dataChange.subscribe(data => this.nestedDataSource.data = data);
	}

	hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.type;

	private _getChildren = (node: FileNode) => node.children;

	ngOnInit() {
		this.noticeService.readNotices().subscribe(
			data => {
				this.noticeListe = data;
			}
		);
	}

	noticeOnClick($event, idNotice): void {
		$event.preventDefault();
		this.noticeElement = this.noticeListe[idNotice];
		if (this.noticeSelection.indexOf(this.noticeElement) == -1) {
			this.noticeSelection.push(this.noticeElement);
		}
		this.noticeAffiche = true;
	}

	noticeSelectionDump(): void {
		this.noticeAffiche = false;
		this.noticeSelection = [];
	}

	noticeSelectionRemove(idNotice): void {
		for (let index = 0; index < this.noticeSelection.length; index++) {
			let element = this.noticeSelection[index];
			if (element._id == idNotice) {
				this.noticeSelection.splice(index, 1);
			}
		}
	}

	toggleMenu($event): void {
		$event.preventDefault();
		this.menuIsOpen = !this.menuIsOpen;
	}

	toggleRightPanel($event): void {
		$event.preventDefault();
		this.rightPanelIsOpen = !this.rightPanelIsOpen;
	}

}
