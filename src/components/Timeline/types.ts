export type TimelineItem = {
  year: string;
  items: string[];
};

export type TimelineProps = {
  data: TimelineItem[];
  color: string;
  setToolTip: Function;
};
