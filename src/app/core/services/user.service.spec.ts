import { TestBed, inject } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { userReducer } from '../../shared/reducers/user.reducer';
import { User } from '../../shared/models/user.model';
import { UPDATE_USER, SET_USER, RESET_USER } from '../../shared/reducers/user.reducer';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(userReducer),
      ],
      providers: [
        UserService
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
