class StatsTracker {
  buttonClicks: number = 0;
  facebookShares: number = 0;
  twitterShares: number = 0;

  constructor() {
    if(StatsTracker.instance) {
      throw new Error("Cannot initialize singleton class using `new`");
    }
    // Without this line, this class will never be initialized,
    //  and other lines won't work.
    StatsTracker._instance = this;
  }

  private static _instance: StatsTracker = new StatsTracker();

  public static get instance(): StatsTracker {
    return StatsTracker._instance;
  }

  public print(callback: Function): void {
    callback(`
    button clicks: ${this.buttonClicks}
    facebook shares: ${this.facebookShares}
    twitter shares: ${this.twitterShares}
    `);
  }
}

export { StatsTracker };

// StatsTracker.instance.print(console.log);