import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-ui-b-counter',
    templateUrl: './ui-b-counter.component.html'
})
export class UiBCounterComponent {

    @Input() simpleValue: number;
    @Input() on: number;
    @Input() increment: () => void;
    @Input() decrement: () => void;

}
