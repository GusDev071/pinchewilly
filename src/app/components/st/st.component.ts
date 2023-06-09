import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-st',
  templateUrl: './st.component.html',
  styleUrls: ['./st.component.css']
})
export class StComponent {
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  isChecked = true;
  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });

  constructor(private _formBuilder: FormBuilder) {}

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }
}
