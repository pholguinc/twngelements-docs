import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgDocButtonComponent, NgDocColor } from '@ng-doc/ui-kit';

@Component({
  selector: 'app-button-inline-demo',
  imports: [NgDocButtonComponent],
  template: ` <button ng-doc-button [color]="color">Button</button> `,
  styleUrl: './button-inline-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonInlineDemoComponent {
  @Input()
  color: NgDocColor = 'primary';
}
