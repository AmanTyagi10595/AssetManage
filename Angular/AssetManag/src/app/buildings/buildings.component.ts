import { Component, OnInit } from '@angular/core';
import{AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  constructor(private service : AuthServiceService) { }

  ngOnInit() {
    this.service.getBuildings
  }

}
