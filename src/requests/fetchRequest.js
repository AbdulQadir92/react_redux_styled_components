const fetchRequest = (url, dispatch, type) => {
    const abortController = new AbortController();
    fetch(url, {
        signal: abortController.signal,
        method: 'GET'
    })
        .then(res => {
            if (!res.ok) {
                throw Error('Could not fetch data')
            }
            return res.json();
        })
        .then(data => {
            dispatch({
                type: type,
                payload: data
            })
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: type,
                payload: { error: error }
            })
        })
}

export default fetchRequest