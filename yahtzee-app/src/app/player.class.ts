import { BOARD } from "./board";
import { Category } from "./category.enum";
import { categoryScorers } from "./categoryScorers";
import { CategoryScorer } from "./models/categoryScorer";

export class Player {
    private _board:Record<Category,number> = BOARD;
    constructor(private _name: string, private _score: number = 0) {}

    get name(): string {
        return this._name;
    }

    get score(): number {
        return this._score;
    }

    get board(): Record<Category, number> {
        return this._board;
    }

    set score(score: number) {
        this._score = score;
    }

    setCategoryScore(category: Category, score: number): void {
        this._board[category] = score;
        this._score += score;
    }

    getScorer(category: Category): CategoryScorer {
        return categoryScorers[category];
    }
}