import { Component, Injector } from '@angular/core';
import { BeatSettings } from '../settings';

export interface IBeat {
    id: number;
    title: string;
}

@Component({
    selector: 'app-track-list-core',
    template: ``
})
export class TrackListCoreComponent {

    componentClass: any;
    beats: Array<IBeat> = [{id: 1, title: 'yo'}, {id: 2, title: 'bla'}];

    constructor(private inj: Injector) {
    }

    injectors = {};

    getProps(beat: IBeat): BeatSettings {
        return {beat};
    }

    getInjector(beat: IBeat) {
        let inject = this.injectors[beat.id];
        if (!inject) {
            inject = Injector.create([
                {provide: BeatSettings, useValue: this.getProps(beat)}
            ], this.inj);
            this.injectors[beat.id] = inject;
        }
        return inject;
    }
}
