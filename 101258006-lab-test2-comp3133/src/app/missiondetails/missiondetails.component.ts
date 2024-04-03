import { Component, Input } from '@angular/core';
import { Launch } from '../models/launch.model';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {
  @Input() selectedMission !: Launch;

  constructor() { }
}
