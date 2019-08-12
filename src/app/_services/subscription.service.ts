import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { CinvestSubscription } from '../_models';

@Injectable({ providedIn: 'root' })
export class CinvestSubscriptionService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any>('https://cinvest.herokuapp.com/api/cinvest/v1/subscriptions');
    }

    getById(id: string) {
        return this.http.get<CinvestSubscription>(`https://cinvest.herokuapp.com/api/cinvest/v1/subscriptions/${id}`);
    }

    register(cinvest: CinvestSubscription){
        let subscriptions = [];
        if(!localStorage.getItem('subscriptions')){
            subscriptions = JSON.parse(localStorage.getItem('subscriptions'));
        }
        subscriptions.push(cinvest);
        localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
        return this.http.post<CinvestSubscription>('https://cinvest.herokuapp.com/api/cinvest/v1/subscriptions', cinvest);
    }
}