import constantsTypes from '../constants-types/constants-type';
import {sortingData} from "../../core/core";

const defaultState = {
    loading: false,
    loadingData: []
};

export default function (state = defaultState, action){
    const {type, payload} = action;

    switch (type) {
        case constantsTypes.LOAD_DATA + constantsTypes.START:
            return {
                loading: false,
                loadingData: []
            };

        case constantsTypes.LOAD_DATA + constantsTypes.SUCCESS:
            payload.loadingData.forEach((item, index) => {
                item.index = index + 1;
            });

            return {
                loading: payload.loading,
                loadingData: payload.loadingData
            };

        case constantsTypes.SORTING_DATA:
            const stateCopy = JSON.parse(JSON.stringify(state));

            return {
                loading: true,
                loadingData: stateCopy.loadingData.sort(sortingData(payload.type, payload.flag))
            };

        case constantsTypes.PAGINATION_PAGE:
            const stateCopy2 = JSON.parse(JSON.stringify(state));

            return {
                loading: true,
                loadingData: stateCopy2.loadingData
            };
    }

    return state;
}

