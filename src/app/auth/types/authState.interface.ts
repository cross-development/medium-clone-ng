// Types
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { BackendErrorsInterface } from '../../shared/types/backendErrors.interface';

export interface AuthStateInterface {
  isLoading: boolean;
  isSubmitting: boolean;
  isLoggedIn: boolean | null;
  currentUser: CurrentUserInterface | null;
  validationErrors: BackendErrorsInterface | null;
}
