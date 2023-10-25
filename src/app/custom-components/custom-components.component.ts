import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-components',
  templateUrl: './custom-components.component.html'
})
export class CustomComponentsComponent {
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
