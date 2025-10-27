import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <div class="border-t pt-8 pb-24">
      <div class="max-w-1450 mx-auto px-12">
        <div class="grid gap-8 media-screen-750:gap-0  media-screen-750:grid-cols-4">
          <div class="flex flex-col gap-6">
            <h4 class="font-bold text-lg">Follow us</h4>
            <ul class="flex gap-14">
              <li><a href="/"><i class="fa-brands fa-square-facebook fa-lg"></i></a></li>
              <li><a href="/"><i class="fa-brands fa-square-instagram fa-lg"></i></a></li>
              <li><a href="/"><i class="fa-brands fa-line fa-lg"></i></a></li>
            </ul>
          </div>
          <div class="flex flex-col gap-6">
            <h4 class="font-bold text-lg">We accept</h4>
            <ul class="flex gap-2">
              <li><i class="fa-brands fa-cc-visa fa-2xl"></i></li>
              <li><i class="fa-brands fa-cc-mastercard fa-2xl"></i></li>
              <li><i class="fa-brands fa-cc-paypal fa-2xl"></i></li>
              <li><i class="fa-brands fa-cc-amazon-pay fa-2xl"></i></li>
            </ul>
          </div>
          <div class="flex flex-col gap-6">
            <h4 class="font-bold text-lg">Our mission</h4>
            <div class="flex flex-col gap-2 text-base">
              <p>水月商行 ，客服信箱：</p>
              <p>serve.soothe@gmail.com，聯絡信箱：</p>
              <p>soothe026@gmail.com，服務專線：</p>
              <p>0958105082</p>
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <h4 class="font-bold text-lg">Information</h4>
            <div class="flex flex-col gap-2">
              <a class="hover:underline" routerLink="/address">本店地址</a>
              <a class="hover:underline" routerLink="/cooperation">企業 / 異業 / 團購合作</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Footer {}
