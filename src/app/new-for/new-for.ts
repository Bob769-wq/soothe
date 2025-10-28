import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-for',
  imports: [RouterLink],
  template: `
    <div class="min-h-72 media-screen-750:min-h-600 media-screen-1060:min-h-[80vh]  relative">
      <img src="/new-for.webp" class="absolute w-full h-full object-cover" alt="middle" />
      <div class="absolute inset-0 bg-black opacity-30 hidden media-screen-750:block"></div>
      <div
        class="absolute inset-0 media-screen-750:flex flex-col gap-4
        justify-center items-center hidden"
      >
        <h3 class="text-white text-4xl font-bold">New For 2024</h3>
        <p class="text-white text-base">09/12-09/27歡慶歡慶開幕</p>
        <a
          routerLink="/new-for"
          class="text-black rounded-full px-8 py-3
           bg-white hover:scale-105 transition-all duration-300"
          >Show Now</a
        >
      </div>
    </div>
    <div class="media-screen-750:hidden flex flex-col items-center py-8">
      <h3 class="text-3xl font-bold">New For 2024</h3>

      <p class="pt-4 text-base">09/12-09/27歡慶歡慶開幕</p>
      <a
        routerLink="/new-for"
        class="rounded-full px-8 py-3 my-3
           bg-primary-color text-white  hover:scale-105 transition-all duration-300"
        >Show Now</a
      >
    </div>
  `,
  styles: ``,
})
export class NewFor {}
