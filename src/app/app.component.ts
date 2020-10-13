import { Component } from '@angular/core';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    dynamicTabs = [
        {
            label: 'User Information',
            component: UserInfoComponent
        },
        {
            label: 'Payment',
            component: PaymentComponent
        },
        {
            label: 'Thank You',
            component: ThankYouComponent
        }
    ];

}
