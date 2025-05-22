import {NgDocPage} from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { ButtonDemoComponent } from './demos/button-demo/button-demo.component';
import { ButtonInlineDemoComponent } from './demos/button-inline-demo/button-inline-demo.component';

const ModalPage: NgDocPage = {
  title: `Modal`,
  category: ComponentsCategory,
  mdFile: './index.md',
  demos: { ButtonDemoComponent, ButtonInlineDemoComponent, },
  route: {
    children: [
      {
        path: 'button',
        component: ButtonDemoComponent,
      },
    ],
  },
};

export default ModalPage;
