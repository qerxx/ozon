import getData from './getData'
import postData from './postData'

const second = () => {
    const cartBth = document.getElementById('cart')

    getData().then((data) => {
        console.log(data);
    })
}

export default second