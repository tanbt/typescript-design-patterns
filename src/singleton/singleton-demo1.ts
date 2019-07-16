import {StatsTracker} from './StatsTracker';

export const print = () => {
  let tracker = StatsTracker.instance;
  tracker.buttonClicks = 111;
  tracker.facebookShares = 222;
  tracker.twitterShares = 333;
  StatsTracker.instance.print(console.log);
}
