import { CategoryScorer } from "../models/categoryScorer";

export class FullHouse implements CategoryScorer {
    calculateScore(dice: number[]): number {
      const sortedDice = dice.slice().sort((a, b) => a - b);
      if ((sortedDice[0] === sortedDice[1] && sortedDice[2] === sortedDice[3] && sortedDice[3] === sortedDice[4]) ||
          (sortedDice[0] === sortedDice[1] && sortedDice[1] === sortedDice[2] && sortedDice[3] === sortedDice[4])) {
        return 25;
      }
      return 0;
    }
}