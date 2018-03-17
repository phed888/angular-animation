import { animate, state, style, transition, trigger } from '@angular/animations';

export const showStateTrigger = trigger('showState', [
  state('mouseOver', style({

  })),
  transition('void => shown', [
    style({
      backgroundColor: 'red'
    }),
    animate(300)
  ]),
  transition('* => void', animate(300, style({
    backgroundColor: 'white'
  })))
]);
