import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './shared/services';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'app';

  private seoChangedSubscription: Subscription;
  constructor(private router: Router, private authService: AuthService,
    private translate: TranslateService) {
  

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        $('html, body').animate({ scrollTop: 0 });
      }
    });
    const defaultLang = 'en';
  
  }

  createAbsoluteUrl(href) {
    const link = document.createElement('a');
    link.href = href;
    return link.href;
  }

  ngOnInit() {
   
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.seoChangedSubscription.unsubscribe();
  }
}
