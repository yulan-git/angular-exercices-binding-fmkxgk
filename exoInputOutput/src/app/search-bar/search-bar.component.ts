import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.scss"]
})
export class SearchBarComponent implements OnInit {
@Output() eventRecupTexteInput = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  afficherTexteInput(monEvent:any) {
    console.log(monEvent.target.value);
    const inputContent = monEvent.target.value;
    this.eventRecupTexteInput.emit(inputContent)
  }
}
