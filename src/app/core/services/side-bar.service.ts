import { Injectable } from '@angular/core';
// import { IMenuItem } from '../../../types';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideBarService {
  /**
   * This behavior subject keeps track
   * of the open/closes sidebar state.
   */
  private readonly sideBarState = new BehaviorSubject<boolean>(true);

  /**
   * An observable of the sidebar open/closed state
   */
  public readonly sideBarState$: Observable<boolean> =
    this.sideBarState.asObservable();

  /**
   * This observable contains all the side menu items
   */
  public readonly sideBarLinks$: Observable<any[]> = of([
    {
      title: 'Overview',
      path: '/home',
    },
    {
      title: 'Tasks',
      path: '#',
    },
    {
      title: 'Today',
      path: '#',
    },
    {
      title: 'Next 7 Days',
      path: '#',
    },
    {
      title: 'Labels',
      path: '#',
    },
    {
      title: 'Idea',
      path: `#`,
    },
    {
      title: 'Shared Labels',
      path: `#`,
    },
    {
      title: 'Filters',
      path: `#`,
    },
  ]);

  /**
   * Sets the sidebar state to the opposite of the current state. example:
   */
  public toggleSideBarState = (): void =>
    this.sideBarState.next(!this.sideBarState.value);

  /**
   * Sets the sidebar state based on the `screenSize`.
   */
  public screenSizeSideBarState = (screenSize: number): void =>
    this.sideBarState.next(screenSize > 992);
}
