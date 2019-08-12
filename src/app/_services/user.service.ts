import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any>('https://cinvest-account-service.herokuapp.com/api/cinvest/v1/users');
    }

    getById(id: number) {
        //return this.http.get<User>(`${config.apiUrl}/users/${id}`);
    }

    getProfile(){
        return this.http.get<User>('https://cinvest-account-service.herokuapp.com/api/cinvest/v1/me');
    }

    registerUser(user: User){
        return this.http.post<User>('https://cinvest-account-service.herokuapp.com/api/cinvest/v1/users', user);
    }

    findByUsername(term: string){
        term = 'username:' + term.trim();
        // Add safe, URL encoded search parameter if there is a search term
        const options = term ?
        { params: new HttpParams().set('search', term) } : {};

        return this.http.get<any>('https://cinvest-account-service.herokuapp.com/api/cinvest/v1/users', options);
    }
}