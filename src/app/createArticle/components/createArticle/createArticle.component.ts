// Packages
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-article',
  templateUrl: './createArticle.component.html',
  styleUrls: ['./createArticle.component.scss'],
})
export class CreateArticleComponent {
  public initialValues = {
    title: 'Foo',
    description: 'Bar',
    body: 'Baz',
    tagList: ['1', '2', '3'],
  };

  public onSubmit(res: any): void {
    console.log(res);
  }
}
