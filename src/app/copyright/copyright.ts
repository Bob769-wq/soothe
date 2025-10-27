import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-copyright',
  imports: [RouterLink],
  template: `
    <div class="border-t">
      <div class="max-w-1450 mx-auto px-12 py-8">
        <div class="flex flex-col items-center justify-center gap-4">
          <p class="text-xs">
            © 2025 soothe026. Powered by
            <a routerLink="/easystore" class="hover:underline">EasyStore</a>>
          </p>
          <div class="flex gap-1 text-xs">
            <a routerLink="/privay">隱私政策</a>
            <span>|</span>
            <a routerLink="/privay">出貨及退換貨條款</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Copyright {}
