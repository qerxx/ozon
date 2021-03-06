const getData = (str) => {
    return fetch(
        `https://test-ozon-f9a8a-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`
        )
        .then((response) => {
            return response.json()
        })
}

export default getData