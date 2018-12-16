import { Component } from '@angular/core'

@Component({
  selector: 'ace-root',
  template: `<div class="acedia-blog">
    <ace-header></ace-header>
    <router-outlet></router-outlet>
    <ace-footer></ace-footer>
  </div>`,
})
export class AppComponent {}
