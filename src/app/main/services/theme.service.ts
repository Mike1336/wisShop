import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private _list = {
    dark: 'assets/themes/dark.css',
    light: 'assets/themes/light.css',
  };

  private _default = this._list.dark;

  private _current: string = this._list[localStorage.getItem('theme')] || this._default;

  private linkRef: HTMLLinkElement;

  constructor(
    @Inject(DOCUMENT)
    private _document: Document,
  ) {
    this._initTheme();
  }

  public get darkEnabled(): boolean {
    return this._current === this._list.dark;
  }

  public get current(): string {
    return this._current;
  }

  public setTheme(theme: string): void {
    localStorage.setItem('theme', theme);
    this._current = this._list[theme];
    this.linkRef.href = this._current;
  }

  private _initTheme(): void {
    this.linkRef = this._document.createElement('link');
    this.linkRef.rel = 'stylesheet';
    this.linkRef.href = this._current;

    this._document.querySelector('head').appendChild(this.linkRef);
  }

}
