import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MouseComponent } from './components/mouse/mouse.component';
import { UiACounterComponent } from './components/ui-a-counter/ui-a-counter.component';
import { UiBCounterComponent } from './components/ui-b-counter/ui-b-counter.component';

@NgModule({
    declarations: [
        AppComponent,
        MouseComponent,
        UiACounterComponent,
        UiBCounterComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
