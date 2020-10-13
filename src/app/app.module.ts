import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TrackListBTMSTVComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { UiACounterComponent } from './components/ui-a-counter/ui-a-counter.component';
import { UiBCounterComponent } from './components/ui-b-counter/ui-b-counter.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { TrackListCoreComponent } from './components/core-track-list.component';

@NgModule({
    declarations: [
        TrackListBTMSTVComponent,
        CounterComponent,
        UiACounterComponent,
        UiBCounterComponent,
        UserInfoComponent,
        PaymentComponent,
        TrackListCoreComponent
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        MatTabsModule,
    ],
    entryComponents: [
        UserInfoComponent,
        PaymentComponent,
        TrackListBTMSTVComponent,

    ],
    providers: [],
    bootstrap: [TrackListBTMSTVComponent]
})
export class AppModule {
}
