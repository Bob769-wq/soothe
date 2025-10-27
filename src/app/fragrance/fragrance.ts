import { Component } from '@angular/core';
import { CardContent } from '../card-content/card-content';
import { Button } from '../button/button';
interface Product {
  id: number;
  title: string;
  price: string;
  img: string;
  link: string;
}
@Component({
  selector: 'app-fragrance',
  imports: [CardContent, Button],
  template: `
    <div class="max-w-1450 mx-auto my-12 media-screen-990:px-12 px-0">
      <h3 class="font-bold text-2xl text-center">FRAGRANCE</h3>
      <div
        class="grid grid-cols-2 media-screen-750:grid-cols-3 gap-x-8 gap-y-16 py-12 px-2 media-screen-990:px-0"
      >
        @for (item of productItem; track item.id) {
          <app-card-content [product]="item" />
        }
      </div>
      <app-button class="media-screen-990:block hidden" label="瀏覽全部" />
    </div>
  `,
  styles: ``,
})
export class Fragrance {
  productItem: Product[] = [
    {
      id: 1,
      title: 'Soothe時氛 x AcQUA源少年50ml聯名香水《進行式Continuum》',
      link: '/product',
      price: 'NT$ 1,480',
      img: '/fragrance/product1.webp',
    },
    {
      id: 2,
      title: 'Soothe時氛 x AcQUA源少年50ml聯名香水《絮語Caress》',
      link: '/product',
      price: 'NT$ 1,480',
      img: '/fragrance/product2.webp',
    },
    {
      id: 3,
      title: '30ML淡香精香水調香課體驗(時長90-120MINS)',
      link: '/product',
      price: 'NT$ 1,580',
      img: '/fragrance/product3.webp',
    },
    {
      id: 4,
      title: '30ML 落日月台淡香精香水',
      link: '/product',
      price: 'NT$ 880',
      img: '/fragrance/product4.webp',
    },
    {
      id: 5,
      title: '30ML 晨曦日光淡香精香水',
      link: '/product',
      price: 'NT$ 880',
      img: '/fragrance/product5.webp',
    },
    {
      id: 6,
      title: '30ML NO.26淡香精香水',
      link: '/product',
      price: 'NT$ 880',
      img: '/fragrance/product6.webp',
    },
  ];
}
