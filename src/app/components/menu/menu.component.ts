import { Component } from '@angular/core';
import { SideBarService } from '../../core/services/side-bar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public readonly options = [{ name: 'John Doe', value: 'John Doe' }];

  public constructor(private sideBarService: SideBarService) {}

  /** Open/Close the sidebar */
  public toggleSideBar = (): void => this.sideBarService.toggleSideBarState();
}
