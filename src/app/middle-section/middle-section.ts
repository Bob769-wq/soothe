import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-middle-section',
  imports: [RouterLink],
  template: `
    <div class="min-h-72 media-screen-750:min-h-600 media-screen-1060:min-h-[80vh]  relative">
      <img src="/middle-section.webp" class="absolute h-full w-full object-cover" alt="middle" />
      <div class="absolute inset-0 bg-black opacity-30 hidden media-screen-750:block"></div>
      <div
        class="absolute inset-0 media-screen-750:flex flex-col
         gap-4 justify-center items-center hidden"
      >
        <p class="text-white text-base">SOOTHE YOUR STYLE</p>
        <h3 class="text-white text-4xl font-bold">FRAGRANCE & APPAREL</h3>
        <div class="mt-8">
          <a
            routerLink="/fragrance"
            class="text-white rounded-full px-8 py-3 bg-transparent
          border hover:border-2 border-white"
            >Show Now</a
          >
        </div>
      </div>
    </div>
    <div class="media-screen-750:hidden flex flex-col items-center py-8">
      <p class="text-base">SOOTHE YOUR STYLE</p>
      <h3 class="text-4xl font-bold pt-4">FRAGRANCE & APPAREL</h3>
      <a
        routerLink="/fragrance"
        class="rounded-full px-8 py-3 bg-transparent
          border hover:border-2"
        >Show Now</a
      >
    </div>
  `,
  styles: ``,
})
export class MiddleSection {}
