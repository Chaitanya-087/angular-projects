import { Author } from "./author";

export interface Reply {
    id: number,
    content: string,
    user: Author
}