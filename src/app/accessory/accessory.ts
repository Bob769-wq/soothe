import { Component } from '@angular/core';
import { Button } from '../button/button';
import { RouterLink } from '@angular/router';
interface Product {
  id: number;
  topic?: string;
  title: string;
  price?: string;
  img: string;
  img2?: string;
  link: string;
  hasLittleImg?: boolean;
  soldOut?: boolean;
  button?: string;
}
@Component({
  selector: 'app-accessory',
  imports: [Button, RouterLink],
  template: `
    <div class="max-w-1450 mx-auto my-12 media-screen-990:px-12 px-2">
      <h3 class="font-bold text-2xl text-center">香氛/服飾配件</h3>
      <div class="grid grid-cols-2 media-screen-750:grid-cols-3 gap-x-8 gap-y-12 py-12">
        @for (item of productItem; track item.id) {
          <a [routerLink]="item.link" class="flex flex-col group relative">
            <div class="rounded-lg overflow-hidden relative">
              <img
                [src]="item.img"
                [alt]="item.title"
                class="aspect-square object-cover h-full w-full transition-opacity group-hover:opacity-0 duration-500"
              />
              <img
                [src]="item.img2"
                [alt]="item.title"
                class="aspect-square object-cover h-full w-full absolute inset-0 transition-all group-hover:scale-110 opacity-0 group-hover:opacity-100 duration-500"
              />
            </div>
            <div class="py-2">
              <h4 class="font-bold text-base group-hover:underline">{{ item.title }}</h4>
            </div>
            <div class="font-bold">{{ item.price }}</div>
            <div
              class="absolute hidden group-hover:flex justify-center items-center rounded-full bg-add-to-cart -right-5 -top-5"
            >
              <a class="p-3"><i class="fa-solid fa-plus fa-xl" style="color: #ffffff;"></i></a>
            </div>
            @if (item.soldOut) {
              <div class="absolute top-0 left-5">
                <div class="bg-white w-6  text-center leading-5">
                  <span>售完</span>
                </div>
              </div>
            }
          </a>
        }
      </div>
      <app-button label="瀏覽全部" />
      <div class="grid media-screen-750:grid-cols-2 gap-8 my-16">
        @for (item of productCard; track item.id) {
          <a class="flex flex-col rounded-lg overflow-hidden">
            <img
              [src]="item.img"
              [alt]="item.title"
              class="aspect-square object-cover h-full w-full"
            />

            <div class="p-6 flex flex-col gap-4 items-center bg-information-bg">
              <h3 class="font-bold text-lg">{{ item.topic }}</h3>
              <p class="text-lg">{{ item.title }}</p>
              <div class="py-4">
                <a
                  [routerLink]="item.link"
                  class="rounded-full border px-8 py-3 border-add-to-cart hover:border-2"
                >
                  {{ item.button }}
                </a>
              </div>
            </div>
          </a>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class Accessory {
  productItem: Product[] = [
    {
      id: 1,
      title: '(限量)灰色質感皮革品牌鏡-此為贈品，請勿下單',
      img: '/accessory/a1-1.webp',
      img2: '/accessory/a1-2.webp',
      link: '/accessory',
      price: 'NT$ 9,999',
    },
    {
      id: 2,
      title: '精緻山型擴香石',
      img: '/accessory/a2-1.webp',
      img2: '/accessory/a2-2.webp',
      link: '/accessory',
      price: 'NT$ 490 - NT$ 590',
      hasLittleImg: true,
    },
    {
      id: 3,
      title: '超可愛綁帶羊羔毛滾邊耳罩（咖）',
      img: '/accessory/a3-1.webp',
      img2: '/accessory/a3-2.webp',
      link: '/accessory',
      price: 'NT$ 390',
    },
    {
      id: 4,
      title: '超可愛綁帶羊羔毛滾邊耳罩（卡其）',
      img: '/accessory/a4-1.webp',
      img2: '/accessory/a4-2.webp',
      link: '/accessory',
      price: 'NT$ 390',
    },
    {
      id: 5,
      title: '超可愛綁帶羊羔毛滾邊耳罩（米白）',
      img: '/accessory/a5-1.webp',
      img2: '/accessory/a5-2.webp',
      link: '/accessory',
      price: 'NT$ 390',
    },
    {
      id: 6,
      title: '垂墜星星鏈條髮夾',
      img: '/accessory/a6-1.webp',
      img2: '/accessory/a6-2.webp',
      link: '/accessory',
      price: 'NT$ 390',
      soldOut: true,
    },
  ];
  productCard: Product[] = [
    {
      id: 1,
      topic: 'APPAREL',
      title: 'SOOTHE YOUR LIFE',
      img: '/accessory/cols2-1.webp',
      link: '/card',
      button: 'Show Now',
    },
    {
      id: 1,
      topic: 'FRAGRANCE',
      title: 'SOOTHE YOUR STYLE',
      img: '/accessory/cols2-2.webp',
      link: '/card',
      button: 'Find out more',
    },
  ];
}
