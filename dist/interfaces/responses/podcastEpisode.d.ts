import { PodcastEpisodePodcast } from './podcastEpisodePodcast';
export interface PodcastEpisode {
    _typeOf: string;
    id: number;
    path: string;
    imageUrl: string;
    title: string;
    podcast: PodcastEpisodePodcast;
}
