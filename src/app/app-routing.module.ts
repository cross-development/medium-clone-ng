// Packages
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Components
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { TagFeedComponent } from './tagFeed/components/tagFeed/tagFeed.component';
import { YourFeedComponent } from './yourFeed/components/yourFeed/yourFeed.component';
import { GlobalFeedComponent } from './globalFeed/components/globalFeed/globalFeed.component';
import { ArticleComponent } from './article/components/article/article.component';
import { CreateArticleComponent } from './createArticle/components/createArticle/createArticle.component';
import { EditArticleComponent } from './editArticle/components/editArticle/editArticle.component';
import { SettingsComponent } from './settings/components/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
  {
    path: '/feed',
    component: YourFeedComponent,
  },
  {
    path: '/tags/:slug',
    component: TagFeedComponent,
  },
  {
    path: '/articles/new',
    component: CreateArticleComponent,
  },
  {
    path: '/articles/:slug',
    component: ArticleComponent,
  },
  {
    path: '/articles/:slug/edit',
    component: EditArticleComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
