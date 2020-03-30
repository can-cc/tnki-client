import { MemoItem } from './memo-item';

export interface LearningItem {
  nextLearnDate: string;
  learning: boolean;
  ef: number;
  memoItem: MemoItem;
}
