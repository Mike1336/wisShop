import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './signup.container.html',
  styleUrls: ['./signup.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupContainer implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

}
