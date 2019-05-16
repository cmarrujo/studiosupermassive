import { qs, qsa, $on, $delegate } from './utils';
import '../stylesheets/style.scss';
import '../scripts/hammer.js';

class StudioSupermassive {
  constructor() {
    this.expandForm();
  }

  expandForm() {
    console.log('expanded');
  }
}

new StudioSupermassive();