import { CategoryScorer } from './../models/categoryScorer';
export class UpperCategory implements CategoryScorer {
    constructor(private value: number) {}
    calculateScore(dice: number[]): number {
        return dice.filter(die => die === this.value).reduce((a, b) => a + b, 0);
    }
}