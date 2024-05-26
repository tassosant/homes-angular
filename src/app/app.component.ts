import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  // templateUrl: './app.component.html',
  template:`
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/home.svg" alt="logo" aria-hidden="true" width="100">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homes';
}
