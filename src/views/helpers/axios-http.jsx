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

export const GetAllRepositoriesUser = async (username) => {
    var result = {
        data: [],
        count: 0
    };
    await axios({
        method: 'GET',
        url: `${API_URL}/users/${username}/repos?sort=pushed&per_page=6`
    })
        .then(res => {
            result.data = res.data;
        })
        .catch(err => {
            result.data = 'We couldn\'t find anything for this user';
        })
    if (result.data.length === 6) {
        result.count = 6;
    } else {
        result.count = result.data.length;
    }
    return result;
}