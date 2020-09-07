import { FormSelect } from './form-select-model';
export interface AreaSelect {
  id: number;
  name: string;
  checked: boolean;
  checkedArrow: boolean;
  forms: FormSelect[];
}
