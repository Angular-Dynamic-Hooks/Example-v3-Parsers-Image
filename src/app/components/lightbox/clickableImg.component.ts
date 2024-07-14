import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-clickable-img',
  templateUrl: './clickableImg.component.html',
  styleUrls: ['./clickableImg.component.scss'],
  standalone: true
})
export class ClickableImgComponent {
  // Accepts two image urls: The normal one and an optional high-res one. Will preferably use the latter, if available.
  @Input() src: string|null = null;
  @Input() srcLarge: string|null = null;

  constructor(public modalService: NgbModal) {}
}
