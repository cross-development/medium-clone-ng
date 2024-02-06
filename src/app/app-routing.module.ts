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
    path: '/articles/:slug',
    component: ArticleComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
