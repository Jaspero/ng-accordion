import {Component, Input} from '@angular/core';
import {AccordComponent} from '../accord/accord.component';

@Component({
  selector: 'jaspero-accordion',
  template: '<ng-content></ng-content>'
})
export class AccordionComponent {

  @Input() singleActive = true;

  accords: AccordComponent[] = [];

  trigger(accord: AccordComponent) {
    if (!accord.disabled) {

      const toSet = !accord.act;
      const state = toSet ? 'open' : 'closed';


      if (this.singleActive) {
        this.accords.forEach(a => {
          if (!a.disabled) {
            a.act = false;
            a.inner = 'closed';
          }
        });
      }

      accord.act = toSet;
      accord.inner = state;
    }
  }

  addAccord(accord: AccordComponent) {
    this.accords.push(accord);
  }
}
