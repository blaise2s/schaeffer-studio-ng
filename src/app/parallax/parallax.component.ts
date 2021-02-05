import { Component, Input } from '@angular/core';

@Component({
  selector: 's-studio-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent {
  @Input() imgSrc = '';
  @Input() height = '';
}
