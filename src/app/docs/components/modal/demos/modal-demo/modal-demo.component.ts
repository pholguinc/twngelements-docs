import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TwngModalComponent } from 'twng-elements-ui';
@Component({
  selector: 'app-modal-demo',
  imports: [TwngModalComponent],
  templateUrl: './modal-demo.component.html',
  styleUrl: './modal-demo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalDemoComponent {
  readonly isModalOpen = signal(false);
  readonly isLoading = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  onModalClose() {
    this.isModalOpen.set(false);
  }

  onModalSave(){
    this.isModalOpen.set(false);
    console.log('Modal saved');
  }
}
