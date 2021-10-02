import {Component, OnInit} from '@angular/core';
import {DataService} from "./services/data.service";
import {LogService} from "./services/log.service";
import {IUserInterface} from "./interfaces/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-traning';
  items: string[] = []
  allItems: any;
  name: string = "";
  age: string = "";
  job: string = ""



  constructor(private data: DataService, private logService: LogService) {}



  addItem() {
    if (this.name!=="" && this.age!=="" && this.job!==""){
      this.data.userData.push({name: this.name, age: this.age, job: this.job })
      this.allItems = Object.entries(this.items)
      this.name = "";
      this.age = "";
      this.job = "";
    }
    else alert("Пополните все данные")

  }

  ngOnInit(): void {
    this.items = this.data.getData()
    this.allItems = Object.entries(this.items)
    console.log(this.items)

  }

}
