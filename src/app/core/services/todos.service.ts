import { Injectable } from '@angular/core';
import data from '../../data/todos';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  public getTtodos$ = of(data);
}
