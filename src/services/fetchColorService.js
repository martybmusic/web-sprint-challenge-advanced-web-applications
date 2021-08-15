import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    return axiosWithAuth()
        .get('/api/colors')
        .then((res) => {
            console.log('Fetch Color', res);
            return(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
}

export default fetchColorService;