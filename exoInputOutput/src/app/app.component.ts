import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  yourName;

  constructor() {}

  ngOnInit() {}
}
