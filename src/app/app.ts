import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { HeroSection } from './hero-section/hero-section';
import { Fragrance } from './fragrance/fragrance';
import { MiddleSection } from './middle-section/middle-section';
import { Women } from './women/women';
import { NewFor } from './new-for/new-for';
import { Accessory } from './accessory/accessory';
import { HighRated } from './high-rated/high-rated';
import { Footer } from './footer/footer';
import { Copyright } from './copyright/copyright';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    HeroSection,
    Fragrance,
    MiddleSection,
    Women,
    NewFor,
    Accessory,
    HighRated,
    Footer,
    Copyright,
  ],
  template: `
    <app-header />
    <app-hero-section />
    <app-fragrance />
    <app-middle-section />
    <app-women />
    <app-new-for />
    <app-accessory />
    <app-high-rated />
    <app-footer />
    <app-copyright />
  `,
  styles: '',
})
export class App {
  protected readonly title = signal('soothe');
}
