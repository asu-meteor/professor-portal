import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() addClass = ''; // adds to / updates custom classes
  @Input() isPrimary: boolean = true;
  @Input() isDisabled: boolean = false;
}
