import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './signin.container.html',
  styleUrls: ['./signin.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninContainer implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

}
