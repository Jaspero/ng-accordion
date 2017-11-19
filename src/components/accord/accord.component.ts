import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnInit,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import {AccordionComponent} from '../accordion/accordion.component';
import {animate, state, style, transition, trigger} from '@angular/animations';

const animationTime = 200;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'jaspero-accord',
  templateUrl: './accord.component.html',
  styleUrls: ['./accord.component.scss'],
  animations: [
    trigger('anim', [
      state('open', style({height: '*'})),
      state('closed', style({height: 0})),
      transition('closed <=> open', animate(`${animationTime}ms ease`)),
      transition('closed <=> open', style({height: '*'}))
    ])
  ]
})
export class AccordComponent implements OnInit {
  constructor(
    private accordionComp: AccordionComponent,
    private _cdr: ChangeDetectorRef
  ) {}


  @Input() set active(act: boolean) {
    this.act = act;
    this.hasOverflow = !act;
    this.inner = act ? 'open' : 'closed';
  }

  @Input() set accordTitle(accordTitle: string | TemplateRef<any>) {
    this.innerTitle = accordTitle;
    this.isTemplate =  accordTitle instanceof TemplateRef;
  };

  @Input() disabled = false;

  @HostBinding('class.active') act = false;

  innerTitle: string | TemplateRef<any> = 'accord';
  isTemplate = false;

  inner = 'closed';
  hasOverflow = true;

  ngOnInit() {
    this.accordionComp.addAccord(this);
  }

  trigger() {
    this.hasOverflow = true;
    setTimeout(() => this.hasOverflow = this.inner === 'closed', animationTime);
    this.accordionComp.trigger(this);
    this._cdr.markForCheck();
  }

  close() {
    this.act = false;
    this.inner = 'closed';
    this._cdr.markForCheck();
  }
}
