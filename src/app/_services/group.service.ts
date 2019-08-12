import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User, Group} from '../_models';

@Injectable({ providedIn: 'root' })
export class GroupService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any>('https://cinvest-account-service.herokuapp.com/api/cinvest/v1/groups');
    }

    getById(id: string) {
        return this.http.get<Group>(`https://cinvest-account-service.herokuapp.com/api/cinvest/v1/groups/${id}`);
    }

    registerGroup(group: Group){
        return this.http.post<Group>('https://cinvest-account-service.herokuapp.com/api/cinvest/v1/groups', group);
    }

    save(group: Group){
        let id = group.id;
        return this.http.post<Group>(`https://cinvest-account-service.herokuapp.com/api/cinvest/v1/groups/${id}`, group);
    }
}