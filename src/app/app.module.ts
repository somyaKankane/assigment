import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { RestangularModule } from 'ngx-restangular';
import { ToastyModule } from 'ng2-toasty';
import { NgSelectModule } from '@ng-select/ng-select';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxStripeModule } from 'ngx-stripe';

import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';






import { AuthService } from './shared/services';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MediaModule } from './media/media.module';
import { UtilsModule } from './utils/utils.module';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';
import { ChartsModule } from 'ng2-charts';
import { NgDatepickerModule } from 'ng2-datepicker';
import {NgxPaginationModule} from 'ngx-pagination'; 

// Function for setting the default restangular configuration
export function RestangularConfigFactory(RestangularProvider) {
  // TODO - change default config
  RestangularProvider.setBaseUrl(window.appConfig.apiProxy || window.appConfig.apiBaseUrl);
  RestangularProvider.addFullRequestInterceptor((element, operation, path, url, headers, params) => {
    // Auto add token to header
    headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken');
    headers.platform = window.appConfig.platform;
    return {
      headers: headers
    };
  });

  RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
    // force logout and relogin
    if (response.status === 401) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('isLoggedin');
     

      return false; // error handled
    }

    return true; // error not handled
  });
}

export function createTranslateLoader(http: HttpClient) {
 
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    BlankComponent,
    FullComponent,

  
  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgDatepickerModule,
    NgbModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot(Approutes, { useHash: false }),
    // Importing RestangularModule and making default configs for restanglar
    RestangularModule.forRoot(RestangularConfigFactory),
    ToastyModule.forRoot(),
    NgSelectModule,
    SlickCarouselModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgxStripeModule.forRoot(),
    UtilsModule,
    ChartsModule, 
    // MediaModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: PathLocationStrategy // HashLocationStrategy
  },
    AuthService,
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
