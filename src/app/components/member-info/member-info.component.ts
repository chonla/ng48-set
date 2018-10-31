import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-member-info',
  templateUrl: './member-info.component.html',
  styleUrls: ['./member-info.component.scss']
})
export class MemberInfoComponent implements OnInit {

  @Input() member: Member;
  public vote: number;

  constructor() {
    this.vote = 0;
  }

  ngOnInit() {
  }

  updateVote(vote: number) {
    this.vote = vote;
  }

}
