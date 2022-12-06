import axios from 'axios';
const KEY = 'AIzaSyDHSg5vepkaIDyhVqA81OAEwYG6uYFSa7U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }
})