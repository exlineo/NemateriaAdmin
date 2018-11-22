import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../systeme/services/auth.service";

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css'],
  providers: [AuthService]
})
export class InterfaceComponent implements OnInit {

	constructor(private authService: AuthService) { }

	ngOnInit() {
		console.log(this.authService.auth);
	}

}
