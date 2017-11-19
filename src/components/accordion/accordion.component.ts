import {Component, Input} from '@angular/core';
import {AccordComponent} from '../accord/accord.component';

@Component({
  selector: 'jaspero-accordion',
  template: '<ng-content></ng-content>'
})

export class AccordionComponent {

  @Input() singleActive = false;

  accords: AccordComponent[] = [];

  trigger(accord: AccordComponent) {
    if (!accord.disabled) {
      if (this.singleActive) {
        this.accords.forEach(a => {
          if (!a.disabled) {
            a.act = false;
            a.inner = 'closed';
          }
        });
      }

      accord.act = !accord.act;
      accord.inner = accord.act ? 'open' : 'closed';
    }
  }

  addAccord(accord: AccordComponent) {
    this.accords.push(accord);
  }
}