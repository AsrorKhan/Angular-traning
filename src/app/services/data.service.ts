import {Injectable} from "@angular/core";
import {LogService} from "./log.service";
import {IUserInterface} from "../interfaces/interfaces";

@Injectable()
export class DataService {

  constructor(logService: LogService) {
  }

  public userData = [
    { name: "Alex", age: "22", job: "Developer"},
    { name: "Kate", age: "24", job: "Manager"},
    { name: "Diana", age: "27", job: "Software Engineer"},
    { name: "Emma", age: "28", job: "UI designer"}
  ];


  addData(data: IUserInterface) {
    this.userData.push(data)
  }


  getData(): any {
    return this.userData
  }


}
