import { CreateAreaFormComponent } from './create-area-form/create-area-form.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AreaForm } from './../../_models/area-form-model';
import { User } from './../../_models/user-model';
import { UserDefinition } from './../../_models/user-definition-model';
import { UserDefinitionService } from './../../_services/user-definition.service';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-definition',
  templateUrl: './user-definition.component.html',
  styleUrls: ['./user-definition.component.scss']
})
export class UserDefinitionComponent implements OnInit {
  public userDefinitions: UserDefinition[];
  public users: User[];
  public areaForms: AreaForm[];
  public userDefinitionSelect: UserDefinition;
  public userSelect: User;
  public areaFormSelect: AreaForm;

  bsModalRef: BsModalRef;

  constructor(
    private userDefinitionService: UserDefinitionService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getUserDefinitions();
  }

  public selectUserDefinition(user: UserDefinition) {
    if (this.userDefinitionSelect !== user) {
      this.userDefinitionSelect = user;
      this.getUsers();
      this.getAreaForms();
    }
  }

  public selectUser(user: User) {
    if (this.userSelect !== user) {
      this.userSelect = user;
    }
  }

  public selectAreaForm(areaForm: AreaForm) {
    if (this.areaFormSelect !== areaForm) {
      this.areaFormSelect = areaForm;
    }
  }

  private getUserDefinitions() {
    this.userDefinitions = this.userDefinitionService.getUserDefinitions();

    if (this.userDefinitions && this.userDefinitions.length > 0) {
      this.userDefinitionSelect = this.userDefinitions[0];
      this.getUsers();
      this.getAreaForms();
    }
  }

  private getUsers(){
    if (this.userDefinitionSelect) {
      const userResult = this.userDefinitionService
        .getUsersByUserDefinition(this.userDefinitionSelect.id);

      if (userResult && userResult.length > 0) {
        this.userSelect = userResult[0];
      }

      this.users = userResult;
    }
  }

  private getAreaForms() {
    this.areaForms = this.userDefinitionService.getAreaForm();

    if (this.areaForms && this.areaForms.length > 0) {
      this.areaFormSelect = this.areaForms[0];
    }
  }

  public openCreateUserModal() {
    const initialState = {
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(CreateUserComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  public openCreateAreaFormModal() {
    const initialState = {
      title: 'Create Area Form'
    };
    this.bsModalRef = this.modalService.show(CreateAreaFormComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  public openEditAreaFormModal(areaForm: AreaForm) {
    const initialState = {
      title: 'Create Area Form',
      areaForm
    };
    this.bsModalRef = this.modalService.show(CreateAreaFormComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
