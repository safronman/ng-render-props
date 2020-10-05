import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {

    @ContentChild(TemplateRef, {static: false}) template;

    // object
    state = {
        on: 0,
    };

    // primitive
    simpleValue = 10;

    increment() {
        this.state = {
            on: this.state.on + 1
        };
    }

    decrement() {
        this.simpleValue = this.simpleValue - 1;
    }

}
