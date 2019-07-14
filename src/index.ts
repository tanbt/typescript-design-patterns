import { StatsTracker } from './creational/Singleton';

let tracker = StatsTracker.instance;

tracker.buttonClicks = 111;
tracker.facebookShares = 222;
tracker.twitterShares = 333;

StatsTracker.instance.print(console.log);
