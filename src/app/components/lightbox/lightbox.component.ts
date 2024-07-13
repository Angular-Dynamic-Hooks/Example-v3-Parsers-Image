import { Component, Input, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
  standalone: true
})
export class LightboxComponent {
  // Accepts two image urls: The normal one and an optional high-res one. Will preferably use the latter, if available.
  @Input() src: string|null = null;
  @Input() srcLarge: string|null = null;

  constructor(public modalService: NgbModal) {}

  open(content: TemplateRef<any>) {
    this.modalService.open(content, {
      windowClass: 'lightbox-window' // Just for adding styles to the modal
    })
  }
}
