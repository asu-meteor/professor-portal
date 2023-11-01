import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html'
})

// TODO: THIS IS BROKEN!!!
export class FieldComponent {
  @Input() fieldType: 'text' | 'password' | 'search' | 'number' = 'text'; // field type is just text by default
  @Input() placeholder: string = '';
  @Input() addClass: string = '';
}
