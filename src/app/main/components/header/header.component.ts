import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { MenuItem } from 'primeng/api';

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

  public checked = true;

  constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges(): void {
    this._initMenu();
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
