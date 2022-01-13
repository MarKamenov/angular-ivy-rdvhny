import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMenuItem } from '../../../types';

@Component({
  selector: 'app-side-menu-link',
  templateUrl: './side-menu-link.component.html',
  styleUrls: ['./side-menu-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuLinkComponent {
  @Input() public link: IMenuItem;
}
