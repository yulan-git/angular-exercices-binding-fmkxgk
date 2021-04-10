import { Component, OnInit, VERSION } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  yourName;
  dataBrute;
  data;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataBrute = this.dataService.getUsersData();
    this.data = this.dataBrute;
  }

  afficherTexteInputRecu(content:string){
    console.log("contenu input : " + content)
    this.data = this.dataBrute.filter(x => x.name.first.toLowerCase().includes( content.toLocaleLowerCase()));
  }
}
