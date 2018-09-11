import {Component, OnInit} from '@angular/core';
import {Stage, Stages} from '../models/stage';
import {Task} from '../models/task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  stages: Stage[] = Stages;

  constructor() {
  }

  ngOnInit() {
  }

  onMoveBackward($event: Task, i: number) {
    this.stages[i - 1].tasks.push($event);
  }

  onMoveForward($event: Task, i: number) {
    this.stages[i + 1].tasks.push($event);
  }
}
