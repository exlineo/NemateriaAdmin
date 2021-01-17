import { Component } from '@angular/core';
import { ParamsService } from './extranet/systeme/services/params.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nemateria';

  constructor(private paramsServ:ParamsService){
    this.paramsServ.setEnv();
  }

}
