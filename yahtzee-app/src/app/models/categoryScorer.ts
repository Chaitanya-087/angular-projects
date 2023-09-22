export interface CategoryScorer {
    calculateScore(dice: number[]): number;
}