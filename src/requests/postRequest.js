const postRequest = (url, dispatch, data) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                throw Error('Could not post data');
            }
            return res.json()
        })
        .then(data => {
            dispatch({
                type: 'login',
                payload: data
            })
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: 'login',
                payload: error
            })
        })
}

export default postRequest