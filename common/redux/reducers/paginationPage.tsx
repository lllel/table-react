import constantsTypes from '../constants-types/constants-type';

const defaultState = {
    paginationPage: 1,
};

export default function (state = defaultState, action){
    const {type, payload} = action;

    switch (type) {
        case constantsTypes.PAGINATION_PAGE:
            return {
                paginationPage: payload.page,
            };
    }

    return state;
}

