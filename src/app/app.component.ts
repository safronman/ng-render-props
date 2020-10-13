import { Component } from '@angular/core';
import { PaymentComponent } from './components/payment/payment.component';
import { BeatSettingsBTMSTV } from './settings';
import { IBeat, TrackListCoreComponent } from './components/core-track-list.component';


@Component({
    selector: 'app-track-list-bmstv',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class TrackListBTMSTVComponent extends TrackListCoreComponent {

    componentClass = PaymentComponent;

    getProps(beat: IBeat): BeatSettingsBTMSTV {
        return {beat, age: 9000};
    }

}
