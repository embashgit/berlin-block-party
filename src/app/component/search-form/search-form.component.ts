import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import data  from '../../store/locations.json';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchFormComponent),
      multi: true,
    },
  ],
})
export class SearchFormComponent implements OnInit, ControlValueAccessor {

  constructor() { }
  @Input()
  public form!: FormGroup;

  public deLocations:any[] = data.locations

  @Output() submitSearch:EventEmitter<any> = new EventEmitter();

  
  public isDisabled!: boolean;
  public onTouched: () => void = () => {};

  public onChange: () => void = () => {};

  writeValue(val: any) {
    if (this.isDisabled) {
      return;
    }
    return val && this.form.setValue(val);
  }

  registerOnChange(onChange: any): void {
    this.form.valueChanges.subscribe(onChange);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean) {
    return isDisabled ? this.form.disable() : isDisabled;
  }
  ngOnInit(): void {
  }


  public submitForm(event:any) {
    this.submitSearch.emit();
  }


}
