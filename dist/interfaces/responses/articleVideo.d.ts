import { ArticleVideoUser } from './articleVideoUser';
export interface ArticleVideo {
    _typeOf: string;
    id: number;
    path: string;
    cloudinaryVideoUrl: string;
    title: string;
    userId: number;
    videoDurationInMinutes: string;
    user: ArticleVideoUser;
}
