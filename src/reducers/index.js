import CONSTANS from '../constants';
const {ACTIONS} = CONSTANS;

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INPUT_CHANGE: {
            const {name, value} = action;
            return {...state,
                [name]: value
            }
        }
        default: {
            return state;
        }
    }
}