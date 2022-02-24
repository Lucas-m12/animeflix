import { useInfiniteQuery, useQuery } from 'react-query';
import { Api } from 'services/api';
import { Anime } from 'slices/anime';
import { twelveHoursInMiliseconds } from 'utils/twelveHoursInMiliseconds';

export interface AnimeResponse {
  data: {
    count: number;
    current_page: number;
    documents: Anime[];
    last_page: number;
  },
  status_code: number;
}

export async function getAnimes(page: number) {
	const { data } = await Api.get(
		`/anime?nsfw=true&with_episodes=false&page=${page}`
	);
	return data.data;
}

export default function useFetchAnimes({ pageParam = 0 }: { pageParam: number }) {
	return useInfiniteQuery(
		'allAnimes', 
		() => getAnimes(pageParam), 
		{
			staleTime: twelveHoursInMiliseconds,
			getPreviousPageParam: firstPage => firstPage,
			getNextPageParam: nextPage => {
				return nextPage;
			}
		}
	);
}