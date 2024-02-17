// Packages
import { NgModule, isDevMode } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Components
import { AppComponent } from './app.component';
// Modules
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { TagFeedModule } from './tagFeed/tagFeed.module';
import { ArticleModule } from './article/article.module';
import { YourFeedModule } from './yourFeed/yourFeed.module';
import { GlobalFeedModule } from './globalFeed/globalFeed.module';
import { TopBarModule } from './shared/modules/topBar/topBar.module';
import { CreateArticleModule } from './createArticle/createArticle.module';
import { EditArticleModule } from './editArticle/editArticle.module';
import { SettingsModule } from './settings/settings.module';
import { UserProfileModule } from './userProfile/userProfile.module';
// Services
import { ApiInterceptor } from './shared/services/api.interceptor';
import { AuthInterceptor } from './shared/services/auth.interceptor';
import { PersistenceService } from './shared/services/persistence.service';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot(),
    AuthModule,
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    ArticleModule,
    EditArticleModule,
    SettingsModule,
    UserProfileModule,
  ],
  providers: [
    PersistenceService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AppModule {}
