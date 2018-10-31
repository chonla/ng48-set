import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {

  @Output() voteChanges: EventEmitter<number>;

  private vote: number;

  constructor() {
    this.voteChanges = new EventEmitter<number>();
    this.vote = 0;
  }

  ngOnInit() {
  }

  voteUp() {
    this.vote++;
    if (this.vote > 1000) {
      this.vote = 1000;
    }
    this.voteChanges.emit(this.vote);
  }

  voteDown() {
    this.vote--;
    if (this.vote < 0) {
      this.vote = 0;
    }
    this.voteChanges.emit(this.vote);
  }

}
