export const ADD_TO_CART = 'ADD_TO_CART'; 
// export const UPDATE_CART = 'UPDATE_CART'; 

export const updateCard = (obj) => {
    return async (dispatch) => {
        dispatch({ type: ADD_TO_CART, payload: obj});
    }
};
