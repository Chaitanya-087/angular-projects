import { Category } from "./category.enum";
import { UpperCategory } from "./category/upperCategory";
import { CategoryScorer } from "./models/categoryScorer";
import { MultipleOfAKind } from "./category/multipleOfAKind";
import { FullHouse } from "./category/fullHouse";
import { Straight } from "./category/straight";
import { Chance } from "./category/chance";

export const categoryScorers: Record<Category, CategoryScorer> = {
    [Category.ACES]: new UpperCategory(1),
    [Category.TWOS]: new UpperCategory(2),
    [Category.THREES]: new UpperCategory(3),
    [Category.FOURS]: new UpperCategory(4),
    [Category.FIVES]: new UpperCategory(5),
    [Category.SIXES]: new UpperCategory(6),
    [Category.THREE_OF_A_KIND]: new MultipleOfAKind(MultipleOfAKind.THREE_OF_A_KIND),
    [Category.FOUR_OF_A_KIND]: new MultipleOfAKind(MultipleOfAKind.FOUR_OF_A_KIND),
    [Category.FULL_HOUSE]: new FullHouse(),
    [Category.SMALL_STRAIGHT]: new Straight(Straight.SMALL),
    [Category.LARGE_STRAIGHT]: new Straight(Straight.LARGE),
    [Category.YAHTZEE]: new MultipleOfAKind(MultipleOfAKind.YAHTZEE),
    [Category.CHANCE]: new Chance(),
};