// ----- Constants to standardize reducers with actions ------------------------------------
export const BANDS_LIST		= 'BANDS_LIST';
export const BANDS_ADD		= 'BANDS_ADD';
export const BANDS_UPDATE = 'BANDS_UPDATE';
export const BANDS_REMOVE = 'BANDS_REMOVE';

// ----- Action with proper dispatchs ------------------------------------
export const fetchBands = () 			=> (dispatch, getState) => dispatch({type: BANDS_LIST})
export const addBand 		= (band) 	=> (dispatch, getState) => dispatch({type: BANDS_ADD, band});
export const updateBand = (band) 	=> (dispatch, getState) => dispatch({type: BANDS_UPDATE, band});
export const removeBand = (band) 	=> (dispatch, getState) => dispatch({type: BANDS_REMOVE, band});
