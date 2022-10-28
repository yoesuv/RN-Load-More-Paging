import { PostModel } from "./post-model";

export interface PagingPostModel {
    nextPage?: number;
    data: PostModel[];
}