import axios from "axios";

const API_URL = 'https://api.github.com';

export const GetUser = async (username) => {
    var result = {};
    await axios({
        method: 'GET',
        url: `${API_URL}/users/${username}`
    })
        .then(res => {
            result = res;
        })
        .catch(err => {
            result = 'We couldn\'t find anything for this user';
        })
    return result;
}