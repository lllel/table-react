import constantsTypes from '../constants-types/constants-type';

const axios = require('axios');
const urlSmallData = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const urlLargeData = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

export function loadData(userAnswer) {
    return (dispatch) => {
        dispatch({
            type: constantsTypes.LOAD_DATA + constantsTypes.START,
            payload: {
                loading: false,
                loadingData: []
            }
        });

        let data;

        if (userAnswer === '1') {
            data = urlSmallData;
        }

        if (userAnswer === '2') {
            data = urlLargeData;
        }

        if (userAnswer !== '1' && userAnswer !== '2') {
            data = urlSmallData;
        }

        axios.get(data)
            .then((data) => {
                dispatch({
                    type: constantsTypes.LOAD_DATA + constantsTypes.SUCCESS,
                    payload: {
                        loading: true,
                        loadingData: data.data
                    }
                });
            })
            .catch((err) => {
                throw new Error(err);
            });
    }
}

export function sortingData(type, flag) {
    return (dispatch) => {
        dispatch({
            type: constantsTypes.SORTING_DATA,
            payload: {
                type: type,
                flag: flag
            }
        });
    }
}

export function getPaginationPage(page) {
    return (dispatch) => {
        dispatch({
            type: constantsTypes.PAGINATION_PAGE,
            payload: {
                page: page
            }
        });
    }
}
