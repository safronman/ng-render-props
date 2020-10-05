import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-mouse',
    templateUrl: './mouse.component.html',
    styleUrls: ['./mouse.component.css']
})
export class MouseComponent {

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
