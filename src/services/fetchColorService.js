import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    axiosWithAuth()
        .get('/api/colors')
        .then((res) => {
            console.log('Fetch Color', res);
        })
        .catch((err) => {
            console.log(err);
        })
}

export default fetchColorService;