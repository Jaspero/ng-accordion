import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VariableContentComponent} from './components/variable-content/variable-content.component';
import {AccordionComponent} from './components/accordion/accordion.component';
import {AccordComponent} from './components/accord/accord.component';

export * from './components/accordion/accordion.component';
export * from './components/accord/accord.component';
export * from './components/variable-content/variable-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AccordionComponent,
    AccordComponent,
    VariableContentComponent
  ],
  exports: [
    AccordionComponent,
    AccordComponent
  ]
})
export class JasperoAccordionModule {}
