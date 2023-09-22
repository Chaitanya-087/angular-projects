import { Author } from "./author";
import { Reply } from "./reply";

export interface Comment {
    id: number,
    content: string,
    user: Author
    replies?: Reply[]
}