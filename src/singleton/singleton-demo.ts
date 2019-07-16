import {StatsTracker} from './StatsTracker';
import { print } from './singleton-demo1';

export const singletonDemo = () => {
  print();
  let tracker = StatsTracker.instance;
  tracker.twitterShares = 999;
  StatsTracker.instance.print(console.log);
}
