import { Author } from "./author";
import { Comment } from "./comment";
import { Tag } from "./tag";

export interface Post {
    id: number;
    title: string;
    content: string;
    author: Author;
    createdAt: Date;
    likesCount: number;
    commentsCount: number;
    tags?: Tag[];
    comments?: Comment[];
}
