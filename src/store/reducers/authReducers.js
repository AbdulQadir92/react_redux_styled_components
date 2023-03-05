const initialState = {
    user: {}
};

const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                user: action.payload
            }

        case 'logout':
            return {
                ...state,
                user: {}
            }

        default:
            return state
    }
}

export default authReducers