import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    NgbModule.forRoot(),
    TranslateModule.forChild()
  ],
  declarations: [
    
    ],
  exports: [
    TranslateModule,

  ],
  providers: [
    
  ],
  entryComponents: []
})
export class UtilsModule { }
