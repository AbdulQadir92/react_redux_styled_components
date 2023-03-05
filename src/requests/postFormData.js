const postFormData = (url, dispatch, formData) => {
    fetch(url, {
        method: 'POST',
        body: formData
    })
        .then(res => {
            if (!res.ok) {
                throw Error('Could not post form data');
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

export default postFormData