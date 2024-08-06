
declare type SplitType = 'horizontal' | 'vertical' | 'grid';

declare interface SplitViewConfig extends Config {
  splitIndicator: string; // e.g. "split-tab='true'"
  defaultSplitView: SplitType;
};

declare interface SplitView {
  type: SplitType;
  tabs: MockedExports.BrowserTab[];
};
