import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" style="width: 80px;" src="/assets/Screenshot 2023-08-13 at 11.46.00 AM.png" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {
  title = 'homes';
}

