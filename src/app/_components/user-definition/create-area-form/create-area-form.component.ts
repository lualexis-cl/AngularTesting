import { AreaForm } from './../../../_models/area-form-model';
import { FormSelect } from './../../../_models/form-select-model';
import { AreaSelect } from './../../../_models/area-select-model';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserDefinitionService } from 'src/app/_services/user-definition.service';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-area-form',
  templateUrl: './create-area-form.component.html',
  styleUrls: ['./create-area-form.component.scss']
})
export class CreateAreaFormComponent implements OnInit {
  title: string;
  closeBtnName: string;
  public areaForm: AreaForm | undefined;

  public areaSelects: AreaSelect[];

  constructor(
    public bsModalRef: BsModalRef,
    private userDefinitionService: UserDefinitionService) { }

  ngOnInit(): void {
    this.getAreaSelect();
  }

  private canEditAreaForm() {
    if (this.areaForm) {
      this.areaSelects.filter((a) => a.id === this.areaForm.idArea)
        .forEach((b) => {
          b.checked = true;
          b.checkedArrow = true;

          b.forms.filter((c) => c.id === this.areaForm.idForm)
            .forEach((d) => {
              d.checked = true;
            });
        });
    }
  }

  private getAreaSelect() {
    this.areaSelects = this.userDefinitionService.getAreaFormSelect();
    this.canEditAreaForm();
  }

  public selectAreaArrow(area: AreaSelect) {
    if (area.checkedArrow && area.checked) {
      return;
    }
    area.checkedArrow = !area.checkedArrow;
  }

  public selectAreaAll(area: AreaSelect) {
    area.checked = !area.checked;
    area.forms.forEach((a) => a.checked = area.checked);
  }

  public selectForm(area: AreaSelect, form: FormSelect) {
    form.checked = !form.checked;

    if (!form.checked && area.forms.filter((a) => a.checked && a !== form).length === 0) {
      area.checked = false;
    } else {
      area.checked = true;
    }
  }

  public canCollapse(area: AreaSelect) {
    if (area.checked) {
      return false;
    }

    return true;
  }
}
