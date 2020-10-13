import { IBeat } from './app.component';

export abstract class BeatSettings {
    beat: IBeat;
}

export class BeatSettingsBTMSTV extends BeatSettings {
    age: number;
}
