import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@sunbird/core';
import {
  LandingPageComponent, PublicContentPlayerComponent,
  PublicCollectionPlayerComponent,
} from './components';
import { SuiModule } from 'ng2-semantic-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetComponent } from './components/get/get.component';
import { DialCodeComponent } from './components/dial-code/dial-code.component';
import { PublicFooterComponent } from './components/public-footer/public-footer.component';
import { PublicPlayerService, LandingpageGuard } from './services';
import { SharedModule } from '@sunbird/shared';
import { PublicRoutingModule } from './public-routing.module';
import { TelemetryModule } from '@sunbird/telemetry';
import { NgInviewModule } from 'angular-inport';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BadgingModule } from '@sunbird/badge';
import { CourseDetailPageComponent } from './components/course-detail-page/course-detail-page.component';
import { PublicPreviewPageComponent } from './components/public-preview-page/public-preview-page.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule,
    PublicRoutingModule,
    TelemetryModule,
    NgInviewModule,
    DeviceDetectorModule,
    BadgingModule,

  ],
  declarations: [LandingPageComponent, GetComponent, DialCodeComponent,
    PublicFooterComponent, PublicContentPlayerComponent, PublicCollectionPlayerComponent,
    CourseDetailPageComponent, PublicPreviewPageComponent],
  providers: [PublicPlayerService, DeviceDetectorService, LandingpageGuard]

})
export class PublicModule { }
