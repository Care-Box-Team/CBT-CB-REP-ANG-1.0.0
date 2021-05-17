export abstract class ComponentClass {
  validateForms: boolean = false;

  constructor() {}

  doNotValidateForms() {
    this.validateForms = false;
  }

  toValidateForms() {
    this.validateForms = true;
  }
}
