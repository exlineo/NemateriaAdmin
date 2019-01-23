import { Component, OnInit } from '@angular/core';
import { useAnimation, transition, trigger, style, animate, state } from '@angular/animations';

@Component({
	selector: 'app-filtres',
	templateUrl: './filtres.component.html',
	styleUrls: ['./filtres.component.css'],
	animations: [
		trigger('openCloseLeftPanel', [
			state('open', style({
				width: '200px'
			})),
			state('closed', style({
				width: '0'
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
				width: '564px'
			})),
			state('closed', style({
				width: '0'
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
export class FiltresComponent implements OnInit {

	leftPanelIsOpen = true;
	rightPanelIsOpen = true;

	constructor() { }

	ngOnInit() {
	}


	toggleLeftPanel($event): void {
		$event.preventDefault();
		this.leftPanelIsOpen = !this.leftPanelIsOpen;
	}

	toggleRightPanel($event): void {
		$event.preventDefault();
		this.rightPanelIsOpen = !this.rightPanelIsOpen;
	}

}
