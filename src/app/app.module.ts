import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { UiACounterComponent } from './components/ui-a-counter/ui-a-counter.component';
import { UiBCounterComponent } from './components/ui-b-counter/ui-b-counter.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        UiACounterComponent,
        UiBCounterComponent,
        UserInfoComponent,
        PaymentComponent,
        ThankYouComponent,
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        MatTabsModule
    ],
    entryComponents: [
        UserInfoComponent,
        PaymentComponent,
        ThankYouComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
