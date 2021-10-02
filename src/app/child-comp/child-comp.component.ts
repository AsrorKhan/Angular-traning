import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {LogService} from "../services/log.service";

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent implements OnInit {



  constructor(data: DataService, logData: LogService) { }

  ngOnInit(): void {
  }






}
