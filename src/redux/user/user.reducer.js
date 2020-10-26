import { UserActionTypes } from './user.types';

//gets 2 properties: last state or initial state
//receives an action that has a type such as string value


const INITIAL_STATE = {
    currentUser: null
}

//state = INITIAL_STATE means you can set state and it will fallback to the parameter

//function that gets a state object and a function
const userReducer = (state = INITIAL_STATE, action) => {
    //depending on the type of action, if match, then return new object out of reducer function
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;