import { AreaSelect } from './../_models/area-select-model';
import { UserList } from './../_models/user-list-model';
import { AreaForm } from './../_models/area-form-model';
import { User } from './../_models/user-model';
import { UserDefinition } from './../_models/user-definition-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDefinitionService {

  constructor() { }

  public getUserDefinitions() {
    let userList: UserDefinition[];
    userList = this.fillUserDefinition();

    return userList;
  }

  public getUsersByUserDefinition(userDefinitionId: number): User[] {
    const users = this.fillUsers();

    return users.filter((a) => a.userDefinitionId === userDefinitionId);
  }

  public getAreaForm() {
    const areaForms = this.fillAreaForm();

    return areaForms;
  }

  public getUserList(): UserList[] {
    const users = this.fillUserList();

    return users;
  }

  public getAreaFormSelect() {
    const areaForms = this.fillAreaSelect();

    return areaForms;
  }

  private fillUserDefinition(): UserDefinition[] {
    return [{
      id: 1,
      description: 'Testing 1'
    }, {
      id: 2,
      description: 'Testing 4'
    }, {
      id: 3,
      description: 'Testing 5'
    }, {
      id: 4,
      description: 'Testing 6'
    }];
  }

  private fillUsers(): User[] {
    return [{
      id: 1,
      name: 'Juan',
      lastName: 'Perez',
      userDefinitionId: 1
    }, {
      id: 2,
      name: 'Pedro',
      lastName: 'Perez',
      userDefinitionId: 1
    },
    {
      id: 3,
      name: 'Luis',
      lastName: 'Arredondo',
      userDefinitionId: 1
    },
    {
      id: 4,
      name: 'Juan',
      lastName: 'Perez',
      userDefinitionId: 2
    },
    {
      id: 5,
      name: 'Luis',
      lastName: 'Arredondo',
      userDefinitionId: 3
    }];
  }

  private fillAreaForm(): AreaForm[] {
    return [{
      idArea: 1,
      idForm: 1,
      areaName: 'First Area',
      formName: 'First Form'
    }, {
      idArea: 1,
      idForm: 2,
      areaName: 'First Area',
      formName: 'Second Form'
    }, {
      idArea: 1,
      idForm: 3,
      areaName: 'First Area',
      formName: 'Third Form'
    }, {
      idArea: 2,
      idForm: 4,
      areaName: 'First Area',
      formName: 'Fouth Form'
    }, {
      idArea: 2,
      idForm: 5,
      areaName: 'Area 34',
      formName: 'Two'
    }];
  }

  private fillUserList(): UserList[] {
    return [{
      id: 1,
      name: 'Luis',
      lastName: 'Arredondo',
      userDefinitionId: 3,
      checked: false
    }, {
      id: 2,
      name: 'Deborah',
      lastName: 'Viloria',
      userDefinitionId: 3,
      checked: false
    }, {
      id: 3,
      name: 'Mario',
      lastName: 'Arredondo',
      userDefinitionId: 1,
      checked: false
    }, {
      id: 1,
      name: 'Rosa',
      lastName: 'Andrade',
      userDefinitionId: 4,
      checked: false
    }];
  }

  private fillAreaSelect(): AreaSelect[] {
    return [{
      id: 1,
      name: 'Area 51',
      checked: false,
      checkedArrow: false,
      forms: [{
        id: 1,
        name: 'Form 1',
        checked: false
      }, {
        id: 2,
        name: 'Form 2',
        checked: false
      }, {
        id: 3,
        name: 'Form 3',
        checked: false
      }]
    }, {
      id: 2,
      name: 'Area 34',
      checked: false,
      checkedArrow: false,
      forms: [{
        id: 4,
        name: 'One',
        checked: false
      }, {
        id: 5,
        name: 'Two',
        checked: false
      }]
    }, {
      id: 3,
      name: 'Area 69',
      checked: false,
      checkedArrow: false,
      forms: [{
        id: 6,
        name: 'Uno',
        checked: false
      }, {
        id: 7,
        name: 'Dos',
        checked: false
      }, {
        id: 8,
        name: 'Tres',
        checked: false
      }, {
        id: 9,
        name: 'Cuatro',
        checked: false
      }]
    }];
  }
}
