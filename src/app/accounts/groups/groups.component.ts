import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

import { Group } from '../../_models';
import { GroupService, AuthenticationService } from '../../_services';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GroupComponent implements OnInit {
  groups: Group[];
  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.groupService.getAll().pipe().subscribe(response  => {
            let groups = response.content;
            this.groups = groups;
        });
  }

}
