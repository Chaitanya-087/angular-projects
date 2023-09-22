import { CategoryScorer } from './../models/categoryScorer';
export class Straight implements CategoryScorer {
  static SMALL = 'small';
  static LARGE = 'large';
  constructor(private type: string) {}
  calculateScore(dice: number[]): number {
    const sortedDice = dice.slice().sort((a, b) => a - b);
    if (this.type === Straight.SMALL) {
      if (
        sortedDice[0] === 1 && sortedDice[1] === 2 && sortedDice[2] === 3 && sortedDice[3] === 4 ||
        sortedDice[0] === 2 && sortedDice[1] === 3 && sortedDice[2] === 4 && sortedDice[3] === 5 ||
        sortedDice[0] === 3 && sortedDice[1] === 4 && sortedDice[2] === 5 && sortedDice[3] === 6
      ) {
        return 30;
      }
    } else if (this.type === Straight.LARGE) {
      if (
        sortedDice[0] === 1 && sortedDice[1] === 2 && sortedDice[2] === 3 && sortedDice[3] === 4 && sortedDice[4] === 5 ||
        sortedDice[0] === 2 && sortedDice[1] === 3 && sortedDice[2] === 4 && sortedDice[3] === 5 && sortedDice[4] === 6
      ) {
        return 40;
      }
    }
    return 0; 
  }
}
