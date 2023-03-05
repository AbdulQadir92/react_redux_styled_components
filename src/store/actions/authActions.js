

export const login = (userData) => {
    return (dispatch) => {
        dispatch({
            type: 'login',
            payload: userData
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: 'logout'
        })
    }
}