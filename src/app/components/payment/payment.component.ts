import { Component, OnInit } from '@angular/core';
import { BeatSettings, BeatSettingsBTMSTV } from 'src/app/settings';
import { IBeat } from 'src/app/app.component';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
    beat: IBeat;
    age: number;

    constructor(settings: BeatSettings) {
        this.beat = (settings as BeatSettingsBTMSTV).beat;
        this.age = (settings as BeatSettingsBTMSTV).age;
    }

    onClick() {
        alert(this.age);
    }

    ngOnInit() {
    }

}
