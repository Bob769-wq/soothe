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
  selector: 'app-women',
  imports: [CardContent, Button],
  template: `
    <div class="max-w-1450 mx-auto my-12 px-12">
      <h3 class="font-bold text-2xl text-center">女裝服飾</h3>
      <div
        class="grid grid-cols-2 media-screen-750:grid-cols-3 media-screen-990:grid-cols-4 gap-8 py-12"
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
export class Women {
  productItem: Product[] = [
    {
      id: 1,
      img: '/women/women1.webp',
      title: '蝴蝶結針織羅紋上衣(黃)',
      link: '/women',
      price: 'NT$ 590',
    },
    {
      id: 2,
      img: '/women/women2.webp',
      title: '針織外套罩衫(藍色)',
      link: '/women',
      price: 'NT$ 390',
    },
    {
      id: 3,
      img: '/women/women3.webp',
      title: '細肩蛋糕連身短裙(黑色)',
      link: '/women',
      price: 'NT$ 990',
    },
    {
      id: 4,
      img: '/women/women4.webp',
      title: '洞洞個性長版針織罩衫(黑色)',
      link: '/women',
      price: 'NT$ 690',
    },
    {
      id: 5,
      img: '/women/women5.webp',
      title: '氣質細肩連身綁帶小洋裝(灰色)',
      link: '/women',
      price: 'NT$ 690',
    },
    {
      id: 6,
      img: '/women/women6.webp',
      title: '花朵領削肩氣質上衣(天絲)',
      link: '/women',
      price: 'NT$ 990',
    },
    {
      id: 7,
      img: '/women/women7.webp',
      title: '波紋小高領透膚內搭上衣（黑）',
      link: '/women',
      price: 'NT$ 590',
    },
    {
      id: 8,
      img: '/women/women8.webp',
      title: '可愛單口袋吊帶短褲（白）',
      link: '/women',
      price: 'NT$ 990',
    },
  ];
}
