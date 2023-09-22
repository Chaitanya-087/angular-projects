import { Injectable } from '@angular/core';
import { Player } from './player.class';
import { Category } from './category.enum';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _maxValue = 6;
  private _minValue = 1;
  player: Player = new Player('karen');
  dice: number[] = [];
  isRolling: boolean = false;
  constructor() {
    this.dice = [1, 1, 1, 1, 1];
  }

  rollDice(): void {
    this.dice = this.dice.map((_) => {
      return Math.floor(
        Math.random() * (this._maxValue - this._minValue + 1) + this._minValue
      );
    });
  }
  
  toggleRolling(): void {
    this.isRolling = !this.isRolling;
  }

  getScore(): number {
    return this.player.score;
  }

  getBoard(): Record<string, number> {
    return this.player.board;
  }

  setCategoryScore(category: Category): void {
    const score = this.getCategoryScore(category);
    this.player.setCategoryScore(category, score);
  }

  getCategories(): Category[] {
    return Object.keys(this.player.board) as Category[];
  }
  getCategoryScore(category: Category): number {
    const scorer = this.player.getScorer(category);
    return scorer.calculateScore(this.dice);
  }
  getAvailableCategories(): Category[] {
    const availableCategories: Category[] = [];
    for (const category of Object.keys(this.player.board)) {
      if (this.player.board[category as Category] === 0) {
        availableCategories.push(category as Category);
      }
    }
    return availableCategories;
  }
}
