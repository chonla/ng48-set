import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Feed } from '../../models/feed';
import { FeedEntry } from 'src/app/models/feed-entry';
import { BnkService } from 'src/app/services/bnk.service';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit, OnDestroy {
  private instagram$: Subscription;
  private instagramObservable: Observable<Feed>;
  public feed: FeedEntry[];
  public instagramId: string;

  constructor(private route: ActivatedRoute, private bnk: BnkService) { }

  ngOnInit() {
    this.instagramId = this.route.snapshot.paramMap.get('id');
    this.instagramObservable = this.bnk.instragram(this.instagramId);
    this.instagram$ = this.instagramObservable.subscribe((data: Feed) => {
      this.feed = data.feeds.filter((f: FeedEntry) => {
        return (f.data.indexOf('"is_video":false') !== -1);
      });
    });
  }

  ngOnDestroy() {
    if (this.instagram$) {
      this.instagram$.unsubscribe();
    }
  }
}
