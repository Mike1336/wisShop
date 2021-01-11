import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

}
