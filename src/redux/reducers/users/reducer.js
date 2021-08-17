import actionTypes from './actionTypes'
import initialState from './initialState'

const usersReducer = (state = initialState,{type,payload}) => {
   switch (type) {
     case actionTypes.USERS_LOAD_START:
       return {
         ...state,
         isloading: true,
         users: null,
         errorMessage: null,
       };
     case actionTypes.USERS_LOAD_SUCCESS:
       return {
         ...state,
         isloading: false,
         users: payload,
         errorMessage: null,
       };
     case actionTypes.USERS_LOAD_ERROR:
       return {
         ...state,
         isloading: false,
         users: null,
         errorMessage: payload,
       };
       default:
           return state
   }
}

export default usersReducer