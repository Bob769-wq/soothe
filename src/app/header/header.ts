import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
interface NavList {
  id: number;
  title: string;
  link: string;
  children?: NavList[];
}
@Component({
  selector: 'app-header',
  imports: [RouterLink, ReactiveFormsModule],
  template: `
    <header
      class="fixed left-0 top-0 right-0 z-30"
      [class]="isScrolled() ? 'bg-white' : 'bg-transparent'"
    >
      <div class=" max-w-1450 mx-auto px-4 media-screen-990:px-12 py-1.5">
        <div class="flex items-center justify-between">
          <div class="media-screen-990:hidden flex items-center gap-4">
            <span (click)="toggleMenu()" class="cursor-pointer">
              @if (isMenuOpen()) {
                <i class="fa-solid fa-xmark fa-xl" style="color: currentColor;"></i>
              } @else {
                <i class="fa-solid fa-bars fa-xl" style="color: currentColor;"></i>
              }
            </span>
            <span (click)="toggleSearchBigScreen()" class="cursor-pointer">
              <i class="fa-solid fa-magnifying-glass fa-xl" style="color: currentColor;"></i>
            </span>
          </div>
          <a routerLink="/"><img src="/logo.webp" class="w-100" alt="logo" /></a>
          <div class="flex items-center gap-5 media-screen-990:px-2.5">
            <span
              class="media-screen-990:block hidden cursor-pointer"
              (click)="toggleSearchBigScreen()"
            >
              <i class="fa-solid fa-magnifying-glass fa-xl" style="color: currentColor;"></i>
            </span>
            <a routerLink="/user" class="media-screen-990:block hidden">
              <i class="fa-solid fa-user fa-xl" style="color: currentColor;"></i>
            </a>
            <a routerLink="/cart">
              <i class="fa-solid fa-bag-shopping fa-xl" style="color: currentColor;"></i>
            </a>
          </div>
        </div>
        <ul class="hidden media-screen-990:flex items-center gap-6 px-3 my-1">
          @for (item of navItem; track item.id) {
            @if (item.children) {
              <li class="py-3 relative group/item">
                <a [routerLink]="item.link" class="flex items-center gap-2">
                  <span>{{ item.title }}</span>
                  <span>
                    <i class="fa-solid fa-chevron-down fa-xs" style="color: currentColor;"></i>
                  </span>
                </a>
                <ul
                  class="absolute top-full group-hover/item:py-6 w-52 max-h-0 group-hover/item:max-h-96
                  transition-all duration-300 overflow-hidden group-hover/item:overflow-visible bg-white group-hover/item:border"
                >
                  @for (child of item.children; track child.id) {
                    @if (child.children) {
                      <li class="py-3 px-4 group/child relative">
                        <a [routerLink]="child.link" class="flex justify-between">
                          <span>{{ child.title }}</span>
                          <span>
                            <i
                              class="fa-solid fa-chevron-right fa-xs"
                              style="color: currentColor;"
                            ></i
                          ></span>
                        </a>
                        <ul
                          class="absolute left-full top-0 py-6 px-4 w-52 opacity-0 invisible
                          group-hover/child:opacity-100 group-hover/child:visible
                          transition-all duration-300 bg-white border"
                        >
                          @for (grandchild of child.children; track grandchild.id) {
                            <li class="py-3 px-4">
                              <a [routerLink]="grandchild.link">{{ grandchild.title }}</a>
                            </li>
                          }
                        </ul>
                      </li>
                    } @else {
                      <li class="py-3 px-4">
                        <a [routerLink]="child.link">{{ child.title }}</a>
                      </li>
                    }
                  }
                </ul>
              </li>
            } @else {
              <li class="py-3">
                <a [routerLink]="item.link">
                  <span>{{ item.title }}</span>
                </a>
              </li>
            }
          }
        </ul>
      </div>
    </header>
    <div
      class="fixed top-header-height left-0 h-full w-96 bg-white z-50 overflow-y-auto transition-transform duration-500 ease-in-out"
      [class]="isMenuOpen() ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="pt-12 h-3/4">
        <ul>
          @for (item of menuItem; track item.id) {
            <li class="px-6 py-2 hover:bg-information-bg text-lg">
              <a [routerLink]="item.link">{{ item.title }}</a>
            </li>
          }
        </ul>
      </div>
      <div class="h-1/4 bg-information-bg">
        <ul class="flex flex-col gap-8 py-8">
          <li class="px-6">
            <a routerLink="/user" class="flex gap-2">
              <span><i class="fa-solid fa-user fa-lg" style="color: currentColor;"></i></span>
              <span>登入</span>
            </a>
          </li>
          <li class="px-6">
            <a routerLink="/sign-up" class="flex gap-2">
              <span><i class="fa-solid fa-user fa-plus" style="color: currentColor;"></i></span>
              <span>註冊帳號</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    @if (isSearchOpenBigScreenOpen()) {
      <div class="fixed inset-0 z-40">
        <div
          class="absolute inset-0 bg-black bg-opacity-40 cursor-pointer"
          (click)="toggleSearchBigScreen()"
        ></div>
        <div class="fixed top-0 left-0 right-0 py-6 bg-white ">
          <div class="p-4">
            <form
              [formGroup]="form"
              class="flex justify-center items-center gap-2"
              (submit)="submit()"
            >
              <div class="rounded-full flex justify-between px-4 border w-80 border-black">
                <input
                  type="text"
                  class="text-lg outline-none"
                  placeholder="搜尋"
                  formControlName="searchControl"
                />
                <button type="submit">
                  <i class="fa-solid fa-magnifying-glass fa-xl" style="color: currentColor;"></i>
                </button>
              </div>
              <div (click)="toggleSearchBigScreen()" class="cursor-pointer">
                <i class="fa-solid fa-xmark fa-xl" style="color: currentColor;"></i>
              </div>
            </form>
          </div>
        </div>
      </div>
    }
  `,
  styles: ``,
})
export class Header {
  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    searchControl: this.fb.control('', {
      validators: [Validators.required],
    }),
  });
  submit() {
    if (this.form.invalid) {
      console.error('錯誤');
      return;
    }
    const data = this.form.getRawValue();
    data.searchControl = data.searchControl.trim();
    console.log(data);
  }
  isScrolled = signal(false);
  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 1);
  }
  isSearchOpenBigScreenOpen = signal(false);
  toggleSearchBigScreen() {
    this.isSearchOpenBigScreenOpen.update((value) => !value);
  }
  isMenuOpen = signal(false);
  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }
  menuItem: NavList[] = [
    { id: 1, title: '首頁', link: '/menu' },
    { id: 2, title: '認識SOOTHE時氛', link: '/menu' },
    { id: 3, title: '所有商品', link: '/menu' },
    { id: 4, title: '聽聽別人怎麼說', link: '/menu' },
    { id: 5, title: 'SOOTHE 實體寄賣點', link: '/menu' },
    { id: 6, title: 'SOOTHE企業送禮', link: '/menu' },
  ];
  navItem: NavList[] = [
    { id: 1, title: '首頁', link: '/nav' },
    {
      id: 2,
      title: '認識SOOTHE時氛',
      link: '/nav',
      children: [
        { id: 1, title: '品牌介紹', link: '/child' },
        { id: 2, title: '商品認證證明', link: '/child' },
        { id: 3, title: 'Soothe會員制度', link: '/child' },
      ],
    },
    {
      id: 3,
      title: '所有商品',
      link: '/nav',
      children: [
        { id: 1, title: '本週新品', link: '/child' },
        { id: 2, title: '銷售排行榜', link: '/child' },
        { id: 3, title: 'SoothexAcQUA源少聯名香水', link: '/child' },
        { id: 4, title: '限時優惠區', link: '/child' },
        {
          id: 5,
          title: '香氛系列',
          link: '/child',
          children: [
            { id: 1, title: '擴香', link: '/grandchild' },
            { id: 2, title: '舒眠噴霧', link: '/grandchild' },
            { id: 3, title: '30ml淡香精香水', link: '/grandchild' },
            { id: 4, title: '10ml淡香精香水', link: '/grandchild' },
            { id: 5, title: '香氛試香卡', link: '/grandchild' },
            { id: 6, title: '不完美系列香氛蠟燭', link: '/grandchild' },
          ],
        },
        { id: 6, title: '香氛/服飾配件', link: '/child' },
        {
          id: 7,
          title: '女裝服飾',
          link: '/child',
          children: [
            { id: 1, title: '冬季上身', link: '/grandchild' },
            { id: 2, title: '下著', link: '/grandchild' },
            { id: 3, title: '夏季上身', link: '/grandchild' },
            { id: 4, title: '連身/套裝', link: '/grandchild' },
          ],
        },
      ],
    },
    { id: 4, title: '聽聽別人怎麼說', link: '/nav' },
    { id: 5, title: 'SOOTHE實體寄賣點', link: '/nav' },
    { id: 6, title: 'SOOTHE企業送禮', link: '/nav' },
  ];
}
