import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  selectedYear: number = 0; // Initialize selectedYear property

  @Output() yearSelected = new EventEmitter<number>();

  filterByYear() {
    this.yearSelected.emit(this.selectedYear);
  }
}
