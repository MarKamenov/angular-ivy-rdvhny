import { Component, Input } from '@angular/core';
import { IMenuItem } from '../../types';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Input() public sideBarLinks: IMenuItem[];

  /** State of the sidebar (open/closed). */
  @Input() public state: boolean;
}
