import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgDocButtonComponent, NgDocColor, NgDocNotifyService } from '@ng-doc/ui-kit';

@Component({
  selector: 'app-button-demo',
  imports: [NgDocButtonComponent],
  templateUrl: './button-demo.component.html',
  styleUrl: './button-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDemoComponent {
  @Input()
  color: NgDocColor = 'primary';

  constructor(private readonly notifyService: NgDocNotifyService) {}

  clickEvent(): void {
    this.notifyService.notify('Button was clicked!');
  }
}
