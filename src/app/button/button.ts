import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <div class="flex justify-center text-white pt-10">
      <a
        class="bg-primary-color px-8 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
        >{{ label() }}</a
      >
    </div>
  `,
  styles: ``,
})
export class Button {
  label = input.required<string>();
}
