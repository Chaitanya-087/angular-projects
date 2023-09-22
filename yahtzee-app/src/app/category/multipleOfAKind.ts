import { CategoryScorer } from '../models/categoryScorer';

export class MultipleOfAKind implements CategoryScorer {
  static THREE_OF_A_KIND = 3;
  static FOUR_OF_A_KIND = 4;
  static YAHTZEE = 5;

  constructor(private kind: number) {}

  calculateScore(dice: number[]): number {
    const sortedDice = [...dice.sort()];
    for (let i = 0; i <= sortedDice.length - this.kind; i++) {
      const currentDie = sortedDice[i];
      let matchCount = 1;
      for (let j = i + 1; j < sortedDice.length; j++) {
        if (sortedDice[j] === currentDie) {
          matchCount++;
        } else {
          break;
        }
      }
      if (matchCount >= this.kind) {
        if (this.kind === MultipleOfAKind.YAHTZEE) {
          return 50;
        }
        return sortedDice.reduce((sum, die) => sum + die, 0);
      }
    }
    return 0;
  }
}
