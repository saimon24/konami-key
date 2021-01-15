import { NgModule } from '@angular/core';
import { confetti } from 'dom-confetti';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: []
})
export class KonamiKeyModule {
  getKeyName = (keyCode) => {
    return {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
      65: 'A',
      66: 'B',
    }[keyCode];
  };

  constructor() {
    let currentKeys = [];
    let timeout;

    document.addEventListener('keyup', (e) => {

      currentKeys = [...currentKeys, this.getKeyName(e.keyCode)]

      clearTimeout(timeout);
      const isKonamiCode = currentKeys.join(' ') === 'up up down down left right left right B A';

      if (isKonamiCode) {
        confetti(document.getElementsByTagName('body')[0], {
          // image: 'https://www.redditstatic.com/gold/awards/icon/gold_48.png',
          width: '48px',
          height: '48px',
          angle: 0,
          elementCount: 20
        });
      }
      timeout = setTimeout(() => { currentKeys = [] }, 5000);
    });

  }
}
