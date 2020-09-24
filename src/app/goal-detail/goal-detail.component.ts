import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from "../goal";

type NewType = boolean;

type NewType_1 = NewType;

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
// export class GoalDetailComponent implements OnInit {

//   @Input() goal: Goal;
//   @Output() isComplete = new EventEmitter<NewType_1>();

//   goalComplete(complete:boolean){
//     this.isComplete.emit(complete);
//   }
//   constructor() { }

//   ngOnInit() {
//   }

// }


export class GoalDetailComponent implements OnInit {

  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}