import {BANDS_LIST,BANDS_ADD,BANDS_UPDATE,BANDS_REMOVE} from '../actions/bands';

let initialState = [
	{_id: 1, title: 'Iron Maiden', nationality: 'England'},
	{_id: 2, title: 'Iced Earth', nationality: 'United States'},
	{_id: 3, title: 'Twilight Force', nationality: 'Sweden'},
	{_id: 4, title: 'Necrophagist', nationality: 'Germany'},
	{_id: 5, title: 'Stratovarius', nationality: 'Finland'}
];

export default function bands (state = initialState, action = {}) {
	switch (action.type) {
		case BANDS_LIST:
			return state;
		case BANDS_ADD:
			return [...state, action.band];
		case BANDS_UPDATE:
			return state.map((item, index) => item._id === action.band._id ? action.band : item);
		case BANDS_REMOVE:
			return state.filter(item => item._id !== action.band._id);
		default:
			return state;
	}
}
