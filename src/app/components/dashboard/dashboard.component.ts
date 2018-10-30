import { Component, OnInit } from '@angular/core';
import { BnkService } from 'src/app/services/bnk.service';
import { Member } from '../../models/member';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public members: Member[];

  constructor(private bnk: BnkService) {}

  ngOnInit() {
    this.bnk.get().subscribe(data => {
      this.members = data;
    })
  }

}
