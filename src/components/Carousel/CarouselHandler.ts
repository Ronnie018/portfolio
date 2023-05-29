import { Dispatch, SetStateAction } from 'react';

interface iCarouselHandler {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  translateValue: number;
  setTranslateValue: Dispatch<SetStateAction<number>>;
  setCentered: Dispatch<SetStateAction<string | null>>;
  items: ItemProps[];
  correction: number;
  moveRate: number;
}

export type ItemProps = {
  path: string;
  filename: string;
  title: string;
  url: string;
  tags: string[];
  done: boolean;
  type: string;
};

export default class CarouselHandler implements iCarouselHandler {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  translateValue: number;
  setTranslateValue: Dispatch<SetStateAction<number>>;
  setCentered: Dispatch<SetStateAction<string | null>>;
  items: ItemProps[];
  correction: number;
  moveRate: number;

  constructor({
    currentIndex,
    setCurrentIndex,
    translateValue,
    setTranslateValue,
    setCentered,
    items,
    correction,
    moveRate,
  }: iCarouselHandler) {
    this.currentIndex = currentIndex;
    this.setCurrentIndex = setCurrentIndex;
    this.translateValue = translateValue;
    this.setTranslateValue = setTranslateValue;
    this.setCentered = setCentered;
    this.items = items;
    this.correction = correction;
    this.moveRate = moveRate;
  }

  isLastItem() {
    return this.currentIndex === this.items.length - 1;
  }

  isFirstItem() {
    return this.currentIndex === 0;
  }

  decreaseIndex() {
    this.setCurrentIndex(this.currentIndex - 1);
  }

  increaseIndex() {
    this.setCurrentIndex(this.currentIndex + 1);
  }

  moveFirst() {
    this.setCurrentIndex(0);
    this.setTranslateValue(0);
    this.setCentered(this.items[0 + this.correction]?.title);
  }

  getNextItemTitle() {
    return this.items[this.currentIndex + (1 + this.correction)]?.title;
  }

  getPrevItemTitle() {
    return this.items[this.items.length - (1 - this.correction)]?.title;
  }

  translateNext() {
    this.setTranslateValue(this.translateValue - this.moveRate);
  }

  translatePrev() {
    this.setTranslateValue(this.translateValue + this.moveRate);
  }

  moveNext() {
    this.increaseIndex();
    this.translateNext();
    this.setCentered(this.getNextItemTitle());
  }

  moveRight = () => {
    if (this.isLastItem()) return this.moveFirst();
    return this.moveNext();
  };

  getLastItemPosition() {
    return -(this.items.length - 1) * this.moveRate;
  }

  moveLast = () => {
    this.decreaseIndex();
    this.setTranslateValue(this.getLastItemPosition());
    this.setCentered(this.getPrevItemTitle());
  };

  movePrev = () => {
    this.decreaseIndex();
    this.translatePrev();
    this.setCentered(
      this.items[this.currentIndex - (2 - this.correction)]?.title
    );
  };

  moveLeft = () => {
    if (this.isFirstItem()) return this.moveLast();
    return this.movePrev();
  };
}
