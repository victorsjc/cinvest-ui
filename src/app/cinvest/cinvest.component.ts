import { Component, OnInit } from '@angular/core';

import { CinvestSubscriptionService } from '../_services';
import { CinvestSubscription } from '../_models';

@Component({
  selector: 'app-cinvest',
  templateUrl: './cinvest.component.html',
  styleUrls: ['./cinvest.component.scss']
})
export class CinvestComponent implements OnInit {
  subscriptions : CinvestSubscription[];
  constructor(private subscriptionService: CinvestSubscriptionService) { }

  ngOnInit() {
    this.subscriptionService.getAll().pipe().subscribe(response  => {
      let content = response.content;
      this.subscriptions = content;
  });
  }

}
