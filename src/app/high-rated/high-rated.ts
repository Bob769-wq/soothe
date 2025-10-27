import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface Product {
  id: number;
  date: string;
  img: string;
  link: string;
  comment: string;
}
@Component({
  selector: 'app-high-rated',
  imports: [RouterLink],
  template: `
    <div class="max-w-1450 mx-auto my-12 media-screen-990:px-12 px-2">
      <h3 class="font-bold text-2xl">最佳評價</h3>
      <div
        class="grid grid-cols-2 media-screen-750:grid-cols-3 media-screen-1060:grid-cols-4 gap-8 py-8"
      >
        @for (item of productItem; track item.id) {
          <a
            [routerLink]="item.link"
            class="flex flex-col overflow-hidden rounded-xl shadow-lg
             hover:scale-105 transition-all duration-300 relative"
          >
            <img [src]="item.img" alt="rated" class="w-full h-56 object-cover" />
            <div class="p-6 relative">
              <div class="flex gap-2">
                <img src="/high-rated/user.png" alt="user" class="rounded-full max-w-10 max-h-10" />
                <div class="flex flex-col">
                  <p class="font-bold">欒**</p>
                  <p>{{ item.date }}</p>
                </div>
              </div>
              <p class="pb-10 pt-2">{{ item.comment }}</p>
            </div>
            <div class="absolute inset-0 flex justify-center items-center top-8">
              <div class="rounded-lg bg-white px-3 py-2 shadow-md">
                <span
                  ><i
                    class="fa-solid fa-star media-screen-990:fa-xl fa-lg"
                    style="color: #FFD43B;"
                  ></i
                ></span>
                <span
                  ><i
                    class="fa-solid fa-star media-screen-990:fa-xl fa-lg"
                    style="color: #FFD43B;"
                  ></i
                ></span>
                <span
                  ><i
                    class="fa-solid fa-star media-screen-990:fa-xl fa-lg"
                    style="color: #FFD43B;"
                  ></i
                ></span>
                <span
                  ><i
                    class="fa-solid fa-star media-screen-990:fa-xl fa-lg"
                    style="color: #FFD43B;"
                  ></i
                ></span>
                <span
                  ><i
                    class="fa-solid fa-star media-screen-990:fa-xl fa-lg"
                    style="color: #FFD43B;"
                  ></i
                ></span>
              </div>
            </div>
          </a>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class HighRated {
  productItem: Product[] = [
    {
      id: 1,
      img: '/high-rated/product1.webp',
      date: '15/Oct/2025 03:39 pm',
      link: '/high-rated',
      comment: '質感很好 包裝的也很有水準',
    },
    {
      id: 2,
      img: '/high-rated/product2.webp',
      date: '15/Oct/2025 03:39 pm',
      link: '/high-rated',
      comment: '很有誠意',
    },
    {
      id: 3,
      img: '/high-rated/product3.webp',
      date: '15/Oct/2025 03:39 pm',
      link: '/high-rated',
      comment: '香味很滿意',
    },
    {
      id: 4,
      img: '/high-rated/product4.webp',
      date: '15/Oct/2025 03:38 pm',
      link: '/high-rated',
      comment: '包裝盒很精美，有精心設計過',
    },
  ];
}
