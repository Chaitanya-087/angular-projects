import { CategoryScorer } from "../models/categoryScorer";

export class Chance implements CategoryScorer {
    calculateScore(dice: number[]): number {
      return dice.reduce((sum, die) => sum + die, 0);
    }
  }
  