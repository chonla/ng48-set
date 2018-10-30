import { AbstractControl } from "@angular/forms";

export class UrlValidator {
  static url(control: AbstractControl): {[key: string]: any} | null {
    const url: string = control.value;
    if (url.startsWith('http://')
      || url.startsWith('https://')) {
      return null;
    }
    return {'url': {value: url}};
  }
}
