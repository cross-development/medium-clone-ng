// Packages
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, filter } from 'rxjs';
// Store
import { currentUserSelector } from '../../../auth/store/selectors';
import { logoutAction } from '../../../auth/store/actions/sync.actions';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { updateCurrentUserAction } from '../../../auth/store/actions/updateCurrentUser.action';
// Types
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface';
import { CurrentUserInputInterface } from '../../../shared/types/currentUserInput.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public currentUser: CurrentUserInterface;

  public isSubmitting$: Observable<boolean>;
  public backendErrors$: Observable<BackendErrorsInterface | null>;

  private currentUserSubscription: Subscription;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly store: Store,
  ) {}

  public ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  public ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    });
  }

  private initializeListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser;

        this.initializeForm();
      });
  }

  public submit(): void {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value,
    };

    this.store.dispatch(updateCurrentUserAction({ currentUserInput }));
  }

  public logout(): void {
    this.store.dispatch(logoutAction());
  }
}
