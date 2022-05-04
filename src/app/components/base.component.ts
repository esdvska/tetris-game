import { Component, OnDestroy } from '@angular/core';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'app-base',
  template: 'NO UI TO BE FOUND.',
  styles: [],
})
export class BaseComponent implements OnDestroy {
  public subscriptions: SubscriptionLike[] = [];

  constructor() {}

  ngOnDestroy() {
    // zwolnienie subskrypcji
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.subscriptions = [];
  }
}
