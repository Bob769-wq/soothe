import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
interface ProductContent {
  id: number;
  title: string;
  price: string;
  img: string;
  link: string;
}
@Component({
  selector: 'app-card-content',
  imports: [RouterLink],
  template: `
    <a [routerLink]="product().link" class="flex flex-col group relative">
      <div class="aspect-square rounded-lg overflow-hidden">
        <img
          [src]="product().img"
          [alt]="product().title"
          class="aspect-square object-cover h-full w-full group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div class="py-2">
        <h4 class="font-bold text-base group-hover:underline">{{ product().title }}</h4>
      </div>
      <div class="font-bold">{{ product().price }}</div>
      <div
        class="absolute flex  media-screen-750:hidden media-screen-750:group-hover:flex justify-center items-center
        rounded-full bg-add-to-cart -right-5 -top-5"
      >
        <a class="w-10 h-10 flex justify-center items-center"
          ><i class="fa-solid fa-plus fa-xl" style="color: #ffffff;"></i
        ></a>
      </div>
    </a>
  `,
  styles: ``,
})
export class CardContent {
  product = input.required<ProductContent>();
}
