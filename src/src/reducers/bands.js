import {BANDS_LIST,BANDS_ADD,BANDS_UPDATE,BANDS_REMOVE} from '../actions/bands';

let initialState = [
	{_id: 1, title: 'Iron Maiden', nationality: 'England', rate: 5, status: false, description: 'Up the Irons!', creationDate: '2019-05-13T00:00:00'},
	{_id: 2, title: 'Iced Earth', nationality: 'United States', rate: 5, status: true, description: 'Iced (mother fucking) Earth!', creationDate: '2019-05-13T00:00:00'},
	{_id: 3, title: 'Twilight Force', nationality: 'Sweden', rate: 3.5, status: true, description: 'Thematic Power Metal band from Sweden.', creationDate: '2019-05-13T00:00:00'},
	{_id: 4, title: 'Necrophagist', nationality: 'Germany', rate: 4, status: false, description: 'Best Technical Death Metal band ever.', creationDate: '2019-05-13T00:00:00'},
	{_id: 5, title: 'Stratovarius', nationality: 'Finland', rate: 4.5, status: true, description: 'Epic Power Metal from Finland.', creationDate: '2019-05-13T00:00:00'}
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
