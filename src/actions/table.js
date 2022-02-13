export const CHANGE_TABLE_STATUS = 'CHANGE_TABLE_STATUS';

export const changeTableStatus = ({id, status}) => {
    return async (dispatch) => {
        dispatch({ type: CHANGE_TABLE_STATUS, payload: {id, status}});
    }
};
