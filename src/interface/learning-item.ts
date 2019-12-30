import { MemoItem } from './memo-item';

export interface LearningItem {
    nextLearDate: string;
    learning: boolean;
    ef: number;
    memoItem: MemoItem;
}