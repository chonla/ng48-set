import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Member } from 'src/app/models/member';
import { BnkService } from 'src/app/services/bnk.service';

@Component({
  selector: 'app-bnk-girls',
  templateUrl: './bnk-girls.component.html',
  styleUrls: ['./bnk-girls.component.scss']
})
export class BnkGirlsComponent implements OnInit, OnDestroy {
  private bnkObservable: Observable<Member[]>;
  private bnk$: Subscription;
  public members: Member[];

  constructor(private bnk: BnkService) {
    this.bnkObservable = this.bnk.get();
    this.bnk$ = this.bnkObservable.subscribe((data:Member[]) => {
      this.members = data;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.bnk$) {
      this.bnk$.unsubscribe();
    }
  }

}
