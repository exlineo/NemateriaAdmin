import { Component, OnInit } from '@angular/core';

import { NoticeService } from "../systeme/services/notice.service";
import { NoticeModel } from "../systeme/modeles/notice.modele";
import { FiltrePipe } from "../systeme/pipes/filtre.pipe";
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';
//import { toggleLeft } from '../systeme/library/animation';

@Component({
	selector: 'app-notice',
	templateUrl: './notice.component.html',
	styleUrls: ['./notice.component.css'],
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
export class NoticeComponent implements OnInit {

	noticeListe: NoticeModel[] = [];
	noticeSelection: NoticeModel[] = [];
	noticeElement: NoticeModel;
	noticeAffiche: boolean = false;
	noticeFiltre: string = '';

	menuIsOpen = true;
	rightPanelIsOpen = true;

	constructor(public noticeService: NoticeService) { }

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
