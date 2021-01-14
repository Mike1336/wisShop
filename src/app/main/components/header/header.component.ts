import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

import { MenuItem } from 'primeng/api';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input()
  public isAuth: boolean;

  @Output()
  public logout = new EventEmitter<void>();

  public items: MenuItem[];

  public darkMode: boolean;

  @ViewChild('logo', { static: true })
  public logoImg: ElementRef;

  constructor(private _themeService: ThemeService) {}

  public ngOnInit(): void {
    this._initTheme();
  }

  public ngOnChanges(): void {
    this._initMenu();
  }
  public switchTheme(darkEnabled: boolean): void {
    darkEnabled
    ? this._setTheme('dark')
    : this._setTheme('light');
  }

  private _initTheme(): void {
    this.darkMode = this._themeService.darkEnabled;
    this._setLogo();
  }

  private _setTheme(value: string): void {
    this._themeService.setTheme(value);
    this._setLogo();
  }

  private _setLogo(): void {
    this.darkMode
    ? this.logoImg.nativeElement.src = 'assets/images/primeng-logo-light.svg'
    : this.logoImg.nativeElement.src = 'assets/images/primeng-logo-dark.svg';
  }

  private _initMenu(): void {
    if (this.isAuth) {
      this.items = [
        { label: 'Edit Profile', icon: 'pi pi-user-edit', routerLink: ['/profile'] },
        { label: 'Quit', icon: 'pi pi-power-off', command: () => this.logout.emit() },
      ];

      return;
    }

    this.items = [
        { label: 'Sign in', icon: 'pi pi-sign-in', routerLink: ['/signin'] },
        { label: 'Sign up', icon: 'pi pi-user-plus', routerLink: ['/signup'] },
    ];
  }

}
