import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export function notBlankValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isBlank = (control.value || '').trim().length === 0
    return isBlank ? { notBlank: true } : null
  }
}
