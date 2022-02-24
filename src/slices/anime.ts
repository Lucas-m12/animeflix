import { createAsyncThunk, createEntityAdapter, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QueryClient } from 'react-query';
import { RootState } from 'store';
export interface Saga {
  'titles': {
    'en': string;
    'fr': string;
    'it': string;
    'jp': string;
  },
  'descriptions': {
    'en': string;
    'fr': string;
    'it': string;
    'jp': string;
  },
  'episode_from': number;
  'episode_to': number;
  'episodes_count': number;
}

export interface Anime {
  'anilist_id': number,
  'mal_id': number,
  'tmdb_id': number,
  'format': number,
  'status': number,
  'titles': {
    'rj': string,
    'en': string,
    'jp': string,
    'fr': string,
    'it': string,
  },
  'descriptions': {
    'en': string;
    'fr': string;
    'it': string;
    'jp': string;
  },
  'start_date': string;
  'end_date': string;
  'weekly_airing_day': number,
  'season_period': number,
  'season_year': number,
  'episodes_count': number,
  'episode_duration': number,
  'cover_image': string;
  'cover_color': string;
  'banner_image': string;
  'genres': string[];
  'sagas': Saga[],
  'score': number;
  'nsfw': boolean;
  'hasCoverImage': boolean;
  'id': number;

};

export interface AnimeState {
  animes: Anime[];
  animesByCategory: Anime[];
  selectedCategory: string;
};

const AnimeAdapter = createEntityAdapter();

const initialState: AnimeState = AnimeAdapter.getInitialState({
	animes: [],
	animesByCategory: [],
	selectedCategory: ''
});

export const animeSlice = createSlice({
	name: 'anime',
	initialState,
	reducers: { 
		addAnimes: (state, action: PayloadAction<Anime[]>) => {
			const animes = action.payload;
			const animesFiltered = animes.filter(anime => (
				!state.animes.find(animeState => animeState.id === anime.id)
			));
			state.animes = [...state.animes, ...animesFiltered];
		},
		addSelectedCategory: (state, action: PayloadAction<{ category: string }>) => {
			const { category } = action.payload;
			state.selectedCategory = category;
		}
	}
});

export const { addAnimes, addSelectedCategory } = animeSlice.actions;

export const {
	selectById: selectAnimeById
} = AnimeAdapter.getSelectors();

export const getAnimesByCategory = (state: RootState) => ( 
	state.anime.animes.filter(anime => anime.genres.includes(state.anime.selectedCategory))
);
export const getAnimes = (state: RootState) => state.anime.animes;
export const getSelectedCategory = (state: RootState) => state.anime.selectedCategory;
export const getAnimeById = (state: RootState, animeId: number) => (
	state.anime.animes.find(anime => anime.id === animeId)
);

export default animeSlice.reducer;