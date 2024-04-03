import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpaceXService } from '../services/spacex.service';
import { Launch } from '../models/launch.model';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];
  @Output() missionSelected = new EventEmitter<Launch>();

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    this.spaceXService.getLaunches().subscribe(launches => {
      this.launches = launches;
      this.filteredLaunches = [...this.launches];
    });
  }

  filterLaunchesByYear(year: number) {
    if (year) {
      this.filteredLaunches = this.launches.filter(launch => launch.launch_year === year.toString());
    } else {
      this.filteredLaunches = [...this.launches];
    }
  }

  showMissionDetails(selectedMission: Launch) {
    this.missionSelected.emit(selectedMission);
  }
}
