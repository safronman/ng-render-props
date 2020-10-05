import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-ui-a-counter',
    templateUrl: './ui-a-counter.component.html'
})
export class UiACounterComponent {

    @Input() simpleValue: number;
    @Input() on: number;
    @Input() increment: () => void;
    @Input() decrement: () => void;

}
