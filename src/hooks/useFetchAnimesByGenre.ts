import { useQuery } from 'react-query';
import { Api } from 'services/api';
import { Anime } from 'slices/anime';
import { twelveHoursInMiliseconds } from 'utils/twelveHoursInMiliseconds';

interface AnimeResponse {
  data: {
    count: number;
    current_page: number;
    documents: Anime[];
    last_page: number;
  },
  status_code: number;
}

export async function getAnimesByGenre(genre: string) {
	const { data } = await Api.get<AnimeResponse>(`anime?&nsfw=true&genres=${genre}&with_episodes=true`);
	if (data.status_code === 404) {
		return [];
	}
	return data.data.documents;
}

export default function useFetchAnimesByGenre(genre: string) {
	
	return useQuery(
		`animes/${genre}`, 
		() => getAnimesByGenre(genre), 
		{
			staleTime: twelveHoursInMiliseconds
		}
	);
}