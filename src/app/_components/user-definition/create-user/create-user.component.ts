import { UserList } from './../../../_models/user-list-model';
import { UserDefinitionService } from './../../../_services/user-definition.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  title: string;
  closeBtnName: string;

  public userDefinitionId: number;
  public userLists: UserList[];

  constructor(
    public bsModalRef: BsModalRef,
    private userDefinitionService: UserDefinitionService) { }

  ngOnInit(): void {
    this.getUserLists();
  }

  private getUserLists() {
    this.userLists = this.userDefinitionService.getUserList();
  }

  public selectUser(user: UserList) {
    user.checked = !user.checked;
  }
}
