import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IMenuItem } from './types';
import { SideBarService } from './core/services/side-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public sideBarLinks$: Observable<IMenuItem[]> =
    this.sideBarService.sideBarLinks$;

  public sideBarState$: Observable<boolean> = this.sideBarService.sideBarState$;

  public constructor(
    private sideBarService: SideBarService,
    public router: Router
  ) {}

  public ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.sideBarService.screenSizeSideBarState(window.innerWidth);
  }
}
