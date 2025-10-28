import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  template: `
    <div class="bg-gray-400">
      <a routerLink="/activity">
        <img src="/hero-section.webp" class="max-w-full" alt="hero-section" />
      </a>
    </div>
  `,
  styles: ``,
})
export class HeroSection {}
