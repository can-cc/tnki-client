declare interface Card {
  cardId: number;
  frontText: string;
  frontImage: string;
  backText: string;
  backImage: string;
  createdAt: number;
}

declare interface LearningCard extends Card {
  easyTime: number;
  remeberTime: number;
  forgetTime: number;
}