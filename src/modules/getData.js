const getData = () => {
    return fetch('https://test-ozon-f9a8a-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json()
    })
}

export default getData