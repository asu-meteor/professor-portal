import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})

export class ModalComponent {
  @Input() addClass = ''; // adds to / updates custom classes
  @Input() showModal: boolean | undefined;
  @Output() closeModal = new EventEmitter();

  onClose() {
    this.closeModal.emit();
  }
}
