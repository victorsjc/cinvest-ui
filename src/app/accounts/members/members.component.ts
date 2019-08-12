
import {first, filter, debounceTime, distinctUntilChanged, map, merge} from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, Group } from '../../_models';
import { UserService, GroupService } from '../../_services';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-group-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class GroupMembersComponent implements OnInit {
  searchForm: FormGroup;
  users: User[];
  joined_members: User[];
  group: Group;
  members: Map<string,User>;
  private groupId;

  constructor(private formBuilder : FormBuilder,
    private userService: UserService,
    private groupService: GroupService,
    private activatedRoute :ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      term: ['', Validators.required],
    });
    this.members = new Map();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.groupId = params['id'];
    });

    if(this.groupId)
    {
      this.groupService.getById(this.groupId).subscribe(group => {
         this.joined_members = (group.members == null ? [] : group.members);
         this.group = group;
      });
    }
  }

  onSelect(user: User){
    if(!this.members.has(user.id)){
      this.members.set(user.id, user);
    }else{
      this.members.delete(user.id);
    }
  }

  onJoin(){
    if(this.joined_members.length>0){
      this.members.forEach((value, key, map) => {
        this.joined_members.push(value);
      });
      this.members.clear();
    }
  }

  onSearch(){
    let term = this.searchForm.controls.term.value;
    // stop here if form is invalid
    this.userService.findByUsername(term)
      .pipe().subscribe(
         response  => {
          let users = response.content;
          this.users = users;
      });
  }

  onSave(){
    this.group.members = this.joined_members;
    this.groupService.save(this.group).subscribe(response => {
      this._router.navigate(['/groups']);
    });
  }
}