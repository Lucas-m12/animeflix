import { Api } from 'services/api';

export const getGenres = async () => {
	const { data: { data } } = await Api.get('resources/1.0/0');
	return data.genres;
};