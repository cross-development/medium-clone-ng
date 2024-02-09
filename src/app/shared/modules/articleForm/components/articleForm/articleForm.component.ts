// Packages
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Types
import { ArticleInputInterface } from '../../../../types/articleInput.interface';
import { BackendErrorsInterface } from '../../../../types/backendErrors.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './articleForm.component.html',
  styleUrls: ['./articleForm.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues')
  public initialValuesProps: ArticleInputInterface;

  @Input('isSubmitting')
  public isSubmittingProps: boolean;

  @Input('errors')
  public errorProps: BackendErrorsInterface | null;

  @Output('articleSubmit')
  public articleSubmitEvent = new EventEmitter<ArticleInputInterface>();

  public form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      title: [this.initialValuesProps.title, Validators.required],
      description: [this.initialValuesProps.description, Validators.required],
      body: [this.initialValuesProps.body, Validators.required],
      tagList: [this.initialValuesProps.tagList.join(' '), Validators.required],
    });
  }

  public onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}
