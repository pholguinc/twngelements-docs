import {NgDocPage} from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { ModalDemoComponent } from './demos/modal-demo/modal-demo.component';

const ModalPage: NgDocPage = {
  title: `Modal`,
  category: ComponentsCategory,
  mdFile: './index.md',
  demos: { ModalDemoComponent },
  route: {
    children: [
      {
        path: 'modal',
        component: ModalDemoComponent,
      },
    ],
  },
};

export default ModalPage;
