import './vendor.ts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { M2AdvertiseGatewaySharedModule, UserRouteAccessService } from './shared';
import { M2AdvertiseGatewayHomeModule } from './home/home.module';
import { M2AdvertiseGatewayAdminModule } from './admin/admin.module';
import { M2AdvertiseGatewayAccountModule } from './account/account.module';
import { M2AdvertiseGatewayEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        M2AdvertiseGatewaySharedModule,
        M2AdvertiseGatewayHomeModule,
        M2AdvertiseGatewayAdminModule,
        M2AdvertiseGatewayAccountModule,
        M2AdvertiseGatewayEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class M2AdvertiseGatewayAppModule {}
