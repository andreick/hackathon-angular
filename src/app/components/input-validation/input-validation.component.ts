import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnInit {

  @Input() inputLabel = 'Campo'
  @Input('abstractControl') control: AbstractControl | null = null

  @Input() notBlank = false
  @Input() minLength = 0
  @Input() maxLength = 0
  @Input() email = false

  constructor() { }

  ngOnInit(): void {
    const validations = [
      { enabled: this.notBlank, validator: this.notBlankValidator() },
      { enabled: this.minLength > 0, validator: Validators.minLength(this.minLength) },
      { enabled: this.maxLength > 0, validator: Validators.maxLength(this.maxLength) },
      { enabled: this.email, validator: Validators.email }
    ]

    const validators = validations
      .filter((validation) => validation.enabled)
      .map((validation) => validation.validator)

    this.control?.setValidators(validators)
    this.control?.updateValueAndValidity()
  }

  isTouched(): boolean | undefined {
    return this.control?.touched
  }

  isBlank(): boolean {
    return this.getError('notBlank')
  }

  isNotEmail(): boolean {
    return this.getError('email')
  }

  hasSmallLength(): boolean {
    return this.getError('minlength')
  }

  hasBigLength(): boolean {
    return this.getError('maxlength')
  }

  private getError(error: string): boolean {
    return this.control?.errors?.[error]
  }

  private notBlankValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isBlank = (control.value || '').trim().length === 0
      return isBlank ? { notBlank: true } : null
    }
  }
}
